$(document).ready(function() {
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

  var instructions = document.querySelector('.instructions')
  var newLetter = document.querySelector('.newLetter')
  var letter = document.querySelector('.letter')

  newLetter.textContent = "u"

  responsiveVoice.speak(chaptSix.one)

  // e.which for f, j, r, u, d, k, e, i, s, l, w, o, a, ;, q, p, spacebar
  var chaptSixSequence = [70, 74, 82, 85, 68, 75, 69, 73, 83, 76, 87, 79, 65, 186, 81, 80, 32]

  var checkIndex = 0

  $(document).keydown(function(e) {

    if (e.which === 39 || e.which === 16 || e.which === 91 || e.which === 93) {
      responsiveVoice.cancel()

      var nextChapt = '.chaptSevenLink'
      afterAction(e, nextChapt)
    }
    else {
      if (!disabled) {
    if (e.which !== chaptSixSequence[checkIndex]) {
      switch (checkIndex) {
        case 0:
          responsiveVoice.speak("", "US English Female")
          break
        case 1:
          responsiveVoice.speak("", "US English Female")
          break
        case 2:
          responsiveVoice.speak("", "US English Female")
          break
        case 3:
          responsiveVoice.speak("", "US English Female")
          break
        case 4:
          responsiveVoice.speak("", "US English Female")
          break
        default:
          responsiveVoice.speak(chaptSix.next, "US English Female")
          break
      }
    }
    else {
      switch (checkIndex) {
        case 0:
          responsiveVoice.speak(chaptSix.two, "US English Female")
          newLetter.textContent = "u"
          checkIndex ++
          break
        case 1:
          responsiveVoice.speak(chaptSix.three, "US English Female")
          newLetter.textContent = "i"
          checkIndex ++
          break
        case 2:
          responsiveVoice.speak(chaptSix.four, "US English Female")
          newLetter.textContent = "o"
          checkIndex ++
          break
        case 3:
          responsiveVoice.speak(chaptSix.five, "US English Female")
          newLetter.textContent = "p"
          checkIndex ++
          break
        case 4:
          responsiveVoice.speak(chaptSix.next, "US English Female")
          newLetter.textContent = "p"
          checkIndex ++
          break
        default:
          console.log("default")
          break

      }
     }
   }
 }
})
})
