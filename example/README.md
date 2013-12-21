Example for a `mocha-shell` test environment.

### Start 

    npm install
    mocha-shell --app_dir ./app 

Explicitly set the `app_dir` and `test_dir``

    mocha-shell --app_dir ./app --test_dir ./test

### Files

    /app
      bootstrap.js
    /test
      test1.js
      test2.js

### Setup of an Express.js App
The following are helpful patterns to apply in your app.js file. This will
needs to setup and configure your app.js. It should handle all the settings
requires and env variables.

Note - Depending upon your expressjs setup, the contruction of this file can
be easier or harder to manager. The objective being to setup a `app` and 
export it let the shell to start and manager.

    // Sample Express boostrap file

    var express  = require('express')
    var passport = require('passport')
    var fs       = require('fs')

    // Setup any env variables that are save to add in the code.
    process.env.VARIABLE_1="XXXX"
    process.env.VARIABLE_2="XXXX"

    var basePath = require('path').join(__dirname, '/../..')
    var models_path = require('path').join(__dirname, '/../../app/models')

    // Bootstrap models
    fs.readdirSync(models_path).forEach(function (file) {
      if (~file.indexOf('.js')) require(models_path + '/' + file)
    })

    var app = express()

    // Bootstrap the controllers/endpoints
    require(basePath + '/config/express')(app)
    require(basePath + '/config/routes')(app)

    // Export the app to allow the mocha-shell to 
    // start express.

    module.exports = app

### Pattern
This example uses the a `config` & `model/controller` pattern
found in (node-express-mongoose-demo)[https://github.com/madhums/node-express-mongoose-demo].
This pattern is helpful because it splits the express app configuration
into separate paths to dry out the requirements. The use the of the /config
folder for app allows the bootstrap to load specifc elements and pass into 
testing configuration values, when needed.