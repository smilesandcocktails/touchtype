
function contents (req, res) {
  console.log('CHAPTERCONTROLLER - CONTENTS FUNCTION - STARTED')
  res.render('chapters/contents')
}

function chapterOne (req, res) {
  console.log('CHAPTERCONTROLLER - CHAPTERONE FUNCTION - STARTED')
  res.render('chapters/chapterOne')
}

function chapterTwo (req, res) {
  console.log('CHAPTERCONTROLLER - CHAPTERTWO FUNCTION - STARTED')
  res.render('chapters/chapterTwo')
}

function chapterThree (req, res) {
  console.log('CHAPTERCONTROLLER - CHAPTERTHREE FUNCTION - STARTED')
  res.render('chapters/chapterThree')
}

function chapterFour (req, res) {
  console.log('CHAPTERCONTROLLER - CHAPTERFOUR FUNCTION - STARTED')
  res.render('chapters/chapterFour')
}

function chapterFive (req, res) {
  console.log('CHAPTERCONTROLLER - CHAPTERFIVE FUNCTION - STARTED')
  res.render('chapters/chapterFive')
}



module.exports = {
  contents,
  chapterOne,
  chapterTwo,
  chapterThree,
  chapterFour,
  chapterFive
}
