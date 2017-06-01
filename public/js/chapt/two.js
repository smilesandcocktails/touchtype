$(document).ready(function () {
  if (responsiveVoice.isPlaying()) {
    responsiveVoice.cancel()
  }

  clickToPause()

  var disabled = false
  var instructions = document.querySelector('.instructions')
  var newLetter = document.querySelector('.newLetter')
  var letter = document.querySelector('.letter')
  var iconDiv = document.querySelector('.icon')

  function speak (msg) {
    responsiveVoice.speak(msg, 'US English Female', { onstart: function () {
      showIcon(iconDiv)
      disabled = true
    }, onend: function () {
      hideIcon(iconDiv)
      disabled = false
    }
    })
  }

  newLetter.textContent = 'j'

  // speak(chaptTwo.title)
  speak(chaptTwo.one)

  // e.which for j, k, l, ;, spacebar
  var chaptTwoSequence = [74, 75, 76, 186, 32]

  var checkIndex = 0

  $(document).keydown(function (e) {
    e.preventDefault()

    if (e.which === 38 || e.which === 39 || e.which === 27) {
      if (responsiveVoice.isPlaying()) {
        responsiveVoice.cancel()
      }

      var nextChapt = '.chaptThreeLink'
      afterAction(e, nextChapt)
    } else {
      if (!disabled) {
        if (responsiveVoice.isPlaying()) {
          responsiveVoice.cancel()
        }

        if (e.which !== chaptTwoSequence[checkIndex]) {
          switch (checkIndex) {
            case 0:
              if (e.which === 70) {
                speak(chaptTwoMistakes.f)
              } else {
                speak(chaptTwoMistakes.notJ)
              }
              break
            case 1:
              speak(chaptTwoMistakes.notK)
              break
            case 2:
              speak(chaptTwoMistakes.notL)
              break
            case 3:
              speak(chaptTwoMistakes.notSemiColon)
              break
            case 4:
              speak(chaptTwoMistakes.notSpaceBar)
              break
            default:
              speak(chaptTwo.next)
              break
          }
        } else {
          switch (checkIndex) {
            case 0:
              speak(chaptTwo.two)
              newLetter.textContent = 'k'
              checkIndex++
              break
            case 1:
              speak(chaptTwo.three)
              newLetter.textContent = 'l'
              checkIndex++
              break
            case 2:
              speak(chaptTwo.four)
              newLetter.textContent = ';'
              checkIndex++
              break
            case 3:
              speak(chaptTwo.five)
              newLetter.textContent = 'space bar'
              checkIndex++
              break
            case 4:
              speak(chaptTwo.six)
              speak(chaptTwo.next)
              checkIndex++
            default:
              speak(chaptTwo.next)
              break
          }
        }
      }
    }
  })
})
