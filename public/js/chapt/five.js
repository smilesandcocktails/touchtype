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

  newLetter.textContent = 'u'

  speak(chaptFive.one)

  // e.which for spacebar, u, i, o, p
  var chaptFiveSequence = [32, 85, 73, 79, 80]

  var checkIndex = 0

  $(document).keydown(function (e) {
    e.preventDefault()

    if (e.which === 38 || e.which === 39 || e.which === 27) {
      if (responsiveVoice.isPlaying()) {
        responsiveVoice.cancel()
      }

      var nextChapt = '.chaptSixLink'
      afterAction(e, nextChapt)
    } else {
      if (!disabled) {
        if (responsiveVoice.isPlaying()) {
          responsiveVoice.cancel()
        }
        if (e.which !== chaptFiveSequence[checkIndex]) {
          switch (checkIndex) {
            case 0:
              speak(chaptFiveMistakes.notSpaceBar)
              break
            case 1:
              if (e.which === 89) {
                speak(chaptFiveMistakes.y)
              } else if (e.which === 73) {
                speak(chaptFiveMistakes.i)
              } else if (e.which === 72) {
                speak(chaptFiveMistakes.h)
              } else {
                speak(chaptFiveMistakes.notU)
              }
              break
            case 2:
              if (e.which === 85) {
                speak(chaptFiveMistakes.u)
              } else if (e.which === 75) {
                speak(chaptFiveMistakes.k)
              } else if (e.which === 79) {
                speak(chaptFiveMistakes.o)
              } else {
                speak(chaptFiveMistakes.notI)
              }
              break
            case 3:
              if (e.which === 76) {
                speak(chaptFiveMistakes.l)
              } else if (e.which === 73) {
                speak(chaptFiveMistakes.iForO)
              } else if (e.which === 80) {
                speak(chaptFiveMistakes.p)
              } else {
                speak(chaptFiveMistakes.notO)
              }
              break
            case 4:
              if (e.which === 186) {
                speak(chaptFiveMistakes.semicolon)
              } else if (e.which === 222) {
                speak(chaptFiveMistakes.quote)
              } else if (e.which === 219) {
                speak(chaptFiveMistakes.squareBracket)
              } else {
                speak(chaptFiveMistakes.notP)
              }
              break
            default:
              speak(chaptFive.next)
              break
          }
        } else {
          switch (checkIndex) {
            case 0:
              speak(chaptFive.two)
              newLetter.textContent = 'u'
              checkIndex++
              break
            case 1:
              speak(chaptFive.three)
              newLetter.textContent = 'i'
              checkIndex++
              break
            case 2:
              speak(chaptFive.four)
              newLetter.textContent = 'o'
              checkIndex++
              break
            case 3:
              speak(chaptFive.five)
              newLetter.textContent = 'p'
              checkIndex++
              break
            case 4:
              speak(chaptFive.six)
              speak(chaptFive.next)
              newLetter.textContent = 'p'
              checkIndex++
              break
            default:
              speak(chaptFive.next)
              break
          }
        }
      }
    }
  })
})
