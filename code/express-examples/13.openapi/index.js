const express = require("express");

const middlewares = require("./middlewares")
const routes = require("./routes")
const db = require("./models")

const app = express();
// Add cors to allow cross origin requests from editor.swagger.io
const cors = require("cors")

// environment variable PORT or 3000 if unset
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// The express.static middlware creates a route for every file in the path specified
// Add cors just for this middleware
app.use('/', cors(), express.static('swagger'))

app.use((req, res, next) => {
  req.models = db.models
  next()
})

app.use('/', routes)

app.use(middlewares.mongoError)
app.use(middlewares.error)
app.use(middlewares.notfound)

// Start up the database, then the server and begin listen to requests
if(process.env.NODE_ENV != "test") {
  db.connectDb().then(() => {
    const listener = app.listen(port, () => {
      console.info(`Server is listening on port ${listener.address().port}.`);
    })
  }).catch((error) => {
    console.error(error)
  })
}

module.exports = app