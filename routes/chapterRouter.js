var express = require('express')
var router = express.Router()
var chapterController = require('../controllers/chapterController')

router.route('/')
.get(chapterController.chapterHome)

router.route('/contents')
.get(chapterController.contents)

router.route('/one')
.get(chapterController.chapterOne)

router.route('/two')
.get(chapterController.chapterTwo)

router.route('/three')
.get(chapterController.chapterThree)

router.route('/four')
.get(chapterController.chapterFour)

router.route('/five')
.get(chapterController.chapterFive)



module.exports = router
