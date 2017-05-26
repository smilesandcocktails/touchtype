var title = document.querySelector('.title')
var instructions = document.querySelector('.instructions')
var letter = document.querySelector('.letter')

$(document).ready(function() {

  title.textContent = chaptOne.title
  responsiveVoice.speak(title.textContent, "US English Female")

  responsiveVoice.speak(chaptOne.one + chaptOne.two + chaptOne.three + chaptOne.four, "US English Female")
  // responsiveVoice.speak(chaptOne.two, "US English Female")
  // responsiveVoice.speak(chaptOne.three, "US English Female")
  // responsiveVoice.speak(chaptOne.four, "US English Female")

  $(document).keydown(function(e) {
    responsiveVoice.cancel()

    if (e.which === 70) {
      letter.textContent = e.key
      responsiveVoice.speak(cOneMsg.five, "US English Female")

    } else if (e.which === 32) {
      responsiveVoice.speak(cOneMsg.six, "US English Female")

    } else if (e.which === 74) {
      letter.textContent = e.key
      responsiveVoice.speak(cOneMsg.seven, "US English Female")

    } else if (e.which === 39) {
      url = $('.chaptTwoLink').attr('href')
      window.location.href = "http://localhost:8000" + url

    } else if (e.which === 37) {
      url = $('.contentLinkClass').attr('href')
      window.location.href = "http://localhost:8000" + url

    }
  })

  var click = 1

  $(window).on('click', function() {
    if (click == 1) {
      responsiveVoice.pause()
    }
    else if (click == 2) {
      responsiveVoice.resume()
      click = 0
    }
    click ++
  })

})
