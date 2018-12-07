'use strict'
const Boom = require('boom')
const Logger = require('./log-handler')
module.exports = {
  process: err => {
    if (err.headers && err.headers.exception) {
      Logger.error('Full error:', err.headers.exception)
      let serviceException = err.headers.exception
      let responseException = serviceException
      if (serviceException && serviceException === '[]') {
        responseException = 'La cantidad de pasajeros por habitación no concuerda con lo permitido'
      } else if (serviceException && (serviceException.indexOf('[') > -1 || serviceException.indexOf(']') > -1)) {
        serviceException.replace('[', '').replace(']', '').split(',').map(msg => {
          responseException = msg.trim().split(':')[1]
        })
      }
      Logger.error('handlers:error: ', responseException)
      return Boom.create(err.statusCode, responseException) // BM and GDSI handled exceptions
    } else if (err.output && err.output.payload) {
      Logger.error('handlers:error: ', err.output.payload.message)
      return Boom.create(err.output.payload.statusCode, err.output.payload.message)
    } else if (err.statusCode && err.statusCode === 404) {
      Logger.error('handlers:error: No service was found')
      return Boom.notFound('No service was found')
    } else {
      Logger.error('handlers:error: Unavailable', err)
      return Boom.badRequest('Unavailable')
    }
  }
}
