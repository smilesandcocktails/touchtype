var express = require('express')
var router = express.Router()
var homeController = require('../controllers/homeController')


router.route('/')
.get(homeController.home)
.post(homeController.goTochapterOne)


module.exports = router
