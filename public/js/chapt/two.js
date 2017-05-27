
$(document).ready(function() {

  responsiveVoice.cancel()
  clickToPause()

  var title = document.querySelector('.title')
  var instructions = document.querySelector('.instructions')
  var newLetter = document.querySelector('.newLetter')
  var letter = document.querySelector('.letter')

  title.textContent = chaptTwo.title
  responsiveVoice.speak(title.textContent, "US English Female")

  newLetter.textContent = "j"

  responsiveVoice.speak(chaptTwo.one, "US English Female")

  $(document).keydown(function(e) {
    responsiveVoice.cancel()
    console.log(e.which)
    // keyCode ==> f
    if (e.which === 70) {
      responsiveVoice.speak(chaptTwo.f, "US English Female")
    }
    // keyCode ==> j
    if (e.which === 74) {
      letter.textContent = e.key
      newLetter.textContent = "k"
      responsiveVoice.speak(chaptTwo.two, "US English Female")
    }

    // keyCode ==> k
    else if (e.which === 75) {
      letter.textContent = e.key
      newLetter.textContent = "l"
      responsiveVoice.speak(chaptTwo.three, "US English Female")
    }

    // keyCode ==> l
    else if (e.which === 76) {
      letter.textContent = e.key
      newLetter.textContent = ";"
      responsiveVoice.speak(chaptTwo.four, "US English Female")
    }

    // keyCode ==> ;
    else if (e.which == 186) {
      letter.textContent = e.key
      newLetter.textContent = ";"
      responsiveVoice.speak(chaptTwo.five, "US English Female")
    }
    // keyCode ==> spacebar
    else if (e.which === 32) {

      responsiveVoice.speak(chaptTwo.six + chaptTwo.seven, "US English Female")
    }
    // keyCode ==> right arrow
    else if (e.which === 39) {
      url = $('.chaptThreeLink').attr('href')
      nextUrl(url)
    }

    // keyCode ==> shift key
    else if (e.which === 16) {
      url = $('.contentsPage').attr('href')
      nextUrl(url)

    }
  })

})
