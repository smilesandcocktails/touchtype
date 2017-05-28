$(document).ready(function() {

  responsiveVoice.cancel()
  clickToPause()

  var title = document.querySelector('.title')
  var instructions = document.querySelector('.instructions')
  var newLetter = document.querySelector('.newLetter')
  var letter = document.querySelector('.letter')

  title.textContent = chaptThree.title
  responsiveVoice.speak(title.textContent, "US English Female")

  newLetter.textContent = "f"

  responsiveVoice.speak(chaptThree.one, "US English Female")

  // e.which for f, j, d, k, s, l, a, ;, g, h, spacebar
  var chaptThreeSequence = [70, 74, 68, 75, 83, 76, 65, 186, 32, 71, 72]

  var checkIndex = 0

  $(document).keydown(function(e) {
    responsiveVoice.cancel()

    if (e.which !== chaptThreeSequence[checkIndex]) {
      switch (checkIndex) {
        case 0:
          if (e.which === 74) {
            responsiveVoice.speak("This is 'J'. Move your finger 3 keys to the left to find 'F'.", "US English Female")
          }
          else {
            responsiveVoice.speak("Try to find the left bump again.", "US English Female")
          }
          break
        case 1:
          if (e.which === 70) {
            responsiveVoice.speak("This is 'F'. Move your finger 3 keys to the right to find 'J'.", "US English Female")
          }
          else {
            responsiveVoice.speak("Try to find the right bump again.", "US English Female")
          }
          break
        case 2:
          responsiveVoice.speak("'D' is the letter beside your left index finger.", "US English Female")
          break
        case 3:
          responsiveVoice.speak("'K' is the key beside your right index finger.", "US English Female")
          break
        case 4:
          responsiveVoice.speak("'S' is the key beside your left middle finger.", "US English Female")
          break
        case 5:
          responsiveVoice.speak("Your right hand fourth finger should be on the 'L' key.", "US English Female")
          break
        case 6:
          responsiveVoice.speak("The 'A' key should be pressed by your left pinky.", "US English Female")
          break
        case 7:
          responsiveVoice.speak("The semicolon key should be pressed by your right pinky.", "US English Female")
          break
        case 8:
          responsiveVoice.speak("The space bar is at the bottom middle part of your keyboard.", "US English Female")
          break
        case 9:
          responsiveVoice.speak("Remember that your left index finger should be on the left key bump. Find the key to the right of that bumped key and press on it.", "US English Female")
          break
        case 10:
          responsiveVoice.speak("Your right index finger should be on the right keyboard bump. Find the key to the left of that and press on it.", "US English Female")
          break
        default:
          responsiveVoice.speak(chaptThree.next, "US English Female")
          break
      }
    }
    else {
      switch (checkIndex) {
        case 0:
          responsiveVoice.speak(chaptThree.two, "US English Female")
          newLetter.textContent = "j"
          checkIndex ++
          break
        case 1:
          responsiveVoice.speak(chaptThree.three, "US English Female")
          newLetter.textContent = "d"
          checkIndex ++
          break
        case 2:
          responsiveVoice.speak(chaptThree.four, "US English Female")
          newLetter.textContent = "k"
          checkIndex ++
          break
        case 3:
          responsiveVoice.speak(chaptThree.five, "US English Female")
          newLetter.textContent = "s"
          checkIndex ++
          break
        case 4:
          responsiveVoice.speak(chaptThree.six, "US English Female")
          newLetter.textContent = "l"
          checkIndex ++
          break
        case 5:
          responsiveVoice.speak(chaptThree.seven, "US English Female")
          newLetter.textContent = "a"
          checkIndex ++
          break
        case 6:
          responsiveVoice.speak(chaptThree.eight, "US English Female")
          newLetter.textContent = ";"
          checkIndex ++
          break
        case 7:
          responsiveVoice.speak(chaptThree.nine, "US English Female")
          newLetter.textContent = "space bar"
          checkIndex ++
          break
        case 8:
          responsiveVoice.speak(chaptThree.ten, "US English Female")
          newLetter.textContent = "g"
          checkIndex ++
          break
        case 9:
          responsiveVoice.speak(chaptThree.eleven, "US English Female")
          newLetter.textContent = "h"
          checkIndex ++
          break
        case 10:
          responsiveVoice.speak(chaptThree.next, "US English Female")
          newLetter.textContent = "h"
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

      var nextChapt = '.chaptFourLink'
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
