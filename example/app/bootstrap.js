/* Express.js Bootstrap Application

   Uses the Mongooose + Express app pattern form madhums

   https://github.com/madhums/node-express-mongoose-demo
*/ 

var express  = require('express')
var passport = require('passport')
var mongoose = require('mongoose')
var fs       = require('fs')

/*
  Setup any env variables that are save to add in the code.
  Not recommended but if you are using a local mongodb on 
  codeship.io it is not a terrible issue.
*/

process.env.MONGODB_URI="mongodb://xxxx:yyyyy@localhost:27017/testdb"

/* Configure the MongoDB. */
mongoose.connect(process.env.MONGODB_URI)

var basePath = require('path').join(__dirname, '/../..')
var models_path = require('path').join(__dirname, '/../../app/models')

/* Bootstrap models */
fs.readdirSync(models_path).forEach(function (file) {
  if (~file.indexOf('.js')) require(models_path + '/' + file)
})

var app = express()

require(basePath + '/config/express')(app)
require(basePath + '/config/routes')(app, {})

/*
  Note: Export the app to allow the mocha-shell to start express.
  It needs to be ready to start. 
*/

module.exports = app