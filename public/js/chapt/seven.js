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

  speak(chaptSeven.one)

  // e.which for spacebar, v, c, x, z
  var chaptSevenSequence = [32, 86, 67, 88, 90]

  var checkIndex = 0

  $(document).keydown(function (e) {
    e.preventDefault()

    if (e.which === 38 || e.which === 39 || e.which === 27) {
      if (responsiveVoice.isPlaying()) {
        responsiveVoice.cancel()
      }

      var nextChapt = '.chaptEightLink'
      afterAction(e, nextChapt)
    } else {
      if (!disabled) {
        if (responsiveVoice.isPlaying()) {
          responsiveVoice.cancel()
        }
        if (e.which !== chaptSevenSequence[checkIndex]) {
          switch (checkIndex) {
            case 0:
              speak(chaptSevenMistakes.notSpaceBar)
              break
            case 1:
              if (e.which === 67) {
                speak(chaptSevenMistakes.cForV)
              } else {
                speak(chaptSevenMistakes.notV)
              }
              break
            case 2:
              if (e.which === 88) {
                speak(chaptSevenMistakes.xForC)
              } else {
                speak(chaptSevenMistakes.notC)
              }
              break
            case 3:
              if (e.which === 90) {
                speak(chaptSevenMistakes.zForX)
              } else {
                speak(chaptSevenMistakes.notX)
              }
              break
            case 4:
              if (e.which === 16) {
                speak(chaptSevenMistakes.shiftForZ)
              } else {
                speak(chaptSevenMistakes.notZ)
              }
              break
            default:
              speak(chaptSeven.next)
              break
          }
        } else {
          if (responsiveVoice.isPlaying()) {
            responsiveVoice.cancel()
          }

          switch (checkIndex) {
            case 0:
              speak(chaptSeven.two)
              newLetter.textContent = 'v'
              checkIndex++
              break
            case 1:
              speak(chaptSeven.three)
              newLetter.textContent = 'c'
              checkIndex++
              break
            case 2:
              speak(chaptSeven.four)
              newLetter.textContent = 'x'
              checkIndex++
              break
            case 3:
              speak(chaptSeven.five)
              newLetter.textContent = 'z'
              checkIndex++
              break
            default:
              speak(chaptSeven.next)
              break
          }
        }
      }
    }
  })
})
