$(document).ready(function() {

  responsiveVoice.cancel()
  clickToPause()

  var title = document.querySelector('.title')
  var instructions = document.querySelector('.instructions')
  var newLetter = document.querySelector('.newLetter')
  var letter = document.querySelector('.letter')

  title.textContent = chaptSix.title
  responsiveVoice.speak(title.textContent, "US English Female")

  newLetter.textContent = "u"

  responsiveVoice.speak(chaptSix.one, "US English Female")

  // e.which for f, j, r, u, d, k, e, i, s, l, w, o, a, ;, q, p, spacebar
  var chaptSixSequence = [70, 74, 82, 85, 68, 75, 69, 73, 83, 76, 87, 79, 65, 186, 81, 80, 32]

  var checkIndex = 0

  $(document).keydown(function(e) {
    responsiveVoice.cancel()

    if (e.which !== chaptSixSequence[checkIndex]) {
      switch (checkIndex) {
        case 0:
          responsiveVoice.speak("", "US English Female")
          break
        case 1:
          responsiveVoice.speak("", "US English Female")
          break
        case 2:
          responsiveVoice.speak("", "US English Female")
          break
        case 3:
          responsiveVoice.speak("", "US English Female")
          break
        case 4:
          responsiveVoice.speak("", "US English Female")
          break
        default:
          responsiveVoice.speak(chaptSix.next, "US English Female")
          break
      }
    }
    else {
      switch (checkIndex) {
        case 0:
          responsiveVoice.speak(chaptSix.two, "US English Female")
          newLetter.textContent = "u"
          checkIndex ++
          break
        case 1:
          responsiveVoice.speak(chaptSix.three, "US English Female")
          newLetter.textContent = "i"
          checkIndex ++
          break
        case 2:
          responsiveVoice.speak(chaptSix.four, "US English Female")
          newLetter.textContent = "o"
          checkIndex ++
          break
        case 3:
          responsiveVoice.speak(chaptSix.five, "US English Female")
          newLetter.textContent = "p"
          checkIndex ++
          break
        case 4:
          responsiveVoice.speak(chaptSix.next, "US English Female")
          newLetter.textContent = "p"
          checkIndex ++
          break
        default:
          console.log("default")
          break
      }
    }
  })


    $(document).keydown(function(e) {
      responsiveVoice.cancel()

      var nextChapt = '.chaptSevenLink'
      var backToContents = '.contentsPage'

      // keyCode ==> right arrow key
      if (e.which === 39) {
        url = $(nextChapt).attr('href')
        nextUrl(url)
      }

      // keyCode ==> shift key
      else if (e.which === 16) {
        url = $(backToContents).attr('href')
        nextUrl(url)
      }
    })

})
