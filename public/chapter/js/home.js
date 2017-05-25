var chapterHome = {
  one: "My Name is Cara. What is yours? Press on the Space Bar before letting me know your name.",
  two: "Lovely to meet you. Press on the right arrow key to continue "
}

var user = 'Friend'
var msg = document.querySelector('#cHome')

$(document).ready(function() {

  msg.textContent = chapterHome.one
  console.log(msg.textContent)
  responsiveVoice.speak(msg.textContent, "US English Female")

  $(document).keydown(function(e) {
    if (e.which == 32) {
      var recognizing
      var transcription = document.querySelector('#speech')
      var interim_span = document.querySelector('#interim')
      interim_span.style.opacity = '0.5'

      var speech = new webkitSpeechRecognition() || speechRecognition()

      speech.lang = 'en-US'
      speech.start()

      speech.onstart = function() {
        console.log('SPEECH IS DETECTED')
          recognizing = true
      }

      speech.onresult = function(event) {
        // When recognition produces result
        var interimTranscript = ''
        var finalTranscript = ''
        // main for loop for final and interim results
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }
        transcription.textContent = finalTranscript
        interim_span.textContent = interimTranscript
        user = finalTranscript
        console.log(finalTranscript + " is the Final Transcript")
        console.log(interimTranscript + " is the Intermin Transcript")
        console.log(user + " is the USER")
        msg.textContent = chapterHome.two + user
        console.log(msg)
        responsiveVoice.speak(msg.textContent, "US English Female")
      }

      speech.onerror = function(event) {
          // Either 'No-speech' or 'Network connection error'
          console.error(event.error);
      }
    }
    else if (e.which == 39) {
      console.log("End speech session")
      url = $('.contentsLink').attr('href')
      window.location.href = "http://localhost:8000"+url
    }
  })
})
