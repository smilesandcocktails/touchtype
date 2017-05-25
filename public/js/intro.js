var intro = {
  title: "Welcome to the TouchType website",
  one: "Press on the right arrow key at the bottom right of your keyboard to continue.",
  none: "Sorry your browser does not have voice support features"
}

$(document).ready(function() {
  var msg = document.querySelector('#msg')
  var title = document.querySelector('.title')
  if(responsiveVoice.voiceSupport()) {

    title.textContent = intro.title
    responsiveVoice.speak(title.textContent, "US English Female")

    msg.textContent = intro.one
    console.log(msg)
    responsiveVoice.speak(msg.textContent, "US English Female")

    $(document).keydown(function(e) {
      if(e.which === 39) {
        url = $('#chapterContentsLink').attr('href')
        console.log(url)
        window.location.href = "http://localhost:8000"+url
      }
    })
  } else {
    msg.textContent = intro.none
  }
})
