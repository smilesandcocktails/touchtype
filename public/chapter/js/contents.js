var contents = {
  one: "Press space bar and say one"
  // one: "You have entered this site to do something. There are 5 chapters. All you have to do is to tell us which chapter you want to enter into. So if you would like to go into chapter one, enter your space bar first and then say one to your microphone."
}

var msg = document.getElementById('contents')

$(document).ready(function() {

  msg.textContent = contents.one
  console.log(msg.textContent)
  responsiveVoice.speak(msg.textContent, "US English Female")

  $(document).keypress(function(e) {
    if (e.which == 32) {
      var recognizing
      var transcription = document.getElementById('speechContents')
      var interim_span = document.getElementById('interimContents')
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

        var speechArray = ['one', 'two', 'three', 'four', 'five']
        var chaptArray = ['chaptOneLink', 'chaptTwoLink', 'chaptThreeLink', 'chaptFourLink', 'chaptFiveLink']

        speechArray.forEach(function(each, index) {
          if (finalTranscript == each) {
            console.log(finalTranscript.toString())
            console.log(each)
            console.log(chaptArray[index])
            // url = $('#'+ chaptArray[index]).attr('href')
            // window.location.href = "http://localhost:8000"+url
          }
        })

        console.log(finalTranscript + " is the Final Transcript")
        console.log(interimTranscript + " is the Intermin Transcript")
      }

      speech.onerror = function(event) {
          // Either 'No-speech' or 'Network connection error'
          console.error(event.error);
      }
    }
  })
})
