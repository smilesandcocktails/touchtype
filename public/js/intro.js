$(document).ready(function () {
  if (responsiveVoice.isPlaying()) {
    responsiveVoice.cancel()
  }

  clickToPause()

  var disabled = false
  var title = document.querySelector('.title')
  var msg = document.querySelector('.msg')
  var iconDiv = document.querySelector('.icon')

  function speak (msg) {
    responsiveVoice.speak(msg, 'US English Female', {
      onstart: function () {
        disabled = true
        showIcon(iconDiv)
    }, onend: function () {
        disabled = false
        hideIcon(iconDiv)
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

      var url = $('.contentsPage').attr('href')

      if (e.which === 27) {
        pageReload()
      }
      else if (e.which === 38) {
        nextUrl(url)
      }

      if (!disabled) {
        if (e.which !== introSequence[checkIndex]) {
          responsiveVoice.cancel()
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
