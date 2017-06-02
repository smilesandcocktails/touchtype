# **TouchType**
*(TouchType has only been tested on a macbook on Google Chrome for a web development final project presentation.)*

TouchType was created with the objective to teach the visually impaired community how to type on the QWERTY keyboard focused on using audio instructions.

This application can also be used by anyone who has not learnt touch typing and may want to learn to do so.

There are currently 8 chapters teaching users how to position their hands at the home row keys and teaching them every alphabet letter on the QWERTY keyboard.

[Learn to TouchType Today!](https://touchtype1.herokuapp.com/)

# Getting Started

## 1. Text-To-Speech with ResponsiveVoiceJS API

Using a text-to-speech API is the key component of this project.

[ResponsiveVoiceJS](https://responsivevoice.org/) is an easy-to-use HTML5-based text-to-speech library API which provides voice features to speak web text in a given voice with a string parameter. It allows for us to set the pitch, rate, volume and callbacks for the activated voice.

`<script src="//code.responsivevoice.org/responsivevoice.js"></script>`

### Voice Activation
`speak(msg)` function activates each text to be spoken with to standardize the voice.

`function speak (msg) {
  responsiveVoice.speak(msg, 'US English Female', { onstart: function () {
    showIcon(iconDiv)
    disabled = true
  }, onend: function () {
    hideIcon(iconDiv)
    disabled = false
  }
  })
}`

* `disabled = true` prevents the speech to be interrupted during an expected speech session.
* `showIcon(iconDiv)` & `hideIcon(iconDiv)` displays and hides a speaker image during speech.

### Click to Pause Speech
`clickToPause ()` function sets up an onClick event listener to pause and resume the spoken speech when available.

`function clickToPause () {
  var click = 1
  $(window).on('click', function () {
    if (click === 1) {
      responsiveVoice.pause()
    } else if (click === 2) {
      responsiveVoice.resume()
      click = 0
    }
    click++
  })
}`

### Cancel Voice Activation When Page Changes or Reloads

`if (responsiveVoice.isPlaying()) {
  responsiveVoice.cancel()
}`

## 2. Design with Accessibility
### Navigation instructions & Designated Keys Usability
Creating navigation instructions is the 1st thing that needs to be clearly stated at the beginning of each page.

Having the navigation keys set at the corners of the keyboard allows for navigation ease.

## Contents Page as the Return Point for Users
The user will always have the contents page to return to at any point in time with the up arrow key.

## Audio KeyBoard
As the visually-abled community is able to look down to the keyboard immediately to SEE the keys, the audio keyboard allows the visually-impaired community to be able to HEAR the keys immediately when the key is entered.

Shifted keys are also read out when pressed with `if (e.shiftKey)`.

## Putting ' name = '' ' in each anchor tag
Some users may already have a website-to-speech. Having the name in each anchor tag or image will help this feature to read out what is on the screen already.

## Contrasting Colors and Shapes
The aesthetics design of this website is intended for users with partial vision using:
* Big Words *(Small Texts in the website are meant for those who are helping the users)*
* Big Buttons
* Different Shapes for Buttons
* Contrasting Colors

## 3. Navigation
2 types of event listeners are used for website navigation.

### Keydown
Keydown is preferable over keypress because keypress does not read special keys (i.e. shift, command, alt, option, etc.)

**Bottom Right of Keyboard**

`right arrow key` => Next Page / Chapter

`down arrow key` => Menu Instructions

`up arrow key` => Contents Page

`left arrow key` => Audio Keyboard

**Top Left of Keyboard**

`esc` => Refresh Page

### Click
The click option to navigate the website is also available for those who have partial visibility and for those around helping the user.

## 3. Curriculum with Audio Guide
The curriculum is created with personalized clear instructive audio guide in mind.

### Create Events in Sequence
As the 1st few chapters are instructive and supposed to teach each letter on the keyboard one-by-one, it is important to ensure that each event comes after the next.

`var chaptOneSequence = [70, 68, 83, 65, 32]`

`var checkIndex = 0`

`switch (checkIndex)`

`checkIndex++`

### Create Customized Audio Instructions for Keys Entered Wrongly
Customized messages are read out to help guide users to the requested letter on the keyboard.

For the more complicated keys on the top or bottom alphabet rows, customized messages for specific key pressed will further guide the user to the requested key.

# Inspiration
[Disability & Innovation: The Universal Benefits of Accessible Design, by Haben Girma](https://youtu.be/_bC7Mvy7Vn4)  - Haben Girma, the 1st Deaf-Blind Harvard Law Graduate gives a talk on how to design with accessibility in mind.

# Collaboration
[Wilson Chew](https://www.wilsonhjchew.com/) - User Experience Designer & Writer on designing for accessibility and user testing

[Learn to TouchType Today!](https://touchtype1.herokuapp.com/)
