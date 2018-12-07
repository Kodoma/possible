'use strict'

const Restify = require('restify')
const Swagger = require('swagger-restify')
const Config = require('./config')

const BooksHandler = require('./handlers/books-handler')

const Server = Restify.createServer({
    version: Config.version,
    name: Config.swagger.info.title
})


// Middlewares
Server.use(Restify.bodyParser({ mapParams: true }))
Server.use(Restify.queryParser())

// CORS
Restify.CORS.ALLOW_HEADERS.push('authorization')
Server.use(Restify.CORS())

// Default path
Server.get({ path: Config.basePath, version: Config.version }, (req, res, next) => {
    res.send(Config.defaultMessage)
    next()
})
// By Query endpoint
Server.get({
    path: `${Config.basePath}/books`,
    version: Config.version
  }, BooksHandler.titleByQuery)

// Swagger
Swagger.init(Server, Config.swagger)

Server.listen(Config.port, () => {
  console.log(`${Config.swagger.info.title} server is ready on port %s`, Config.port)
})
