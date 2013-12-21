var express = require('express')
  , pkg = require('../package.json')

module.exports = function (app) {

  app.set('views', __dirname + '/../views')
  app.set('view options', { layout: true, pretty: true })
  app.set('view engine', 'jade')

  app.use(express.logger('dev'))
  app.use(express.compress())
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(express.cookieParser('MyApp'))

  app.use(app.router)

  /* Setup the Jade Locals */
  app.locals.moment  = require('moment')
 
}