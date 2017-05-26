const msg = require('../msg.json')

function intro(req, res) {
  console.log('HOMECONTROLLER - intro FUNCTION - STARTED')
  res.render('intro', {json: msg})
}

function contents (req, res) {
  console.log('HOMECONTROLLER - contents FUNCTION - STARTED')
  res.render('contents')
}

function keyboard (req, res) {
  console.log('HOMECONTROLLER - keyboard FUNCTION - STARTED')
  res.render('keyboard')
}

function chaptOne (req, res) {
  console.log('HOMECONTROLLER - chaptOne FUNCTION - STARTED')
  res.render('chapt/one')
}

function chaptTwo (req, res) {
  console.log('HOMECONTROLLER - chaptTwo FUNCTION - STARTED')
  res.render('chapt/two')
}

function chaptThree (req, res) {
  console.log('HOMECONTROLLER - chaptThree FUNCTION - STARTED')
  res.render('chapt/three')
}

module.exports = {
  intro,
  contents,
  keyboard,
  chaptOne,
  chaptTwo,
  chaptThree
}
