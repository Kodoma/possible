'use strict'

const Restify = require('restify')
const Swagger = require('swagger-restify')
const Config = require('./config')

const BooksHandler = require('./handlers/books-handler')

const Server = Restify.createServer({
    version: Config.version,
    name: Config.swagger.info.title
})

// Default path
Server.get({ path: Config.basePath, version: Config.version }, (req, res, next) => {
    res.send(Config.defaultMessage)
    next()
})
// By Query endpoint
Server.get({
    path: `${Config.basePath}/title?q:`,
    version: Config.version
  }, BooksHandler.titleByQuery)