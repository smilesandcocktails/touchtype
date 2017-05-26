var express = require('express')
var router = express.Router()
var homeController = require('../controllers/homeController')


router.route('/')
.get(homeController.intro)

router.route('/contents')
.get(homeController.contents)

router.route('/keyboard')
.get(homeController.keyboard)

router.route('/1')
.get(homeController.chaptOne)

router.route('/2')
.get(homeController.chaptTwo)

router.route('/3')
.get(homeController.chaptThree)

module.exports = router
