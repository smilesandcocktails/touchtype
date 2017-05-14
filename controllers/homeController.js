

function home (req, res) {
  console.log('HOMECONTROLLER - HOME FUNCTION - STARTED');
  res.render('homepage')
}

module.exports = {
  home
}
