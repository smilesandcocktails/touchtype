$(document).ready(function() {

  responsiveVoice.cancel()
  clickToPause()

  var title = document.querySelector('.title')
  var msg = document.querySelector('.msg')

  if(responsiveVoice.voiceSupport()) {

    //set the title of the page & speak it out
    responsiveVoice.speak(title.textContent, "US English Female")

    //display & speak the voice instruction (selected)
    msg.textContent = intro.one
    responsiveVoice.speak(msg.textContent, "US English Female")

    $(document).keydown(function(e) {
      //right arrow ==> contents page
      if(e.which === 39) {
        responsiveVoice.cancel()
        url = $('.contentsPage').attr('href')
        nextUrl(url)
      }
      else if (e.which === 91 || e.which === 93) {
        pageReload()
      }
    })
  } else {
    //display msg that it does not support voice features
    msg.textContent = intro.none
  }


})
