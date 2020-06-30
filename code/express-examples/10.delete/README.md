# Mongoose

Mongoose is an NPM lib used to communicate with a mongodb database.

Find a user by supplying a query parameter

## Setting it up from scratch

```sh
npm install --save mongoodb
```

## Instructions

```sh
npm install
npm start
```

## Test

Add a user to query for

```sh
curl -X POST localhost:3000/users --data '{
  "name": "My Name",
  "username": "coolz",
  "email": "coolz@gmail.com",
  "address": {
    "street": "My Stree",
    "suite": "My Suite",
    "city": "My City",
    "zipcode": "Zip",
    "geo": {
      "lat": 1,
      "lng": 2
    }
  }
}' -H "Content-Type: application/json; charset=utf-8" | jq .

{
  "address": {
    "geo": {
      "lat": 1,
      "lng": 2
    },
    "street": "My Stree",
    "suite": "My Suite",
    "city": "My City",
    "zipcode": "Zip"
  },
  "_id": "5ce52a319d587f271134f82f",
  "name": "My Name",
  "username": "coolz",
  "email": "coolz@gmail.com",
  "__v": 0
}
```

Delete the user, returns the deleted data

```sh
curl -i -X DELETE localhost:3000/users/5ce52a319d587f271134f82f

HTTP/1.1 200 OK
{"address": ...}
```

Delete the user again, should return 204 since the user is now gone

```sh
curl -i -X DELETE localhost:3000/users/5ce52a319d587f271134f82f

HTTP/1.1 204 No Content