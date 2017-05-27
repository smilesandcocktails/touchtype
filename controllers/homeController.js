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

function chaptFour (req, res) {
  console.log('HOMECONTROLLER - chaptFour FUNCTION - STARTED')
  res.render('chapt/four')
}

function chaptFive (req, res) {
  console.log('HOMECONTROLLER - chaptFive FUNCTION - STARTED')
  res.render('chapt/five')
}

function chaptSix (req, res) {
  console.log('HOMECONTROLLER - chaptSix FUNCTION - STARTED')
  res.render('chapt/six')
}

function chaptSeven (req, res) {
  console.log('HOMECONTROLLER - chaptSeven FUNCTION - STARTED')
  res.render('chapt/seven')
}

function chaptEight (req, res) {
  console.log('HOMECONTROLLER - chaptEight FUNCTION - STARTED')
  res.render('chapt/eight')
}

function chaptNine (req, res) {
  console.log('HOMECONTROLLER - chaptNine FUNCTION - STARTED')
  res.render('chapt/nine')
}

function chaptTen (req, res) {
  console.log('HOMECONTROLLER - chaptTen FUNCTION - STARTED')
  res.render('chapt/ten')
}

module.exports = {
  intro,
  contents,
  keyboard,
  chaptOne,
  chaptTwo,
  chaptThree,
  chaptFour,
  chaptFive,
  chaptSix,
  chaptSeven,
  chaptEight,
  chaptNine,
  chaptTen
}
