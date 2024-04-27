require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./routes/api')
const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')

//server Port
const port = process.env.PORT || 3000

//middleware
app.use(express.static('./public'))
app.use(logger)
app.use(express.json())

//Endpoints
app.use('/api/v1/mail-service', router)

//error handler
// app.use(errorHandler)

//start server
app.listen(port, () => console.log(`server is running on port ${port}`))
