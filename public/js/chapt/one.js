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

// e.which for f, d, s, a, spacebar
var chaptOneSequence = [70, 68, 83, 65, 32]

var checkIndex = 0

$(document).keydown(function(e) {
  responsiveVoice.cancel()

  if (e.which !== chaptOneSequence[checkIndex]) {
    switch (checkIndex) {
      case 0:
        if (e.which === 74) {
          responsiveVoice.speak("This is the right key bump. Move your finger 3 keys to the left to find the left key bump.", "US English Female")
        }
        else {
          responsiveVoice.speak("Try to find the key with the bump again.", "US English Female")
        }
        break
      case 1:
        responsiveVoice.speak("Try again. Remember to keep your left index finger on the left key bump and place your middle finger beside that key.", "US English Female")
        break
      case 2:
        responsiveVoice.speak("Press on the key to the left of your middle finger beside 'D'", "US English Female")
        break
      case 3:
        responsiveVoice.speak("Try again. Just place your pinky beside the 'S' key that you had your fourth finger on.", "US English Female")
        break
      case 4:
        responsiveVoice.speak("Press on the space bar at the middle bottom of your keyboard to finalize this chapter.", "US English Female")
        break
      default:
        responsiveVoice.speak(chaptOne.ten, "US English Female")
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
        responsiveVoice.speak(chaptOne.nine + chaptOne.ten, "US English Female")
        console.log(checkIndex + " is checkIndex after SpaceBar")
        checkIndex ++
      default:
        console.log("default")
        break

    }
  }
})


  $(document).keydown(function(e) {
    responsiveVoice.cancel()

    var nextChapt = '.chaptTwoLink'
    var backToContents = '.contentsPage'

    // keyCode ==> right arrow key
    if (e.which === 39) {
      url = $(nextChapt).attr('href')
      nextUrl(url)
    }

    // keyCode ==> shift key
    else if (e.which === 16) {
      url = $(backToContents).attr('href')
      nextUrl(url)
    }
  })


})
