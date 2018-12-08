'use strict'

module.exports = {
  port: 3000,
  version: '1.0.0',
  basePath: '/api',
  defaultMessage: 'Possible Backend',
  swagger: {
    apiVersion: '1.0',
    swaggerVersion: '2.0',
    swaggerURL: '/api/documentation',
    swaggerJSON: '/api/api-docs.json',
    basePath: `http://0.0.0.0:3000`,
    swaggerUI: './swagger',
    info: {
      version: '1.0',
      title: 'Possible API Backend',
      description: 'API REST Possible Test'
    },
    schemes: ['http'],
    apis: [
      './handlers/books-handler.js'
    ]
  },
  log: {
    directory: './logs',
    filename: 'possible-backend.log'
  },
  db: {
    url: 'mongodb://localhost:27018/possibleDb',
    dbName: 'possibleDb',
    dbCollection: 'books'
  }
}
