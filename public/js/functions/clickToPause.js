function clickToPause() {
  var click = 1

  $(window).on('click', function() {
    if (click === 1) {
      responsiveVoice.pause()
    }
    else if (click === 2) {
      responsiveVoice.resume()
      click = 0
    }
    click ++
  })
}
