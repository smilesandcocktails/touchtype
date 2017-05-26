$(document).ready(function() {
  var title = document.querySelector('.title')
  var msg = document.querySelector('.msg')

  if(responsiveVoice.voiceSupport()) {

    //set the title of the page & speak it out
    title.textContent = intro.title
    responsiveVoice.speak(title.textContent, "US English Female")

    //display & speak the voice instruction (selected)
    msg.textContent = intro.one
    responsiveVoice.speak(msg.textContent, "US English Female")

    $(document).keydown(function(e) {
      //right arrow ==> contents page
      if(e.which === 39) {
        responsiveVoice.cancel()
        url = $('.contentsPage').attr('href')
        window.location.href = "http://localhost:8000" + url
      }
    })
  } else {
    //display msg that it does not support voice features
    msg.textContent = intro.none
  }

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
