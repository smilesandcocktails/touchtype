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
    responsiveVoice.cancel()

    if (e.which !== chaptTwoSequence[checkIndex]) {
      switch (checkIndex) {
        case 0:
          if (e.which === 70) {
            responsiveVoice.speak("This is the left key bump. Move your finger 3 keys to the right to find the right key bump.", "US English Female")
          }
          else {
            responsiveVoice.speak("Try to find the key with the bump again.", "US English Female")
          }
          break
        case 1:
          responsiveVoice.speak("Try again. Remember to keep your right index finger on the right key bump and place your middle finger beside that key.", "US English Female")
          break
        case 2:
          responsiveVoice.speak("Press on the key to the right of your middle finger beside 'K'", "US English Female")
          break
        case 3:
          responsiveVoice.speak("Try again. Just place your pinky beside your fourth finger.", "US English Female")
          break
        case 4:
          responsiveVoice.speak("Press on the space bar at the middle bottom of your keyboard to finalize this chapter.", "US English Female")
          break
        default:
          responsiveVoice.speak(chaptTwo.seven, "US English Female")
          break
      }
    }
    else {
      switch (checkIndex) {
        case 0:
          responsiveVoice.speak(chaptTwo.two, "US English Female")
          checkIndex ++
          console.log(checkIndex + " is checkIndex after J")
          break
        case 1:
          responsiveVoice.speak(chaptTwo.three, "US English Female")
          checkIndex ++
          console.log(checkIndex + " is checkIndex after K")
          break
        case 2:
          responsiveVoice.speak(chaptTwo.four, "US English Female")
          checkIndex ++
          console.log(checkIndex + " is checkIndex after L")
          break
        case 3:
          responsiveVoice.speak(chaptTwo.five, "US English Female")
          checkIndex ++
          console.log(checkIndex + " is checkIndex after ;")
          break
        case 4:
          responsiveVoice.speak(chaptTwo.six + chaptTwo.seven, "US English Female")
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

      var nextChapt = '.chaptThreeLink'
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
