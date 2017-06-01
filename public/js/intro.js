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

  $('#divContents').click(function () {
    if (responsiveVoice.isPlaying()) {
      responsiveVoice.cancel()
    }
    window.location.href = '/contents'
  })

  $('#readMenu').click(function () {
    if (responsiveVoice.isPlaying()) {
      responsiveVoice.cancel()
    }
    speak(intro.instructions)
  })

  if (responsiveVoice.voiceSupport()) {
    speak(intro.one)

    // e.which for
    var introSequence = [40, 38]

    var checkIndex = 0

    $(document).keydown(function (e) {
      e.preventDefault()

      if (e.which === 38 || e.which === 39 || e.which === 27) {
        if (responsiveVoice.isPlaying()) {
          responsiveVoice.cancel()
        }

        var nextChapt = '.contentsPage'
        afterAction(e, nextChapt)
      } else {
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
      }
    })
  } else {
    // display msg that it does not support voice features
    msg.textContent = intro.none
  }
})
