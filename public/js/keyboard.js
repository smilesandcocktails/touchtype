$(document).ready(function() {

  responsiveVoice.cancel()

  var msg = document.querySelector('.text-display')

  if(responsiveVoice.voiceSupport()) {
    //speaks which page you are on
    responsiveVoice.speak(keyboardIntro.intro, "US English Female")

    //speaks instructions
    msg.textContent = keyboardIntro.one
    responsiveVoice.speak(msg.textContent, "US English Female")

    //speaks instructions to exit ==> click
    responsiveVoice.speak(keyboardIntro.two, "US English Female")


  }
  var body = document.querySelector('body');

    body.onkeydown = function (e) {
      responsiveVoice.cancel()

      if ( !e.metaKey ) {
        e.preventDefault();
      }

      //Speaks out keys that are shifted from shiftKeyCodes
      if (e.shiftKey) {
        document.querySelector('.keycode-display').textContent = shiftKeyCodes[e.keyCode]
        responsiveVoice.speak(shiftKeyCodes[e.keyCode], "US English Female")

      }
      //Speaks out keys that are normal from KeyCodes
      else {
      document.querySelector('.keycode-display').textContent = keyCodes[e.keyCode]
      responsiveVoice.speak(keyCodes[e.keyCode], "US English Female")
      }
    }

    $(window).on('click', function() {
      responsiveVoice.cancel()
      url = $('.contentsLink').attr('href')
      nextUrl(url)
    })

    $(document).keydown(function(e) {
      responsiveVoice.cancel()
      if (e.which === 91 || e.which === 93) {
        pageReload()
      }
    })
})
