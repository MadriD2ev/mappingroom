const express = require('express')
//refactorizando código
const router = express.Router()
const indexControllers = require('../controllers/roomsControllers')

router.get('/rooms', indexControllers.room)

router.get('/rooms/:id', indexControllers.rmType)

module.exports = router