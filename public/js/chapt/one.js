$(document).ready(function () {

  if (responsiveVoice.isPlaying()) {
    responsiveVoice.cancel()
  }

  clickToPause()

  var disabled = false

  function speak (msg) {
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

  newLetter.textContent = 'f'

  // speak(chaptOne.title)
  speak(chaptOne.one)

  // e.which for f, d, s, a, spacebar
  var chaptOneSequence = [70, 68, 83, 65, 32]

  var checkIndex = 0

  $(document).keydown(function (e) {

    e.preventDefault()

    if (e.which === 39 || e.which === 16 || e.which === 91 || e.which === 93) {
      responsiveVoice.cancel()

      var nextChapt = '.chaptTwoLink'
      afterAction(e, nextChapt)
      
    } else {
      if (!disabled) {
        if (e.which !== chaptOneSequence[checkIndex]) {
          responsiveVoice.cancel()
          switch (checkIndex) {
            case 0:
              if (e.which === 74) {
                speak(chaptOneMistakes.j)
              } else {
                speak(chaptOneMistakes.notF)
              }
              break

            case 1:
              speak(chaptOneMistakes.notD)
              break

            case 2:
              speak(chaptOneMistakes.notS)
              break

            case 3:
              speak(chaptOneMistakes.notA)
              break

            case 4:
              speak(chaptOneMistakes.notSpaceBar)
              break

            default:
              speak(chaptOne.next)
              break
          }
        } else {
          switch (checkIndex) {
            case 0:
              speak(chaptOne.two)
              newLetter.textContent = 'd'
              checkIndex++
              break

            case 1:
              speak(chaptOne.three)
              newLetter.textContent = 's'
              checkIndex++
              break

            case 2:
              speak(chaptOne.four)
              newLetter.textContent = 'a'
              checkIndex++
              break

            case 3:
              speak(chaptOne.five)
              newLetter.textContent = 'space bar'
              checkIndex++
              break

            case 4:
              speak(chaptOne.six)
              speak(chaptOne.next)
              checkIndex++
              break

            default:
              speak(chaptOne.next)
              break
          }
        }
      }
    }
  })
})
