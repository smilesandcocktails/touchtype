function intro(req, res) {
  console.log('HOMECONTROLLER - HOME FUNCTION - STARTED')
  res.render('intro')
}

function chapterHome (req, res) {
  console.log('HOMECONTROLLER - GOTOCHAPTERONE FUNCTION - STARTED')
  res.redirect('/chapter')
}

module.exports = {
  intro,
  chapterHome,
}
