$(document).ready(function() {

  responsiveVoice.cancel()
  clickToPause()

  var title = document.querySelector('.title')
  var instructions = document.querySelector('.instructions')
  var newLetter = document.querySelector('.newLetter')
  var letter = document.querySelector('.letter')

  title.textContent = chaptTwo.title
  responsiveVoice.speak(title.textContent, "US English Female")

  newLetter.textContent = "j"

  responsiveVoice.speak(chaptTwo.one, "US English Female")

  // e.which for j, k, l, ;, spacebar
  var chaptTwoSequence = [74, 75, 76, 186, 32]

  var checkIndex = 0

  $(document).keydown(function(e) {

    if (e.which === 39 || e.which === 16 || e.which === 91 || e.which === 93) {
      responsiveVoice.cancel()

      var nextChapt = '.chaptThreeLink'
      afterAction(e, nextChapt)
    }
    else {
      if (e.which !== chaptTwoSequence[checkIndex]) {
        responsiveVoice.cancel()
        switch (checkIndex) {
          case 0:
            if (e.which === 70) {
              responsiveVoice.speak(chaptTwoMistakes.f, "US English Female")
            }
            else {
              responsiveVoice.speak(chaptTwoMistakes.notJ, "US English Female")
            }
            break
          case 1:
            responsiveVoice.speak(chaptTwoMistakes.notK, "US English Female")
            break
          case 2:
            responsiveVoice.speak(chaptTwoMistakes.notL, "US English Female")
            break
          case 3:
            responsiveVoice.speak(chaptTwoMistakes.notSemiColon, "US English Female")
            break
          case 4:
            responsiveVoice.speak(chaptTwoMistakes.notSpaceBar, "US English Female")
            break
          default:
            responsiveVoice.speak(chaptTwo.next, "US English Female")
            break
        }
      }
      else {
        switch (checkIndex) {
          case 0:
            responsiveVoice.speak(chaptTwo.two, "US English Female")
            newLetter.textContent = 'k'
            checkIndex ++
            break
          case 1:
            responsiveVoice.speak(chaptTwo.three, "US English Female")
            newLetter.textContent = 'l'
            checkIndex ++
            break
          case 2:
            responsiveVoice.speak(chaptTwo.four, "US English Female")
            newLetter.textContent = ';'
            checkIndex ++
            break
          case 3:
            responsiveVoice.speak(chaptTwo.five, "US English Female")
            newLetter.textContent = 'space bar'
            checkIndex ++
            break
          case 4:
            responsiveVoice.speak(chaptTwo.six, "US English Female")
            responsiveVoice.speak(chaptTwo.next, "US English Female")
            checkIndex ++
          default:
            console.log("default")
            break
          }
        }
      }
  })
})
