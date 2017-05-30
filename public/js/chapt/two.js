$(document).ready(function () {
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

  var title = document.querySelector('.title')
  var instructions = document.querySelector('.instructions')
  var newLetter = document.querySelector('.newLetter')
  var letter = document.querySelector('.letter')

  newLetter.textContent = 'j'

  title.textContent = chaptTwo.title

  // speak(chaptTwo.title)
  speak(chaptTwo.one)


  // e.which for j, k, l, ;, spacebar
  var chaptTwoSequence = [74, 75, 76, 186, 32]

  var checkIndex = 0

  $(document).keydown(function (e) {
    if (e.which === 39 || e.which === 16 || e.which === 91 || e.which === 93) {
      responsiveVoice.cancel()

      var nextChapt = '.chaptThreeLink'
      afterAction(e, nextChapt)
    } else {

      if (!disabled) {
        
        if (e.which !== chaptTwoSequence[checkIndex]) {
          responsiveVoice.cancel()
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
