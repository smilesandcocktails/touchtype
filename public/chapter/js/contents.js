var contents = {
  one: "Press on the right arrow to go to the first chapter or you can press on the space bar to go to your key board"
}

var msg = document.getElementById('contents')

$(document).ready(function() {

  msg.textContent = contents.one
  console.log(msg.textContent)
  responsiveVoice.speak(msg.textContent, "US English Female")

  $(document).keydown(function(e) {
    if (e.which == 39) {
      window.location.href = "http://localhost:8000/chapter/one"
      // var recognizing
      // var transcription = document.getElementById('speechContents')
      // var interim_span = document.getElementById('interimContents')
      // interim_span.style.opacity = '0.5'
      //
      // var speech = new webkitSpeechRecognition() || speechRecognition()
      //
      // speech.lang = 'en-US'
      // speech.start()
      //
      // speech.onstart = function() {
      //   console.log('SPEECH IS DETECTED')
      //     recognizing = true
      // }
      //
      // speech.onresult = function(event) {
      //   // When recognition produces result
      //   var interimTranscript = ''
      //   var finalTranscript = ''
      //   // main for loop for final and interim results
      //   for (var i = event.resultIndex; i < event.results.length; ++i) {
      //     if (event.results[i].isFinal) {
      //       finalTranscript += event.results[i][0].transcript;
      //     } else {
      //       interimTranscript += event.results[i][0].transcript;
      //     }
      //   }
      //   transcription.textContent = finalTranscript
      //   interim_span.textContent = interimTranscript
      //
      //   var speechArray = ['one', 'two', 'three', 'four', 'five']
      //   var chaptArray = ['chaptOneLink', 'chaptTwoLink', 'chaptThreeLink', 'chaptFourLink', 'chaptFiveLink']
      //
      //   speechArray.forEach(function(each, index) {
      //     console.log(each, index)
      //     console.log(finalTranscript)
      //     console.log(finalTranscript.toString())
      //     if (finalTranscript == each) {
      //       console.log(finalTranscript.toString())
      //       console.log(each)
      //       console.log(chaptArray[index])
      //       url = $('#'+ chaptArray[index]).attr('href')
      //       window.location.href = "http://localhost:8000"+url
      //
        //   }
        // })

        // console.log(finalTranscript + " is the Final Transcript")
        // console.log(interimTranscript + " is the Intermin Transcript")
      // }

      // speech.onerror = function(event) {
      //     // Either 'No-speech' or 'Network connection error'
      //     console.error(event.error);
      // }
    } else if (e.which == 32) {
      window.location.href = "http://localhost:8000/keyboard"
    }
  })
})
