var contents = {
  one: "Welcome to the contents page. Press on the right arrow to go to the first chapter",
  two: "Or you can press on the space bar to go to your audio keyboard"
}

var msg = document.querySelector('#contents')
var msg2 = document.querySelector('#contents2')

$(document).ready(function() {

  msg.textContent = contents.one
  console.log(msg.textContent)
  responsiveVoice.speak(msg.textContent, "US English Female")

  msg2.textContent = contents.two
  console.log(msg2.textContent)
  responsiveVoice.speak(msg2.textContent, "US English Female")

  $(document).keydown(function(e) {
    if (e.which == 39) {
      window.location.href = "http://localhost:8000/chapter/one"

    } else if (e.which == 32) {
      window.location.href = "http://localhost:8000/keyboard"
    }
  })
})
