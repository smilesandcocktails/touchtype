$(document).ready(function() {

  responsiveVoice.cancel()
  clickToPause()
  
  var intro = contents.intro
  var msg = document.querySelector('#contents')
  var msg2 = document.querySelector('#contents2')

  // speaks welcome to contents
  responsiveVoice.speak(intro, "US English Female")

  // speaks instructions for right arrow ==> chapter 1
  msg.textContent = contents.one
  responsiveVoice.speak(msg.textContent, "US English Female")

  // speaks instructions for spacebar ==> keyboard
  msg2.textContent = contents.two
  responsiveVoice.speak(msg2.textContent + contents.three, "US English Female")

  $(document).keydown(function(e) {
    responsiveVoice.cancel()
    //right arrow OR 1 ==> chapter 1
    if (e.which === 39 || e.which === 49) {

      var url = $('.chaptOneLink').attr('href')
      window.location.href = "http://localhost:8000" + url
    }
    // spacebar ==> audio keyboard
    else if (e.which === 32) {
      var url = $('.keyboardLink').attr('href')
      window.location.href = "http://localhost:8000" + url
    }
  })
})
