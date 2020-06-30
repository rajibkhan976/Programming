// Mongoose and mocking requests
const sinon = require('sinon');

const mongoose = require('mongoose')
// enable mongoose debug to make test fails more verbose
mongoose.set('debug', true)
// sinon-mongoose allows mocking mongoose models
require('sinon-mongoose')

// initialize the app and models
const app = require('../../index.js')

// supertest for sending test requests
const agent = require('supertest').agent(app);
// chai is used for comparing JSON results
const expect = require('chai').expect;

// initialize the real model
const User = mongoose.model('User')

// create a mock that expects calls and provides controlled results
var userMock = sinon.mock(User)

beforeEach(() => {
	// the calls and expectations to the mock needs to be reset before each call
	// otherwise old test case expectations or resolves might fail the case after it
	userMock.restore();
	// just resetting doesn't quite do it, we have to create a new one too
	userMock = sinon.mock(User)
});

afterEach( () => {
	// this is where the expectations of the mock is tested, otherwise unmet expectations
	// ie. calls that were never made will not fail
	userMock.verify();
});


describe('User Integration tests', () => {

	// Our test data
	const request = {
		"address": {
			"geo": {
				"lat": 100,
				"lng": 2
			},
			"street": "My Stree",
			"suite": "My Suite",
			"city": "My City",
			"zipcode": "Zip"
		},
		"name": "My Name",
		"username": "coolz",
		"email": "coolz@gmail.com",
	}

	const expected = {
		"address": {
			"geo": {
				"lat": 100,
				"lng": 2
			},
			"street": "My Stree",
			"suite": "My Suite",
			"city": "My City",
			"zipcode": "Zip"
		},
		"_id": "5cecf112a66bc43a217dfda3",
		"name": "My Name",
		"username": "coolz",
		"email": "coolz@gmail.com",
		"__v": 0
	}

	describe('users.get cool stuff', ()  => {

		it('Should return an array of all users', (done) => {

			// Given (preconditions)
			userMock
			// we should call Users.find
			.expects('find')
			// we should call either:
			// async User.find()
			// or User.find().then()
			// or User.find().exec()
			// it always results in .exec() being called
			.chain('exec')
				// this expected is what should be returned by mongo
			.resolves([expected]);

			// When (someting happens)
			agent
			.get('/users')
			// we send a get request to /users
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(200);
				// this expected is what should be returned by the api
				expect(res.body).to.eql([expected]);
				done();
			});
		});

		it('Should get a user by name', (done) => {

			// Given (preconditions)
			userMock
			.expects('find')
			.withArgs({"username": "coolz"})
			.chain('exec')
			.resolves([expected]);

			// When (someting happens)
			agent
			.get('/users?username=coolz')
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(200);
				expect(res.body).to.eql([expected]);
				done();
			});
		});
	});

	describe('users.post', ()  => {
		it('Should be able to create a user', (done) => {
			// Given (preconditions)
			userMock
			.expects('create')
			.withArgs(request)
			.chain('exec')
			.resolves(expected);

			// When (someting happens)
			agent
			.post('/users/')
			.send(request)
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(201);
				expect(res.body).to.eql(expected);
				done();
			});
		});
	})

	describe('users.put', ()  => { 
		it('Should be able to create a user', (done) => {
			// Given (preconditions)
			userMock
			.expects('updateOne')
			.withArgs({ _id: "5cecf112a66bc43a217dfda3" }, request)
			.chain('exec')
			.resolves({ n: 1,
				nModified: 0,
				upserted: [ { index: 0, _id: "5cecf112a66bc43a217dfda3" } ],
				ok: 1 });

			userMock
			.expects('findById')
			.withArgs("5cecf112a66bc43a217dfda3")
			.chain('exec')
			.resolves(expected)

			// When (someting happens)
			agent
			.put('/users/5cecf112a66bc43a217dfda3')
			.send(request)
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(201);
				done();
			});
		});

		it('Should be able to update a user', (done) => {
			// Given (preconditions)
			userMock
			.expects('updateOne')
			.withArgs({ _id: "5cecf112a66bc43a217dfda3" }, request)
			.chain('exec')
			.resolves({ n: 1,
				nModified: 1,
				ok: 1 });

				userMock
				.expects('findById')
				.withArgs("5cecf112a66bc43a217dfda3")
				.chain('exec')
				.resolves(expected)

			// When (someting happens)
			agent
			.put('/users/5cecf112a66bc43a217dfda3')
			.send(request)
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(200);
				done();
			});
		});
		

		it('Should return 204 when not updating a user', (done) => {
			// Given (preconditions)
			userMock
			.expects('updateOne')
			.withArgs({ _id: "5cecf112a66bc43a217dfda3" }, request)
			.chain('exec')
			.resolves({ n: 1,
				nModified: 0,
				ok: 1 });

			// When (someting happens)
			agent
			.put('/users/5cecf112a66bc43a217dfda3')
			.send(request)
			.end((err,res) => {
			// Then (something should happen)
				expect(res.status).to.equal(204);
				done();
			});
		});

	});
});
