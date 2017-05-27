$(document).ready(function() {

  responsiveVoice.cancel()
  clickToPause()
  
  var title = document.querySelector('.title')
  var instructions = document.querySelector('.instructions')
  var newLetter = document.querySelector('.newLetter')
  var letter = document.querySelector('.letter')

  title.textContent = chaptThree.title
  responsiveVoice.speak(title.textContent, "US English Female")

  responsiveVoice.speak(chaptThree.one, "US English Female")

  $(document).keydown(function(e) {
    responsiveVoice.cancel()
    console.log(e.which)

    // keyCode ==> f
    if (e.which === 70) {
      letter.textContent = e.key
      newLetter.textContent = 'j'
      responsiveVoice.speak(e.key)
      responsiveVoice.speak(chaptThree.two, "US English Female")
    }
    // keyCode ==> j
    if (e.which === 74) {
      letter.textContent = e.key
      newLetter.textContent = "k"
      responsiveVoice.speak(e.key)
      responsiveVoice.speak(chaptThree.three, "US English Female")
    }

    // keyCode ==> d
    else if (e.which === 68) {
      letter.textContent = e.key
      newLetter.textContent = "l"
      responsiveVoice.speak(e.which)
      responsiveVoice.speak(chaptThree.three, "US English Female")
    }

    // keyCode ==> k
    else if (e.which === 75) {
      letter.textContent = e.key
      newLetter.textContent = ";"
      responsiveVoice.speak(e.which)
      responsiveVoice.speak(chaptThree.four, "US English Female")
    }

    // keyCode ==> ;
    else if (e.which == 186) {
      letter.textContent = e.key
      newLetter.textContent = ";"
      responsiveVoice.speak(chaptThree.five, "US English Female")
    }
    // keyCode ==> spacebar
    else if (e.which === 32) {

      responsiveVoice.speak(chaptThree.six, "US English Female")
    }
    // keyCode ==> right arrow
    else if (e.which === 39) {
      url = $('.chaptThreeLink').attr('href')
      window.location.href = "http://localhost:8000" + url
    }

    // keyCode ==> shift key
    else if (e.which === 16) {
      url = $('.contentsPage').attr('href')
      window.location.href = "http://localhost:8000" + url

    }
  })

  var click = 1

  $(window).on('click', function() {
    if (click == 1) {
      responsiveVoice.pause()
    }
    else if (click == 2) {
      responsiveVoice.resume()
      click = 0
    }
    click ++
  })

})
