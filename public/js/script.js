/*
 * Check for browser support
 */
var supportMsg = document.getElementById('msg');

if ('speechSynthesis' in window) {
	supportMsg.innerHTML = 'This browser <strong>supports</strong> speech synthesis.';
} else {
	supportMsg.innerHTML = 'Sorry your browser <strong>does not support</strong> speech synthesis.<br>Try this in <a href="http://www.google.co.uk/intl/en/chrome/browser/canary.html">Chrome Canary</a>.';
	supportMsg.classList.add('not-supported');
}


// Get the 'speak' button
var button = document.getElementById('speak');

// Get the text input element.
var speechMsgInput = document.getElementById('speech-msg');
var welcome = document.getElementById('welcome');

// Get the voice select element.
var voiceSelect = document.getElementById('voice');

// Get the attribute controls.
var volumeInput = document.getElementById('volume');
var rateInput = document.getElementById('rate');
var pitchInput = document.getElementById('pitch');


// Fetch the list of voices and populate the voice options.
function loadVoices() {
  // Fetch the available voices.
	var voices = speechSynthesis.getVoices();

  // console.log(voices[17].name);
  // Loop through each of the voices.
	voices.forEach(function(voice, i) {

    // Create a new option element.
		var option = document.createElement('option');

    // Set the options value and text.
		option.value = voice.name;
		option.innerHTML = voice.name;

    // Add the option to the voice selector.
		voiceSelect.appendChild(option);
	});
}

// Execute loadVoices.
loadVoices();

// Chrome loads voices asynchronously.
window.speechSynthesis.onvoiceschanged = function(e) {
  loadVoices();
};


// Create a new utterance for the specified text and add it to
// the queue.
function speak(text) {
  // Create a new instance of SpeechSynthesisUtterance.
	var msg = new SpeechSynthesisUtterance();

  // Set the text.
	msg.text = text;


  // If a voice has been selected, find the voice and set the
  // utterance instance's voice attribute.
	if (voiceSelect.value) {
		msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voiceSelect.value; })[0];
	}

  // Queue this utterance.
	window.speechSynthesis.speak(msg);
}

document.addEventListener('DOMContentLoaded', function(e) {
  speak(welcome.textContent)
})

document.onkeydown = function(e) {
  if(e.keyCode == 32) {
    var audio = new Audio('../audio/keypress.mp3')
    audio.play()
		speak(speechMsgInput.textContent);
  }
}

var f = document.getElementById('f');
document.onkeydown = function(e) {
  if(e.keyCode == 70) {
    var audio = new Audio('../audio/keypress.mp3')
    audio.play()
		speak(f.textContent);
  }
}

var j = document.getElementById('j');
document.onkeydown = function(e) {
  if(e.keyCode == 74) {
    var audio = new Audio('../audio/keypress.mp3')
    audio.play()
		speak(j.textContent);
  }
}
