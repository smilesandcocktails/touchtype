$(document).ready(function() {

  responsiveVoice.cancel()
  clickToPause()

  var title = document.querySelector('.title')
  var instructions = document.querySelector('.instructions')
  var newLetter = document.querySelector('.newLetter')
  var letter = document.querySelector('.letter')

  title.textContent = chaptOne.title
  responsiveVoice.speak(title.textContent, "US English Female")

  newLetter.textContent = "f"

  responsiveVoice.speak(chaptOne.one, "US English Female")

// e.which for f, d, s, a, spacebar
var chaptOneSequence = [70, 68, 83, 65, 32]

var checkIndex = 0

$(document).keydown(function(e) {

  if (e.which === 39 || e.which === 16 || e.which === 91 || e.which === 93) {
    responsiveVoice.cancel()

    var nextChapt = '.chaptTwoLink'
    afterAction(e, nextChapt)
  }
  else {
    if (e.which !== chaptOneSequence[checkIndex]) {
      responsiveVoice.cancel()
      switch (checkIndex) {
        case 0:
          if (e.which === 74) {
            responsiveVoice.speak(chaptOneMistakes.j, "US English Female")
          }
          else {
            responsiveVoice.speak(chaptOneMistakes.notF, "US English Female")
          }
          break

        case 1:
          responsiveVoice.speak(chaptOneMistakes.notD, "US English Female")
          break

        case 2:
          responsiveVoice.speak(chaptOneMistakes.notS, "US English Female")
          break

        case 3:
          responsiveVoice.speak(chaptOneMistakes.notA, "US English Female")
          break

        case 4:
          responsiveVoice.speak(chaptOneMistakes.notSpaceBar, "US English Female")
          break

        default:
          responsiveVoice.speak(chaptOne.next, "US English Female")
          break
      }
    }
    else {
      switch (checkIndex) {
        case 0:
          responsiveVoice.speak(chaptOne.two, "US English Female")
          newLetter.textContent = 'd'
          checkIndex ++
          break

        case 1:
          responsiveVoice.speak(chaptOne.three, "US English Female")
          newLetter.textContent = 's'
          checkIndex ++
          break

        case 2:
          responsiveVoice.speak(chaptOne.four, "US English Female")
          newLetter.textContent = 'a'
          checkIndex ++
          break

        case 3:
          responsiveVoice.speak(chaptOne.five, "US English Female")
          newLetter.textContent = 'space bar'
          checkIndex ++
          break

        case 4:
          responsiveVoice.speak(chaptOne.six, "US English Female")
          responsiveVoice.speak(chaptOne.next, "US English Female")
          checkIndex ++
          break

        default:
          responsiveVoice.speak(chaptOne.next, "US English Female")
          break

        }
      }
    }
  })
})
