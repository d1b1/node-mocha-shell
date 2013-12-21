var assert = require('assert')

describe('Suite 1', function(done){
	
  it('Test passes', function(done) {

    assert.equal(1, 1, '1 == 1')

    // When testing an async app, such as an express.js endpoint
    // there is aften a need to use a callback to pass control back
    // to mocha after api calls.
    done()
  })

})

describe('Suite 2', function(done){
	
  it('Test passes', function(done) {

    assert.equal(2, 2, '2 == 2')

    // When testing an async app, such as an express.js endpoint
    // there is aften a need to use a callback to pass control back
    // to mocha after api calls.
    done()
  })

})