function home (req, res) {
  console.log('HOMECONTROLLER - HOME FUNCTION - STARTED')
  res.render('homepage')
}

function goTochapterOne (req, res) {
  console.log('HOMECONTROLLER - GOTOCHAPTERONE FUNCTION - STARTED')
  res.redirect('/chapter')
}

module.exports = {
  home,
  goTochapterOne,
}
