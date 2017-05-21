var express = require('express')
var router = express.Router()
var chapterController = require('../controllers/chapterController')

router.route('/')
.get(chapterController.chapterHome)

router.route('/one')
.get(chapterController.chapterOne)



module.exports = router
