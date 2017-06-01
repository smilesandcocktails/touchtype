function audioKeyboardExit (e, contents) {
  e.preventDefault()

  url = $(contents).attr('href')
  nextUrl(url)
}
