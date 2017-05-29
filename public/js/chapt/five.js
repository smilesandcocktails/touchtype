$(document).ready(function() {

  responsiveVoice.cancel()
  clickToPause()

  var title = document.querySelector('.title')
  var instructions = document.querySelector('.instructions')
  var newLetter = document.querySelector('.newLetter')
  var letter = document.querySelector('.letter')

  title.textContent = chaptFive.title
  responsiveVoice.speak(title.textContent, "US English Female")

  newLetter.textContent = "u"

  responsiveVoice.speak(chaptFive.one, "US English Female")

  // e.which for spacebar, u, i, o, p
  var chaptFiveSequence = [32, 85, 73, 79, 80]

  var checkIndex = 0

  $(document).keydown(function(e) {
    responsiveVoice.cancel()

    if (e.which !== chaptFiveSequence[checkIndex]) {
      switch (checkIndex) {
        case 0:
            responsiveVoice.speak("Press on the space bar which is at your middle bottom of your keyboard to start the lesson.", "US English Female")
          break
        case 1:
          if (e.which === 89) {
            responsiveVoice.speak("This is the 'Y' key. 'U' is 1 key to the right of this key.", "US English Female")
          }
          else if(e.which === 73) {
            responsiveVoice.speak("You have pressed on 'I' on your keyboard. This key should be pressed by your middle finger. Press on the key to the left for 'U'.", "US English Female")
          }
          else if (e.which === 72) {
            responsiveVoice.speak("'H'. Your 'U' key is just above your 'J' key.", "US English Female")
          } else {
            responsiveVoice.speak("Find 'U' again just above your 'J' key.", "US English Female")
          }
          break
        case 2:
          if(e.which === 85) {
            responsiveVoice.speak("You have just pressed 'U' earlier on with your index finger. 'I' is just 1 key to the right of this key.", "US English Female")
          }
          else if(e.which === 75) {
            responsiveVoice.speak("'K' is on your homerow. Just shift your middle finger one key up to get 'I'.", "US English Female")
          }
          else if(e.which === 79) {
            responsiveVoice.speak("You have pressed on 'O' which should be pressed by your fourth finger. Try 1 key to the left and use your middle finger to press on it.", "US English Female")
          }
          else {
            responsiveVoice.speak("Try again to find 'I' on your keyboard. It is just above 'K'.","US English Female")
          }
          break
        case 3:
          if (e.which === 76) {
            responsiveVoice.speak("This is 'L'. Shift your fourth finger one key up to get 'O'.", "US English Female")
          }
          else if(e.which === 73) {
            responsiveVoice.speak("You just entered 'I' on your keyboard. 'O' is just 1 key to the right of this key.", "US English Female")
          }
          else if(e.which === 80) {
            responsiveVoice.speak("You just pressed on 'P' which should be pressed by your right pinky. 'O' is just 1 key to the left of this key.", "US English Female")
          }
          else {
            responsiveVoice.speak("'O' is above your homerow 'L' key. Try again.", "US English Female")
          }
          break
        case 4:
          if (e.which === 186) {
            responsiveVoice.speak("This is semicolon. Move your pinky finger one key above this and press on it for 'P'.", "US English Female")
          }
          else if(e.which === 222) {
            responsiveVoice.speak("This is your single quote. Try the key above your semicolon.", "US English Female")
          }
          else if(e.which === 219) {
            responsiveVoice.speak("You have pressed the opening square bracket. Press on 1 key to the left of this key.", "US English Female")
          }
          else {
            responsiveVoice.speak("Shift your pinky 1 key up from the homerow to find 'P'.", "US English Female")
          }
          break
        default:
          responsiveVoice.speak(chaptFive.next, "US English Female")
          break
      }
    }
    else {
      switch (checkIndex) {
        case 0:
          responsiveVoice.speak(chaptFive.two, "US English Female")
          newLetter.textContent = "u"
          checkIndex ++
          break
        case 1:
          responsiveVoice.speak(chaptFive.three, "US English Female")
          newLetter.textContent = "i"
          checkIndex ++
          break
        case 2:
          responsiveVoice.speak(chaptFive.four, "US English Female")
          newLetter.textContent = "o"
          checkIndex ++
          break
        case 3:
          responsiveVoice.speak(chaptFive.five, "US English Female")
          newLetter.textContent = "p"
          checkIndex ++
          break
        case 4:
          responsiveVoice.speak(chaptFive.next, "US English Female")
          newLetter.textContent = "p"
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

      var nextChapt = '.chaptSixLink'
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
