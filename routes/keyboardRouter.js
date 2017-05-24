var express = require('express')
var router = express.Router()
var keyboardController = require('../controllers/keyboardController')


router.route('/')
.get(keyboardController.keyboard)


module.exports = router
