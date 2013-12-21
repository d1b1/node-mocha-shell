
module.exports = function(app, options) {

  app.get('/get', function(req, res) {
  	res.send('Test path 1')
  })

  app.delete('/delete', function(req, res) {
  	res.send('Test path 1')
  })

  app.post('/post', function(req, res) {
  	res.send('Test path 1')
  })

}
