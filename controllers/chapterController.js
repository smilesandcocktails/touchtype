function chapterHome (req, res) {
  console.log('CHAPTERCONTROLLER - CHAPTERHOME FUNCTION - STARTED')

  res.render('chapters/chapterHome')
}

function contents (req, res) {
  console.log('CHAPTERCONTROLLER - CONTENTS FUNCTION - STARTED')
  res.render('chapters/contents')
}

function chapterOne (req, res) {
  console.log('CHAPTERCONTROLLER - CHAPTERONE FUNCTION - STARTED')
  res.render('chapters/chapterOne')
}

module.exports = {
  chapterHome,
  contents,
  chapterOne
}
