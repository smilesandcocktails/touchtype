$(document).ready(function() {

  if (responsiveVoice.isPlaying()) {
    responsiveVoice.cancel()
  }

  clickToPause()

  var disabled = false
  var instructions = document.querySelector('.instructions')
  var newLetter = document.querySelector('.newLetter')
  var letter = document.querySelector('.letter')
  var iconDiv = document.querySelector('.icon')

  function speak(msg) {
    responsiveVoice.speak(msg, 'US English Female', { onstart: function () {
      showIcon(iconDiv)
      disabled = true
    }, onend: function () {
      hideIcon(iconDiv)
      disabled = false
    }
    })
  }


  newLetter.textContent = "f"

  speak(chaptThree.one)

  // e.which for f, j, d, k, s, l, a, ;, g, h, spacebar, g, h
  var chaptThreeSequence = [70, 74, 68, 75, 83, 76, 65, 186, 32, 71, 72]

  var checkIndex = 0

  $(document).keydown(function(e) {

    e.preventDefault()

    if (responsiveVoice.isPlaying()) {
      responsiveVoice.cancel()
    }

    if (e.which === 38 || e.which === 39 || e.which === 27) {

      var nextChapt = '.chaptFourLink'
      afterAction(e, nextChapt)
    }
    else {

    if (!disabled) {

      if (e.which !== chaptThreeSequence[checkIndex]) {

        switch (checkIndex) {
          case 0:
            if (e.which === 74) {
              speak(chaptThreeMistakes.j)
            }
            else {
              speak(chaptThreeMistakes.notF)
            }
            break
          case 1:
            if (e.which === 70) {
              speak(chaptThreeMistakes.f)
            }
            else {
              speak(chaptThreeMistakes.notJ)
            }
            break
          case 2:
            speak(chaptThreeMistakes.notD)
            break
          case 3:
            speak(chaptThreeMistakes.notK)
            break
          case 4:
            speak(chaptThreeMistakes.notS)
            break
          case 5:
            speak(chaptThreeMistakes.notL)
            break
          case 6:
            speak(chaptThreeMistakes.notA)
            break
          case 7:
            speak(chaptThreeMistakes.notSemiColon)
            break
          case 8:
            speak(chaptThreeMistakes.notSpaceBar)
            break
          case 9:
            speak(chaptThreeMistakes.notG)
            break
          case 10:
            speak(chaptThreeMistakes.notH)
            break
          default:
            speak(chaptThree.next)
            break
        }
      }
      else {
        switch (checkIndex) {
          case 0:
            speak(chaptThree.two)
            newLetter.textContent = "j"
            checkIndex ++
            break
          case 1:
            speak(chaptThree.three)
            newLetter.textContent = "d"
            checkIndex ++
            break
          case 2:
            speak(chaptThree.four)
            newLetter.textContent = "k"
            checkIndex ++
            break
          case 3:
            speak(chaptThree.five)
            newLetter.textContent = "s"
            checkIndex ++
            break
          case 4:
            speak(chaptThree.six)
            newLetter.textContent = "l"
            checkIndex ++
            break
          case 5:
            speak(chaptThree.seven)
            newLetter.textContent = "a"
            checkIndex ++
            break
          case 6:
            speak(chaptThree.eight)
            newLetter.textContent = ";"
            checkIndex ++
            break
          case 7:
            speak(chaptThree.nine)
            newLetter.textContent = "space bar"
            checkIndex ++
            break
          case 8:
            speak(chaptThree.ten)
            newLetter.textContent = "g"
            checkIndex ++
            break
          case 9:
            speak(chaptThree.eleven)
            newLetter.textContent = "h"
            checkIndex ++
            break
          case 10:
            speak(chaptThree.twelve)
            speak(chaptThree.next)
            newLetter.textContent = "h"
            checkIndex ++
            break
          default:
            speak(chaptThree.next)
            break
          }
        }
      }
    }
  })
})
