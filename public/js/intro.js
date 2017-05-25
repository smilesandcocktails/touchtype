var intro = {
  one: "Welcome to the TouchType website! Press the right arrow key at the bottom right of your keyboard to continue.",
  none: "Sorry your browser does not have voice support features"
}

$(document).ready(function() {
  var msg = document.getElementById('msg')
  if(responsiveVoice.voiceSupport()) {
    msg.textContent = intro.one
    console.log(msg)
    responsiveVoice.speak(msg.textContent, "US English Female")

    $(document).keydown(function(e) {
      if(e.which === 39) {
        url = $('#chapterHomeLink').attr('href')
        console.log(url)
        window.location.href = "http://localhost:8000"+url
      }
    })
  } else {
    msg.textContent = intro.none
  }
})
