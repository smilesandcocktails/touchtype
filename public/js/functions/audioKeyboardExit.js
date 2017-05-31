function audioKeyboardExit(e, nextChapt) {

  e.preventDefault()

  var backToContents = '.contentsPage'
  var url = ''

  // keyCode ==> Go to Next Chapter
  if (e.which === 39) {
    url = $(nextChapt).attr('href')
    nextUrl(url)
  }
  // left or right command ==> Reload Windows
  else if (e.which === 91 || e.which === 93) {
    pageReload()
  }
}
