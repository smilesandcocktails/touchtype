$(document).ready(function() {

  responsiveVoice.cancel()
  clickToPause()

  var msg = document.querySelector('#contents')
  var msg2 = document.querySelector('#contents2')

  // speaks welcome to contents
  responsiveVoice.speak(contents.intro, "US English Female")

  $(document).keydown(function(e) {
    responsiveVoice.cancel()
    //right arrow OR 1 ==> chapter 1
    if (e.which === 39 || e.which === 49) {

      var url = $('.chaptOneLink').attr('href')
      nextUrl(url)
    }
    // spacebar ==> audio keyboard
    else if (e.which === 32) {
      var url = $('.keyboardLink').attr('href')
      nextUrl(url)
    }
    else if (e.which === 91 || e.which === 93) {
      pageReload()
    }
  })
})
