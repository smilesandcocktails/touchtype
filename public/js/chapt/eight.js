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

  newLetter.textContent = 'Spacebar'

  speak(chaptEight.one)

  // e.which for spacebar, n, m, comma, dot, slash, b
  var chaptEightSequence = [32, 78, 77, 188, 190, 191, 66]

  var checkIndex = 0

  $(document).keydown(function (e) {
    e.preventDefault()

    if (e.which === 38 || e.which === 39 || e.which === 27) {
      if (responsiveVoice.isPlaying()) {
        responsiveVoice.cancel()
      }

      var nextChapt = '.chaptNineLink'
      afterAction(e, nextChapt)
    } else {
      if (!disabled) {
        if (e.which !== chaptEightSequence[checkIndex]) {
          switch (checkIndex) {
            case 0:
              speak(chaptEightMistakes.notSpaceBar)
              break
            case 1:
              if (e.which === 77) {
                speak(chaptEightMistakes.mForN)
              } else {
                speak(chaptEightMistakes.notN)
              }
              break
            case 2:
              if (e.which === 78) {
                speak(chaptEightMistakes.nForM)
              } else {
                speak(chaptEightMistakes.notM)
              }
              break
            case 3:
              if (e.which === 77) {
                speak(chaptEightMistakes.mForComma)
              } else {
                speak(chaptEightMistakes.notComma)
              }
              break
            case 4:
              if (e.which === 188) {
                speak(chaptEightMistakes.commaForDot)
              } else {
                speak(chaptEightMistakes.notDot)
              }
              break
            case 5:
              if (e.which === 190) {
                speak(chaptEightMistakes.dotForSlash)
              } else {
                speak(chaptEightMistakes.notSlash)
              }
              break
            case 6:
              if (e.which === 86) {
                speak(chaptEightMistakes.vForB)
              } else if (e.which === 78) {
                speak(chaptEightMistakes.nForB)
              } else {
                speak(chaptEightMistakes.notB)
              }
              break
            default:
              speak(chaptEight.next)
              break
          }
        } else {
          if (responsiveVoice.isPlaying()) {
            responsiveVoice.cancel()
          }

          switch (checkIndex) {
            case 0:
              speak(chaptEight.two)
              newLetter.textContent = 'n'
              checkIndex++
              break
            case 1:
              speak(chaptEight.three)
              newLetter.textContent = 'm'
              checkIndex++
              break
            case 2:
              speak(chaptEight.four)
              newLetter.textContent = ','
              checkIndex++
              break
            case 3:
              speak(chaptEight.five)
              newLetter.textContent = '.'
              checkIndex++
              break
            case 4:
              speak(chaptEight.six)
              newLetter.textContent = '/'
              checkIndex++
              break
            case 5:
              speak(chaptEight.seven)
              newLetter.textContent = 'b'
              checkIndex++
              break
            case 6:
              speak(chaptEight.eight)
              speak(chaptEight.next)
              newLetter.textContent = 'b'
              checkIndex++
              break
            default:
              speak(chaptEight.next)
              break
          }
        }
      }
    }
  })
})
