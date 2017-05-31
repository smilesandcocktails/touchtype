$(document).ready(function() {
  responsiveVoice.cancel()
  clickToPause()

  var disabled = false

    function speak(msg) {
      responsiveVoice.speak(msg, 'US English Female', { onstart: function () {
        disabled = true
      }, onend: function () {
        disabled = false
      }
      })
    }

  var instructions = document.querySelector('.instructions')
  var newLetter = document.querySelector('.newLetter')
  var letter = document.querySelector('.letter')

  newLetter.textContent = "q"


  speak(chaptFour.one)

  // e.which for spacebar, q, w, e, r, t, y
  var chaptFourSequence = [32, 81, 87, 69, 82, 84, 89]

  var checkIndex = 0

  $(document).keydown(function(e) {

    e.preventDefault()

    if (e.which === 39 || e.which === 16 || e.which === 91 || e.which === 93) {
      responsiveVoice.cancel()

      var nextChapt = '.chaptFiveLink'
      afterAction(e, nextChapt)
    }
    else {
      if (!disabled) {
      if (e.which !== chaptFourSequence[checkIndex]) {
        responsiveVoice.cancel()
        switch (checkIndex) {
          case 0:
              speak(chaptFourMistakes.notSpaceBar)
            break
          case 1:
            if (e.which === 9) {
              speak(chaptFourMistakes.tab)
            }
            else if(e.which === 65) {
              speak(chaptFourMistakes.a)
            }
            else if (e.which === 20) {
              speak(chaptFourMistakes.capslock)
            }
            else if (e.which === 87) {
              speak(chaptFourMistakes.w)
            } else {
              speak(chaptFourMistakes.notQ)
            }
            break
          case 2:
            if(e.which === 81) {
              speak(chaptFourMistakes.q)
            }
            else if(e.which === 69) {
              speak(chaptFourMistakes.e)
            }
            else {
              speak(chaptFourMistakes.notW,"US English Female")
            }
            break
          case 3:
            if (e.which === 87) {
              speak(chaptFourMistakes.wForE)
            }
            else if(e.which === 82) {
              speak(chaptFourMistakes.r)
            }
            else {
              speak(chaptFourMistakes.notE)
            }
            break
          case 4:
            if (e.which === 69) {
              speak(chaptFourMistakes.eForR)
            }
            else if(e.which === 84) {
              speak(chaptFourMistakes.t)
            }
            else {
              speak(chaptFourMistakes.notR)
            }
            break
          case 5:
            if (e.which === 82) {
              speak(chaptFourMistakes.rForT)
            }
            else if(e.which === 71) {
              speak(chaptFourMistakes.g)
            }
            else {
              speak(chaptFourMistakes.notT)
            }
            break
          case 6:
            if (e.which === 85) {
              speak(chaptFourMistakes.u)
            }
            else if(e.which === 72) {
              speak(chaptFourMistakes.h)
            }
            else if(e.which === 84) {
              speak(chaptFourMistakes.tForY)
            }
            else {
              speak(chaptFourMistakes.notY)
            }
            break
          default:
            speak(chaptFour.next)
            break
        }
      }
      else {
        switch (checkIndex) {
          case 0:
            speak(chaptFour.two)
            newLetter.textContent = "q"
            checkIndex ++
            break
          case 1:
            speak(chaptFour.three)
            newLetter.textContent = "w"
            checkIndex ++
            break
          case 2:
            speak(chaptFour.four)
            newLetter.textContent = "e"
            checkIndex ++
            break
          case 3:
            speak(chaptFour.five)
            newLetter.textContent = "r"
            checkIndex ++
            break
          case 4:
            speak(chaptFour.six)
            newLetter.textContent = "t"
            checkIndex ++
            break
          case 5:
            speak(chaptFour.seven)
            newLetter.textContent = "y"
            checkIndex ++
            break
          case 6:
            speak(chaptFour.eight)
            speak(chaptFour.next)
            newLetter.textContent = "y"
            checkIndex ++
            break
          default:
            speak(chaptFour.next)
            break
         }
        }
      }
    }
  })
})
