$(document).ready(function () {

  if (responsiveVoice.isPlaying()) {
    responsiveVoice.cancel()
  }

  clickToPause()

  var disabled = false
  var iconDiv = document.querySelector('.icon')


  function speak (msg) {
    responsiveVoice.speak(msg, 'US English Female', {
      onstart: function () {
        showIcon(iconDiv)
        disabled = true
    }, onend: function () {
        hideIcon(iconDiv)
        disabled = false
    }
    })
  }


  if (responsiveVoice.voiceSupport()) {
    speak(intro.one)

    // e.which for
    var introSequence = [40, 38]

    var checkIndex = 0

    $(document).keydown(function (e) {

      e.preventDefault()

      if (!disabled) {

        if (responsiveVoice.isPlaying()) {
          responsiveVoice.cancel()
        }

        if (e.which !== introSequence[checkIndex]) {

          switch (checkIndex) {
            case 0:
              speak(intro.notDownArrow)
              break
            case 1:
              speak(intro.notUpArrow)
              break
            default:
              speak(intro.next)
              break
          }
        } else {
          switch (checkIndex) {
            case 0:
              speak(intro.instructions)
              checkIndex++
              break
            case 1:
              var url = $('.contentsPage').attr('href')
              nextUrl(url)
              checkIndex++
              break
            default:
              speak(intro.next)
              break
          }
        }
      }
    })
  } else {
    // display msg that it does not support voice features
    msg.textContent = intro.none
  }
})
