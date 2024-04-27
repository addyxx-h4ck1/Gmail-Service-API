const { eventLogger } = require('./logger')

const errorHandler = (err, req, res) => {
  const error = new Error('Internal server error')
}

module.exports = errorHandler
