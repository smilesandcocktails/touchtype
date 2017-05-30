$(document).ready(function() {

  responsiveVoice.cancel()
  clickToPause()

  var title = document.querySelector('.title')
  var instructions = document.querySelector('.instructions')
  var newLetter = document.querySelector('.newLetter')
  var letter = document.querySelector('.letter')

  title.textContent = chaptFour.title
  responsiveVoice.speak(title.textContent, "US English Female")

  newLetter.textContent = "q"

  responsiveVoice.speak(chaptFour.one, "US English Female")

  // e.which for spacebar, q, w, e, r, t, y
  var chaptFourSequence = [32, 81, 87, 69, 82, 84, 89]

  var checkIndex = 0

  $(document).keydown(function(e) {

    if (e.which === 39 || e.which === 16 || e.which === 91 || e.which === 93) {
      responsiveVoice.cancel()

      var nextChapt = '.chaptFiveLink'
      afterAction(e, nextChapt)
    }
    else {
      if (e.which !== chaptFourSequence[checkIndex]) {
        responsiveVoice.cancel()
        switch (checkIndex) {
          case 0:
              responsiveVoice.speak(chaptFourMistakes.notSpaceBar, "US English Female")
            break
          case 1:
            if (e.which === 9) {
              responsiveVoice.speak(chaptFourMistakes.tab, "US English Female")
            }
            else if(e.which === 65) {
              responsiveVoice.speak(chaptFourMistakes.a, "US English Female")
            }
            else if (e.which === 20) {
              responsiveVoice.speak(chaptFourMistakes.capslock, "US English Female")
            }
            else if (e.which === 87) {
              responsiveVoice.speak(chaptFourMistakes.w, "US English Female")
            } else {
              responsiveVoice.speak(chaptFourMistakes.notQ, "US English Female")
            }
            break
          case 2:
            if(e.which === 81) {
              responsiveVoice.speak(chaptFourMistakes.q, "US English Female")
            }
            else if(e.which === 69) {
              responsiveVoice.speak(chaptFourMistakes.e, "US English Female")
            }
            else {
              responsiveVoice.speak(chaptFourMistakes.notW,"US English Female")
            }
            break
          case 3:
            if (e.which === 87) {
              responsiveVoice.speak(chaptFourMistakes.wForE, "US English Female")
            }
            else if(e.which === 82) {
              responsiveVoice.speak(chaptFourMistakes.r, "US English Female")
            }
            else {
              responsiveVoice.speak(chaptFourMistakes.notE, "US English Female")
            }
            break
          case 4:
            if (e.which === 69) {
              responsiveVoice.speak(chaptFourMistakes.eForR, "US English Female")
            }
            else if(e.which === 84) {
              responsiveVoice.speak(chaptFourMistakes.t, "US English Female")
            }
            else {
              responsiveVoice.speak(chaptFourMistakes.notR, "US English Female")
            }
            break
          case 5:
            if (e.which === 82) {
              responsiveVoice.speak(chaptFourMistakes.rForT, "US English Female")
            }
            else if(e.which === 71) {
              responsiveVoice.speak(chaptFourMistakes.g, "US English Female")
            }
            else {
              responsiveVoice.speak(chaptFourMistakes.notT, "US English Female")
            }
            break
          case 6:
            if (e.which === 85) {
              responsiveVoice.speak(chaptFourMistakes.u, "US English Female")
            }
            else if(e.which === 72) {
              responsiveVoice.speak(chaptFourMistakes.h, "US English Female")
            }
            else if(e.which === 84) {
              responsiveVoice.speak(chaptFourMistakes.tForY, "US English Female")
            }
            else {
              responsiveVoice.speak(chaptFourMistakes.notY, "US English Female")
            }
            break
          default:
            responsiveVoice.speak(chaptFour.next, "US English Female")
            break
        }
      }
      else {
        switch (checkIndex) {
          case 0:
            responsiveVoice.speak(chaptFour.two, "US English Female")
            newLetter.textContent = "q"
            checkIndex ++
            break
          case 1:
            responsiveVoice.speak(chaptFour.three, "US English Female")
            newLetter.textContent = "w"
            checkIndex ++
            break
          case 2:
            responsiveVoice.speak(chaptFour.four, "US English Female")
            newLetter.textContent = "e"
            checkIndex ++
            break
          case 3:
            responsiveVoice.speak(chaptFour.five, "US English Female")
            newLetter.textContent = "r"
            checkIndex ++
            break
          case 4:
            responsiveVoice.speak(chaptFour.six, "US English Female")
            newLetter.textContent = "t"
            checkIndex ++
            break
          case 5:
            responsiveVoice.speak(chaptFour.seven, "US English Female")
            newLetter.textContent = "y"
            checkIndex ++
            break
          case 6:
            responsiveVoice.speak(chaptFour.eight, "US English Female")
            responsiveVoice.speak(chaptFour.next, "US English Female")
            newLetter.textContent = "y"
            checkIndex ++
            break
          default:
            responsiveVoice.speak(chaptFour.next, "US English Female")
            break
        }
      }
    }
  })
})
