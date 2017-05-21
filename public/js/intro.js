var intro = {
  one: "Welcome to this website! Press on Space Bar",
  two: "My Name is Cara. What is yours?",
  none: "Sorry your browser does not have voice support features"
}

$(document).ready(function() {
  var msg = document.getElementById('msg')
  if(responsiveVoice.voiceSupport()) {
    msg.textContent = intro.one
    console.log(msg)
    responsiveVoice.speak(msg.textContent, "US English Female")

    $(document).keypress(function(e) {
      if(e.keyCode || e.which == 32) {
        url = $('#chapterHomeLink').attr('href')
        console.log(url)
        window.location.href = "http://localhost:8000"+url
        // e.preventDefault()

    //     $.ajax({
    //   url: '/chapters',
    //   type: 'GET',
    //   data: {},
    //   success: () => {
    //
    //   }
    // })
      }
    })

  } else {
    msg.textContent = intro.none
  }
})


// var homeSpaceBar = document.getElementById('homeSpaceBar')
// homeSpaceBar.addEventListener('keypress', function (e) {
//   if(e.keyCode == 32) {
//     var audio = new Audio('../audio/keypress.mp3')
//     audio.play()
//     res.render('chapters/chapterHome')
//   }
// })


// document.addEventListener('DOMContentLoaded', function(e) {
//
// })

// if(responsiveVoice.voiceSupport()) {
//   responsiveVoice.speak("hello world", "US English Female");
// }
