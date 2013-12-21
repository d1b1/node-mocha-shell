node-mocha-shell
================

Simple shell to run node.js Apps and Mocha tests from the CLI.

This is a node module that provides a wrapper for a script that runs
mocha programmatically, and will start an Express App. This process is
designed to allow for a single process for testing.

This code was written to help swagger.js API test and deploy using
codeship.io, as well as utilitize the coveralls.io code coverage 
service.

### Install

   npm install git://github.com/d1b1/node-mocha-shell#master

### Argument
The following are cli options for defining the test and app
server scripts that shell will use to test with.

--test (Optional) Testscript name. If not defined, the shell will attempt
to find and use all the .js files in the test folder.

--test-dir (Optional) Directory for test files.

--app (Optional) Script path for the bootstrap express.js app. Assumes
the app.js will be found in test/lib/app.js.

Coming soon - .mocha-shell will contain all the mocha and app
test information to change the default to the `mocha-shell` script
call.

### Usage

    // From a CLI
    mocha-shell 

    // Using Istanbul
    ./node_modules/.bin/istanbul cover mocha-shell
   
    // Sending istanbul .coverage data to Coveralls.io
    cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

    // With full arguments
    mocha-shell --test myscript.js --test-dir ./test 
