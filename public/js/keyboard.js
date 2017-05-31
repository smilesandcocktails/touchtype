$(document).ready(function () {
  if (responsiveVoice.isPlaying()) {
    responsiveVoice.cancel()
  }

  var disabled = false

  function speak (msg) {
    responsiveVoice.speak(msg, 'US English Female', { onstart: function () {
      disabled = true
    }, onend: function () {
      disabled = false
    }
    })
  }

  var display = document.querySelector('.keycodeDisplay')

  speak(keyboardIntro.intro)

  $(document).keydown(function (e) {
    e.preventDefault()
    
    if (e.which === 39 || e.which === 91 || e.which === 93) {

      if (responsiveVoice.isPlaying()) {
        responsiveVoice.cancel()
      }

      var nextChapt = '.contentsPage'
      audioKeyboardExit(e, nextChapt)

    } else {
      console.log('DISABLED BEFORE !DISABLED'+disabled);
      if (!disabled) {
      // Speaks out keys that are shifted from shiftKeyCodes
        if (e.shiftKey) {
          display.textContent = shiftKeyCodes[e.keyCode]
          speak(shiftKeyCodes[e.keyCode])
        }
      // Speaks out keys that are normal from KeyCodes
        else {
          display.textContent = keyCodes[e.keyCode]
          speak(keyCodes[e.keyCode])
        }
      }
    }
  })
})
