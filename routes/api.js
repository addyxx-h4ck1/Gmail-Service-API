const express = require('express')
const { mailController } = require('../controllers/mail-contr')
const router = express.Router()

router.post('/', mailController)

module.exports = router
