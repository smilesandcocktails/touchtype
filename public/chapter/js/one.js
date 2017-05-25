var cOneMsg = {
  zero: "Chapter 1",
  one: "We will teach you how to place your hands on the keyboard",
  two: "Feel around your keyboard, and see if you can find 2 keys with protruding bumps on them.",
  three: "Now try searching for the keyboard bumps.",
  four: "When you have found your keyboard bumps, put your left index finger on the key with the bump on the left and press on it.",
  five: "Great Job! You have found the F letter on your keyboard! Now rest your middle finger on the key beside the F key, rest your fourth finger beside your middle finger, and your pinky at the key beside your fourth finger. Rest your left thumb on the space bar below. Press on the space bar to proceed and rest your left hand on the keyboard.",
  six: "Now find the other bump on your keyboard and press it with your right index finger.",
  seven: "Great job! You have found the J letter. Now rest your fingers on the keys beside your right index finger with your right thumb also on the space bar together with your left thumb. Press on the right arrow to continue."
}

var cHeader = document.querySelector('#cHeader')
var cOneDiv = document.querySelector('#cOne')
var cOneDiv2 = document.querySelector('#cTwo')
var cOneDiv3 = document.querySelector('#cThree')
var cOneDiv4 = document.querySelector('#cFour')
var letter = document.querySelector('.letter')

$(document).ready(function() {

  cHeader.textContent = cOneMsg.zero
  console.log(cHeader.textContent)
  responsiveVoice.speak(cHeader.textContent, "US English Female")

  cOneDiv.textContent = cOneMsg.one
  console.log(cOneDiv.textContent)
  responsiveVoice.speak(cOneDiv.textContent, "US English Female")

  cOneDiv2.textContent = cOneMsg.two
  console.log(cOneDiv2.textContent)
  responsiveVoice.speak(cOneDiv2.textContent, "US English Female")

  cOneDiv3.textContent = cOneMsg.three
  console.log(cOneDiv3.textContent)
  responsiveVoice.speak(cOneDiv3.textContent, "US English Female")

  cOneDiv4.textContent = cOneMsg.four
  console.log(cOneDiv4.textContent)
  responsiveVoice.speak(cOneDiv4.textContent, "US English Female")

  $(document).keydown(function(e) {
    if (e.which == 70) {
      letter.textContent = e.key
      responsiveVoice.speak(cOneMsg.five, "US English Female")

    } else if (e.which == 32) {
      responsiveVoice.speak(cOneMsg.six, "US English Female")

    } else if (e.which === 74) {
      letter.textContent = e.key
      responsiveVoice.speak(cOneMsg.seven, "US English Female")

    } else if (e.which == 39) {
      url = $('.chaptTwoLink').attr('href')
      window.location.href = "http://localhost:8000"+url

    } else if (e.which == 37) {
      url = $('.contentLinkClass').attr('href')
      window.location.href = "http://localhost:8000"+url
      
    }
  })
})
