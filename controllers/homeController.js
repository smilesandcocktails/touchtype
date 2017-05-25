function intro(req, res) {
  console.log('HOMECONTROLLER - HOME FUNCTION - STARTED')
  res.render('intro')
}

function goTochapterOne (req, res) {
  console.log('HOMECONTROLLER - GOTOCHAPTERONE FUNCTION - STARTED')
  res.redirect('/chapter')
}

module.exports = {
  intro,
  goTochapterOne,
}
