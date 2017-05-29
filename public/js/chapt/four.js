$(document).ready(function() {

  responsiveVoice.cancel()
  clickToPause()

  var title = document.querySelector('.title')
  var instructions = document.querySelector('.instructions')
  var newLetter = document.querySelector('.newLetter')
  var letter = document.querySelector('.letter')

  title.textContent = chaptFour.title
  responsiveVoice.speak(title.textContent, "US English Female")

  newLetter.textContent = "q"

  responsiveVoice.speak(chaptFour.one, "US English Female")

  // e.which for spacebar, q, w, e, r, t, y
  var chaptFourSequence = [32, 81, 87, 69, 82, 84, 89]

  var checkIndex = 0

  $(document).keydown(function(e) {
    responsiveVoice.cancel()

    if (e.which !== chaptFourSequence[checkIndex]) {
      switch (checkIndex) {
        case 0:
            responsiveVoice.speak("Press on the space bar which is at your middle bottom of your keyboard to start the lesson.", "US English Female")
          break
        case 1:
          if (e.which === 9) {
            responsiveVoice.speak("This is your TAB key. This creates space before a paragraph. Shift your pinky 1 key to the right from the TAB key and press it.", "US English Female")
          }
          else if(e.which === 65) {
            responsiveVoice.speak("This is your homerow 'A key. Move your pinky 1 key above to get that 'Q' key.", "US English Female")
          }
          else if (e.which === 20) {
            responsiveVoice.speak("This is your CAPS Locks key. Shift your pinky above the 'A' key to get the 'Q'.", "US English Female")
          }
          else if (e.which === 87) {
            responsiveVoice.speak("This is 'W' which should be pressed by your fourth finger. Use your left pinky to press on 1 key to the left.", "US English Female")
          } else {
            responsiveVoice.speak("Try to find the 'Q' key again with your pinky. It is above your 'A'", "US English Female")
          }
          break
        case 2:
          if(e.which === 81) {
            responsiveVoice.speak("This is your 'Q' key. You should be pressing this with your pinky finger. 'W' is 1 key to the right of this key. Press it with your fourth finger.", "US English Female")
          }
          else if(e.which === 69) {
            responsiveVoice.speak("This is the 'E' on your keyboard. You should be pressing this with your middle finger. Put your fourth finger 1 key to your left to get the 'W'.", "US English Female")
          }
          else {
            responsiveVoice.speak("Try to find 'W' again with your fourth finger. It is above 'D'.","US English Female")
          }
          break
        case 3:
          if (e.which === 87) {
            responsiveVoice.speak("This is 'W'. 'E' is 1 key to the right of this key. Use your middle finger to press on 'E'.", "US English Female")
          }
          else if(e.which === 82) {
            responsiveVoice.speak("This is 'R'. The 'E' key is 1 key to the left. Use your middle finger to press on it.", "US English Female")
          }
          else {
            responsiveVoice.speak("Try again. 'E' is the key above your 'D' key.", "US English Female")
          }
          break
        case 4:
          if (e.which === 69) {
            responsiveVoice.speak("You have pressed the 'E' key. 'R' is one key to the right of this key. Use your index finger to press on it.", "US English Female")
          }
          else if(e.which === 84) {
            responsiveVoice.speak("This is the 'T' on your keyboard. Use your index finger to press on 1 key to the left for 'R'.", "US English Female")
          }
          else {
            responsiveVoice.speak("Please try again. 'R' is above your 'F' key.", "US English Female")
          }
          break
        case 5:
          if (e.which === 82) {
            responsiveVoice.speak("'T' is one key to the right of this key.", "US English Female")
          }
          else if(e.which === 71) {
            responsiveVoice.speak("This is 'G'. 'T' is just right above this key.", "US English Female")
          }
          else {
            responsiveVoice.speak("Try to find 'T' again.", "US English Female")
          }
          break
        case 6:
          if (e.which === 85) {
            responsiveVoice.speak("This is 'U'. Shift one key to the left and press it with your right index finger.", "US English Female")
          }
          else if(e.which === 72) {
            responsiveVoice.speak("This is the 'H' key. The 'Y' is right above this key.", "US English Female")
          }
          else if(e.which === 84) {
            responsiveVoice.speak("This is 'T'. And you should press this with your left index finger. 'Y' is one key to the right of this key. Press it with your right index finger.", "US English Female")
          }
          else {
            responsiveVoice.speak("Your right hand should be on the homerow keys. Try to find 'Y' again with your right index finger.'", "US English Female")
          }
          break
        default:
          responsiveVoice.speak(chaptFour.next, "US English Female")
          break
      }
    }
    else {
      switch (checkIndex) {
        case 0:
          responsiveVoice.speak(chaptFour.two, "US English Female")
          newLetter.textContent = "q"
          checkIndex ++
          break
        case 1:
          responsiveVoice.speak(chaptFour.three, "US English Female")
          newLetter.textContent = "w"
          checkIndex ++
          break
        case 2:
          responsiveVoice.speak(chaptFour.four, "US English Female")
          newLetter.textContent = "e"
          checkIndex ++
          break
        case 3:
          responsiveVoice.speak(chaptFour.five, "US English Female")
          newLetter.textContent = "r"
          checkIndex ++
          break
        case 4:
          responsiveVoice.speak(chaptFour.six, "US English Female")
          newLetter.textContent = "t"
          checkIndex ++
          break
        case 5:
          responsiveVoice.speak(chaptFour.seven, "US English Female")
          newLetter.textContent = "y"
          checkIndex ++
          break
        case 6:
          responsiveVoice.speak(chaptFour.eight, "US English Female")
          responsiveVoice.speak(chaptFour.next, "US English Female")
          newLetter.textContent = "y"
          checkIndex ++
          break
        default:
          console.log("default")
          break
      }
    }
  })


    $(document).keydown(function(e) {
      responsiveVoice.cancel()

      var nextChapt = '.chaptFiveLink'
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
