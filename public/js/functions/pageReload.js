function pageReload () {
  if (responsiveVoice.isPlaying()) {
    responsiveVoice.cancel()
  }
  window.location.reload()
}
