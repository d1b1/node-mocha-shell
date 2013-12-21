Mocha Shell 
================

(Beta) Simple shell to run node.js Apps and Mocha tests from the CLI.

This is a node module that provides a wrapper for a script that runs
mocha programmatically, and will start an Express App. This process is
designed to allow for a single process for testing.

This code was written to help swagger.js API test and deploy using
codeship.io, as well as utilitize the coveralls.io code coverage 
service. 

#### Install

    npm install git://github.com/d1b1/node-mocha-shell#master --save-dev

#### Options
The following are cli options for defining the test and app
server scripts that shell will use to test with.

* `--test` (Optional) Testscript name. If not defined, the shell will attempt
to find and use all the .js files in the test folder.
* `--test-dir` (Optional) Directory for test files.
* `--app` (Optional) Script path for the bootstrap express.js app. Assumes
the app.js will be found in test/lib/app.js.

#### Usage

CLI using defaults. Will look for and run all test files in the 
default ./test folder. It wil look for a ./test/app folder.

    mocha-shell 

From CLI limited to a single test file. The --file allows you to
run in the app + mocha environment for a single file. This is helpful
when a single test fails and needs to be debugged.

    mocha-shell --test ./test/testOne.js

When using it with Istanbul for a code coverage report this will
give the `cover` comman the trace needed to find and instrument
the correct files. The `mocha-shell` command will then find and
run the tests within the same space of the Express.js app. 

    // Using Istanbul
    ./node_modules/.bin/istanbul cover mocha-shell
   
    // Hint: Sending istanbul .coverage data to Coveralls.io
    cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

Example of calling the command with the `--test` and the `--test-dir` file. 

    mocha-shell --test myscript.js --test-dir ./test 

#### NPM

    { 
      ...,
      "test": "mocha-shell --test-dir ./test --app ./test/lib/bootstrap.js"
    }

#### Example
Included is an example. [Example](https://github.com/d1b1/node-mocha-shell/tree/master/example)
This example used the [node-express-mongoose-demo](https://github.com/madhums/node-express-mongoose-demo)
sample app and pattern.

#### Coming Soon
Working on a better way to setup shell defaults to keep configuration easier
for CI setups. `.mocha-shell.json` will contain all the mocha and app
test information to change the default to the `mocha-shell` script
call.

    module.exports = {
        "app_dir": "./test/lib",
        "test_dir": "./test"
        "mocha": { 
           "timeout": 500,
           "reporter": "spec"
        },
        "env": {
        	"key": "value"
        }
    } 

#### License (The MIT License)

Copyright (c) 2013 Stephan Smith < stephan.smith.bc93@gmail.com >

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.