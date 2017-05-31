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

  speak(chaptSix.one)

  // e.which for f, j, r, u, d, k, e, i, s, l, w, o, a, ;, q, p, spacebar
  var chaptSixSequence = [70, 74, 82, 85, 68, 75, 69, 73, 83, 76, 87, 79, 65, 186, 81, 80, 32]

  var checkIndex = 0

  $(document).keydown(function(e) {

    e.preventDefault()

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
          speak("")
          break
        case 1:
          speak("")
          break
        case 2:
          speak("")
          break
        case 3:
          speak("")
          break
        case 4:
          speak("")
          break
        default:
          speak(chaptSix.next)
          break
      }
    }
    else {
      switch (checkIndex) {
        case 0:
          speak(chaptSix.two)
          newLetter.textContent = "u"
          checkIndex ++
          break
        case 1:
          speak(chaptSix.three)
          newLetter.textContent = "i"
          checkIndex ++
          break
        case 2:
          speak(chaptSix.four)
          newLetter.textContent = "o"
          checkIndex ++
          break
        case 3:
          speak(chaptSix.five)
          newLetter.textContent = "p"
          checkIndex ++
          break
        case 4:
          speak(chaptSix.next)
          newLetter.textContent = "p"
          checkIndex ++
          break
        default:
          speak(chaptSix.next)
          break

      }
     }
   }
 }
})
})
