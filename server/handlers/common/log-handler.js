'use strict'
const Fs = require('fs')
const Winston = require('winston')
const Config = require('../../config')

if (!Fs.existsSync(Config.log.directory)) { // Create the directory if it does not exist
  Fs.mkdirSync(Config.log.directory)
}

const Logger = new (Winston.Logger)({
  transports: [
    new (Winston.transports.Console)({
      timestamp: true,
      level: 'debug',
      colorize: true
    }),
    new (require('winston-daily-rotate-file'))({
      dirname: Config.log.directory,
      filename: Config.log.filename
    })
  ]
})
module.exports = Logger
