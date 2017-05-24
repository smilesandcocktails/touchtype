var express = require('express')
var ejsLayouts = require('express-ejs-layouts')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
var port = process.env.PORT || 8000
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.static(path.join(__dirname, 'public')))

var keyboardRouter = require('./routes/keyboardRouter')
app.use('/keyboard', keyboardRouter)

var chapterRouter = require('./routes/chapterRouter')
app.use('/chapter', chapterRouter)

var homeRouter = require('./routes/homeRouter')
app.use('/', homeRouter)


app.listen(port, function() {
  console.log('express is running on port ' + port);
})
