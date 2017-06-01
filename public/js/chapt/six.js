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



  newLetter.textContent = "u"

  speak(chaptSix.one)

  // e.which for f, j, r, u, d, k, e, i, s, l, w, o, a, ;, q, p, g, h, t, y, spacebar
  var chaptSixSequence = [70, 74, 82, 85, 68, 75, 69, 73, 83, 76, 87, 79, 65, 186, 81, 80, 71, 72, 84, 89, 32]

  var checkIndex = 0

  $(document).keydown(function(e) {

    e.preventDefault()

    if (responsiveVoice.isPlaying()) {
      responsiveVoice.cancel()
    }

    if (e.which === 38 || e.which === 39 || e.which === 27) {

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
