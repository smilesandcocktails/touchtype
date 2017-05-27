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

  responsiveVoice.speak(chaptOne.one + chaptOne.two + chaptOne.three + chaptOne.four, "US English Female")

// e.which for f, d, s, a, spacebar, rightArrow, shift
var sequence = [70, 68, 83, 65, 32, 39, 16]

var checkIndex = 0
$(document).keydown(function(e) {
  responsiveVoice.cancel()

  if (e.which !== sequence[checkIndex]) {
    switch (checkIndex) {
      case 0:
        responsiveVoice.speak("Please try to find F again", "US English Female")
        break
      case 1:
        responsiveVoice.speak("Please try to find D again", "US English Female")
        break
      case 2:
        responsiveVoice.speak("Please try to find S again", "US English Female")
        break
      case 3:
        responsiveVoice.speak("Please try to find A again", "US English Female")
        break
      default:
        responsiveVoice.speak("Please try again", "US English Female")
        break
    }
  }
  else {
    switch (checkIndex) {
      case 0:
        responsiveVoice.speak(chaptOne.five, "US English Female")
        checkIndex ++
        console.log(checkIndex + " is checkIndex after F")
        break
      case 1:
        responsiveVoice.speak(chaptOne.six, "US English Female")
        checkIndex ++
        console.log(checkIndex + " is checkIndex after D")
        break
      case 2:
        responsiveVoice.speak(chaptOne.seven, "US English Female")
        checkIndex ++
        console.log(checkIndex + " is checkIndex after S")
        break
      case 3:
        responsiveVoice.speak(chaptOne.eight, "US English Female")
        checkIndex ++
        console.log(checkIndex + " is checkIndex after A")
        break
      case 4:
        responsiveVoice.speak(chaptOne.nine, "US English Female")
        console.log(checkIndex + " is checkIndex after SpaceBar")
        checkIndex ++
      default:
        console.log("default")
        exit()
        break

    }
  }
})

function exit (checkIndex) {
  // if (checkIndex === 4) {
    $(document).keydown(function(e) {
      responsiveVoice.cancel()

      // keyCode ==> right arrow
      if (e.which === 39) {
        url = $('.chaptTwoLink').attr('href')
        nextUrl(url)
      }

      // keyCode ==> shift key
      else if (e.which === 16) {
        url = $('.contentsPage').attr('href')
        nextUrl(url)

      }
    })
  // }
}

exit()



})
