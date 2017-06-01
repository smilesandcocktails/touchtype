function nextUrl (url) {
  if (responsiveVoice.isPlaying()) {
    responsiveVoice.cancel()
  }
  window.location.href = url
}
