const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises
const { format } = require('date-fns')
const { randomUUID } = require('crypto')

const eventLogger = async (message, fileName) => {
  const date = format(new Date(), 'yyyyMMdd\tHH:mm:ss')
  const logEvent = `${date}\t${randomUUID()}\t${message}\n`
  if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
    fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
  }

  try {
    fsPromises.appendFile(
      path.join(__dirname, '..', 'logs', fileName),
      logEvent
    )
  } catch (error) {
    console.log(error)
  }
}

const logger = (req, res, next) => {
  eventLogger(
    `${req.url}\t${req.method}\t${req.headers.origin}`,
    'eventLogs.log'
  )
  next()
}

module.exports = { logger, eventLogger }
