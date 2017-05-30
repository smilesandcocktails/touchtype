$(document).ready(function() {

  responsiveVoice.cancel()
  clickToPause()

  var title = document.querySelector('.title')
  var instructions = document.querySelector('.instructions')
  var newLetter = document.querySelector('.newLetter')
  var letter = document.querySelector('.letter')

  title.textContent = chaptFive.title
  responsiveVoice.speak(title.textContent, "US English Female")

  newLetter.textContent = "u"

  responsiveVoice.speak(chaptFive.one, "US English Female")

  // e.which for spacebar, u, i, o, p
  var chaptFiveSequence = [32, 85, 73, 79, 80]

  var checkIndex = 0

  $(document).keydown(function(e) {
    if (e.which === 39 || e.which === 16 || e.which === 91 || e.which === 93) {
      responsiveVoice.cancel()

      var nextChapt = '.chaptSixLink'
      afterAction(e, nextChapt)
    }
    else {
      if (e.which !== chaptFiveSequence[checkIndex]) {
        responsiveVoice.cancel()
        switch (checkIndex) {
          case 0:
              responsiveVoice.speak(chaptFiveMistakes.notSpaceBar, "US English Female")
            break
          case 1:
            if (e.which === 89) {
              responsiveVoice.speak(chaptFiveMistakes.y, "US English Female")
            }
            else if(e.which === 73) {
              responsiveVoice.speak(chaptFiveMistakes.i, "US English Female")
            }
            else if (e.which === 72) {
              responsiveVoice.speak(chaptFiveMistakes.h, "US English Female")
            } else {
              responsiveVoice.speak(chaptFiveMistakes.notU, "US English Female")
            }
            break
          case 2:
            if(e.which === 85) {
              responsiveVoice.speak(chaptFiveMistakes.u, "US English Female")
            }
            else if(e.which === 75) {
              responsiveVoice.speak(chaptFiveMistakes.k, "US English Female")
            }
            else if(e.which === 79) {
              responsiveVoice.speak(chaptFiveMistakes.o, "US English Female")
            }
            else {
              responsiveVoice.speak(chaptFiveMistakes.notI,"US English Female")
            }
            break
          case 3:
            if (e.which === 76) {
              responsiveVoice.speak(chaptFiveMistakes.l, "US English Female")
            }
            else if(e.which === 73) {
              responsiveVoice.speak(chaptFiveMistakes.iForO, "US English Female")
            }
            else if(e.which === 80) {
              responsiveVoice.speak(chaptFiveMistakes.p, "US English Female")
            }
            else {
              responsiveVoice.speak(chaptFiveMistakes.notO, "US English Female")
            }
            break
          case 4:
            if (e.which === 186) {
              responsiveVoice.speak(chaptFiveMistakes.semicolon, "US English Female")
            }
            else if(e.which === 222) {
              responsiveVoice.speak(chaptFiveMistakes.quote, "US English Female")
            }
            else if(e.which === 219) {
              responsiveVoice.speak(chaptFiveMistakes.squareBracket, "US English Female")
            }
            else {
              responsiveVoice.speak(chaptFiveMistakes.notP, "US English Female")
            }
            break
          default:
            responsiveVoice.speak(chaptFive.next, "US English Female")
            break
        }
      }
      else {
        switch (checkIndex) {
          case 0:
            responsiveVoice.speak(chaptFive.two, "US English Female")
            newLetter.textContent = "u"
            checkIndex ++
            break
          case 1:
            responsiveVoice.speak(chaptFive.three, "US English Female")
            newLetter.textContent = "i"
            checkIndex ++
            break
          case 2:
            responsiveVoice.speak(chaptFive.four, "US English Female")
            newLetter.textContent = "o"
            checkIndex ++
            break
          case 3:
            responsiveVoice.speak(chaptFive.five, "US English Female")
            newLetter.textContent = "p"
            checkIndex ++
            break
          case 4:
            responsiveVoice.speak(chaptFive.next, "US English Female")
            newLetter.textContent = "p"
            checkIndex ++
            break
          default:
            responsiveVoice.speak(chaptFive.next, "US English Female")
            break
        }
      }
    }
  })
})
