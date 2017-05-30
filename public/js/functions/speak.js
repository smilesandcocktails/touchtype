function speak(msg) {

  responsiveVoice.speak(msg, "US English Female", { onstart: function() {
      disabled = true
    }, onend: function() {
      disabled = false
    }
  })
}
