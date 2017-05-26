var title = document.querySelector('.title')
var instructions = document.querySelector('.instructions')
var newLetter = document.querySelector('.newLetter')
var letter = document.querySelector('.letter')

$(document).ready(function() {

  title.textContent = chaptOne.title
  responsiveVoice.speak(title.textContent, "US English Female")

  newLetter.textContent = "f"

  responsiveVoice.speak(chaptOne.one + chaptOne.two + chaptOne.three + chaptOne.four, "US English Female")

  $(document).keydown(function(e) {
    responsiveVoice.cancel()

    // keyCode ==> f
    if (e.which === 70) {
      letter.textContent = e.key
      newLetter.textContent = "d"
      responsiveVoice.speak(chaptOne.five, "US English Female")
    }

    // keyCode ==> d
    else if (e.which === 68) {
      letter.textContent = e.key
      newLetter.textContent = "s"
      responsiveVoice.speak(chaptOne.six, "US English Female")
    }

    // keyCode ==> s
    else if (e.which === 83) {
      letter.textContent = e.key
      newLetter.textContent = "a"
      responsiveVoice.speak(chaptOne.seven, "US English Female")
    }

    // keyCode ==> a
    else if (e.which === 65) {
      letter.textContent = e.key
      newLetter.textContent = "Space Bar"
      responsiveVoice.speak(chaptOne.eight, "US English Female")
    }
    // keyCode ==> spacebar
    else if (e.which === 32) {

      responsiveVoice.speak(chaptOne.nine + chaptOne.ten, "US English Female")
    }
    // keyCode ==> right arrow
    else if (e.which === 39) {
      url = $('.chaptTwoLink').attr('href')
      window.location.href = "http://localhost:8000" + url
    }

    // keyCode ==> shift key
    else if (e.which === 16) {
      url = $('.contentsPage').attr('href')
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
