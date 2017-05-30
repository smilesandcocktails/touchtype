$(document).ready(function() {

  responsiveVoice.cancel()
  clickToPause()

  var title = document.querySelector('.title')
  var instructions = document.querySelector('.instructions')
  var newLetter = document.querySelector('.newLetter')
  var letter = document.querySelector('.letter')

  title.textContent = chaptThree.title
  responsiveVoice.speak(title.textContent, "US English Female")

  newLetter.textContent = "f"

  responsiveVoice.speak(chaptThree.one, "US English Female")

  // e.which for f, j, d, k, s, l, a, ;, g, h, spacebar, g, h
  var chaptThreeSequence = [70, 74, 68, 75, 83, 76, 65, 186, 32, 71, 72]

  var checkIndex = 0

  $(document).keydown(function(e) {

    if (e.which === 39 || e.which === 16 || e.which === 91 || e.which === 93) {
      responsiveVoice.cancel()

      var nextChapt = '.chaptFourLink'
      afterAction(e, nextChapt)
    }
    else {

      if (e.which !== chaptThreeSequence[checkIndex]) {
        responsiveVoice.cancel()
        switch (checkIndex) {
          case 0:
            if (e.which === 74) {
              responsiveVoice.speak(chaptThreeMistakes.j, "US English Female")
            }
            else {
              responsiveVoice.speak(chaptThreeMistakes.notF, "US English Female")
            }
            break
          case 1:
            if (e.which === 70) {
              responsiveVoice.speak(chaptThreeMistakes.f, "US English Female")
            }
            else {
              responsiveVoice.speak(chaptThreeMistakes.notJ, "US English Female")
            }
            break
          case 2:
            responsiveVoice.speak(chaptThreeMistakes.notD, "US English Female")
            break
          case 3:
            responsiveVoice.speak(chaptThreeMistakes.notK, "US English Female")
            break
          case 4:
            responsiveVoice.speak(chaptThreeMistakes.notS, "US English Female")
            break
          case 5:
            responsiveVoice.speak(chaptThreeMistakes.notL, "US English Female")
            break
          case 6:
            responsiveVoice.speak(chaptThreeMistakes.notA, "US English Female")
            break
          case 7:
            responsiveVoice.speak(chaptThreeMistakes.notSemiColon, "US English Female")
            break
          case 8:
            responsiveVoice.speak(chaptThreeMistakes.notSpaceBar, "US English Female")
            break
          case 9:
            responsiveVoice.speak(chaptThreeMistakes.notG, "US English Female")
            break
          case 10:
            responsiveVoice.speak(chaptThreeMistakes.notH, "US English Female")
            break
          default:
            responsiveVoice.speak(chaptThree.next, "US English Female")
            break
        }
      }
      else {
        switch (checkIndex) {
          case 0:
            responsiveVoice.speak(chaptThree.two, "US English Female")
            newLetter.textContent = "j"
            checkIndex ++
            break
          case 1:
            responsiveVoice.speak(chaptThree.three, "US English Female")
            newLetter.textContent = "d"
            checkIndex ++
            break
          case 2:
            responsiveVoice.speak(chaptThree.four, "US English Female")
            newLetter.textContent = "k"
            checkIndex ++
            break
          case 3:
            responsiveVoice.speak(chaptThree.five, "US English Female")
            newLetter.textContent = "s"
            checkIndex ++
            break
          case 4:
            responsiveVoice.speak(chaptThree.six, "US English Female")
            newLetter.textContent = "l"
            checkIndex ++
            break
          case 5:
            responsiveVoice.speak(chaptThree.seven, "US English Female")
            newLetter.textContent = "a"
            checkIndex ++
            break
          case 6:
            responsiveVoice.speak(chaptThree.eight, "US English Female")
            newLetter.textContent = ";"
            checkIndex ++
            break
          case 7:
            responsiveVoice.speak(chaptThree.nine, "US English Female")
            newLetter.textContent = "space bar"
            checkIndex ++
            break
          case 8:
            responsiveVoice.speak(chaptThree.ten, "US English Female")
            newLetter.textContent = "g"
            checkIndex ++
            break
          case 9:
            responsiveVoice.speak(chaptThree.eleven, "US English Female")
            newLetter.textContent = "h"
            checkIndex ++
            break
          case 10:
            responsiveVoice.speak(chaptThree.next, "US English Female")
            newLetter.textContent = "h"
            checkIndex ++
            break
          default:
            responsiveVoice.speak(chaptThree.next, "US English Female")
            break
        }
      }
    }
  })

})
