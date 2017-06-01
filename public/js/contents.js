$(document).ready(function () {
  if (responsiveVoice.isPlaying()) {
    responsiveVoice.cancel()
  }

  clickToPause()

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

  speak(contents.intro)

  $(document).keydown(function (e) {
    e.preventDefault()

    if (e.which === 37) { // audio keyboard => left arrow
      var url = $('.keyboardLink').attr('href')
      nextUrl(url)
    } else if (e.which === 40) { // help menu => down arrow
      speak(contents.instructions)
    } else if (e.which === 39) { // chapter 1 => right arrow
      var url = $('.chaptOneLink').attr('href')
      nextUrl(url)
    } else if (e.which === 27) { // reload => esc
      pageReload()
    }
  })
})
