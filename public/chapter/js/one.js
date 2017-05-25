var cOne= {
  one: "Chapter 1. We will teach you how to place your hands on the keyboard",
  two: "First there are 2 keys on your keyboard with a bump on it. One bump should be on the f Key, and the other bump is on the j key.",
  three: "Search for the bumps with your left and right index fingers.",
  four: "When you have found your keyboard bumps, put your left index finger on "
}

var msg = document.querySelector('#cOne')
var letter = document.querySelector('.letter')

$(document).ready(function() {

  msg.textContent = cOne.one
  console.log(msg.textContent)
  responsiveVoice.speak(msg.textContent, "US English Female")


  $(document).keydown(function(e) {
    if (e.which == 39) {
      window.location.href = "http://localhost:8000/chapter/one"

    } else if (e.which == 32) {
      window.location.href = "http://localhost:8000/keyboard"
    }
  })
})
