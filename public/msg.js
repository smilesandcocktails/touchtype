var intro = {
  one: 'Welcome to the TouchType website. You will learn how to navigate through your keyboard in this website. We will guide you with audio instructions. You can pause or resume the audio at anytime by clicking your mouse on the website screen. Use your fingers to feel for the keys at the bottom right of your keyboard. The most bottom right key is your right arrow key. Shift your finger 1 key to the left. This is the down arrow key. Press on the down arrow key to read out your menu help.',
  instructions: "TouchType Menu. Number 1. Go to this audio Menu with the Down Arrow Key. Number 2. Go to your Contents Page with the Up Arrow Key. The up arrow key is 1 key above your down arrow key. Now let's go ahead and press on your Up Arrow Key to go to the contents page.",
  notDownArrow: "Sorry this is not your down arrow menu key. Try to find your right arrow key at the most bottom right of your keyboard. Shift your finger 1 key to the left for your bottom arrow key. And Press on it.",
  notUpArrow: "Sorry, this is not your up arrow key. Find your right arrow key at the most right bottom of your keyboard. Shift your finger 1 key to the left. And then shift your finger again 1 key up. This is your up arrow key. Press on it.",
  next: "Press on your Up Arrow Key to go to the contents page.",
  none: 'Sorry your browser does not have voice support features'
}

var contents = {
  intro: 'Welcome to the Contents Page. Press on the down arrow key for your help menu. Press on your left arrow key for the audio keyboard. Press on the right arrow key for Chapter 1. Refresh your page with the escape key at the top left key of your keyboard',
  instructions: "Contents Menu. Number 1. Go to your Audio Keyboard with the left arrow key. The left arrow key is 1 key to the left of the down arrow key. Number 2. Go to Chapter 1 with the right arrow key. The right arrow key is 1 key to the right of the down arrow key."
}

var keyboardIntro = {
  intro: 'Audio Keyboard. Enter any key on your keyboard for an audio guide. To exit this page, press on the "up" arrow key.'
}

var keyCodes = {
  3: 'break',
  8: 'delete',
  9: 'tab',
  12: 'clear',
  13: 'enter',
  16: 'shift',
  17: 'control',
  18: 'alt option',
  19: 'break',
  20: 'caps lock',
  27: 'escape',
  32: 'spacebar',
  33: 'page up',
  34: 'page down',
  35: 'end',
  36: 'home ',
  37: 'left arrow ',
  38: 'up arrow',
  39: 'right arrow',
  40: 'down arrow',
  41: 'select',
  42: 'print',
  43: 'execute',
  44: 'Print Screen',
  45: 'insert',
  46: 'delete',
  48: '0',
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  53: '5',
  54: '6',
  55: '7',
  56: '8',
  57: '9',
  58: ':',
  59: 'semicolon',
  60: '<',
  61: 'equals (firefox)',
  63: 'ß',
  64: '@ (firefox)',
  65: 'a',
  66: 'b',
  67: 'c',
  68: 'd',
  69: 'e',
  70: 'f',
  71: 'g',
  72: 'h',
  73: 'i',
  74: 'j',
  75: 'k',
  76: 'l',
  77: 'm',
  78: 'n',
  79: 'o',
  80: 'p',
  81: 'q',
  82: 'r',
  83: 's',
  84: 't',
  85: 'u',
  86: 'v',
  87: 'w',
  88: 'x',
  89: 'y',
  90: 'z',
  91: 'command',
  92: 'right window key ',
  93: 'command',
  96: 'numpad 0 ',
  97: 'numpad 1 ',
  98: 'numpad 2 ',
  99: 'numpad 3 ',
  100: 'numpad 4 ',
  101: 'numpad 5 ',
  102: 'numpad 6 ',
  103: 'numpad 7 ',
  104: 'numpad 8 ',
  105: 'numpad 9 ',
  106: 'multiply ',
  107: 'add',
  108: 'numpad period',
  109: 'subtract ',
  110: 'decimal point',
  111: 'divide ',
  112: 'f1 ',
  113: 'f2 ',
  114: 'f3 ',
  115: 'f4 ',
  116: 'f5 ',
  117: 'f6 ',
  118: 'f7 ',
  119: 'f8 ',
  120: 'f9 ',
  121: 'f10',
  122: 'f11',
  123: 'f12',
  124: 'f13',
  125: 'f14',
  126: 'f15',
  127: 'f16',
  128: 'f17',
  129: 'f18',
  130: 'f19',
  131: 'f20',
  132: 'f21',
  133: 'f22',
  134: 'f23',
  135: 'f24',
  144: 'num lock ',
  145: 'scroll lock',
  160: '^',
  161: '!',
  163: '#',
  164: '$',
  165: 'ù',
  166: 'page backward',
  167: 'page forward',
  169: 'closing paren (AZERTY)',
  170: '*',
  171: '~ + * key',
  173: 'minus (firefox), mute/unmute',
  174: 'decrease volume level',
  175: 'increase volume level',
  176: 'next',
  177: 'previous',
  178: 'stop',
  179: 'play/pause',
  180: 'e-mail',
  181: 'mute/unmute (firefox)',
  182: 'decrease volume level (firefox)',
  183: 'increase volume level (firefox)',
  186: ';',
  187: '=',
  188: ',',
  189: '-',
  190: '.',
  191: '/',
  192: 'grave accent',
  193: '?, / or °',
  194: 'numpad period (chrome)',
  219: '[',
  220: 'back slash',
  221: ']',
  222: "'",
  223: '`',
  224: 'left or right ⌘ key (firefox)',
  225: 'altgr',
  226: '< /git >',
  230: 'GNOME Compose Key',
  231: 'Rç',
  233: 'XF86Forward',
  234: 'XF86Back',
  255: 'toggle touchpad'
}

var shiftKeyCodes = {
  3: 'break',
  8: 'delete',
  9: 'tab',
  12: 'clear',
  13: 'enter',
  16: 'shift',
  17: 'control',
  18: 'alt option',
  19: 'break',
  20: 'caps lock',
  27: 'escape',
  32: 'spacebar',
  33: 'page up',
  34: 'page down',
  35: 'end',
  36: 'home ',
  37: 'left arrow ',
  38: 'up arrow ',
  39: 'right arrow',
  40: 'down arrow ',
  41: 'select',
  42: 'print',
  43: 'execute',
  44: 'Print Screen',
  45: 'insert',
  46: 'delete',
  48: ')',
  49: '!',
  50: '@',
  51: '#',
  52: '$',
  53: '%',
  54: '^',
  55: '&',
  56: '*',
  57: '(',
  58: ')',
  59: 'colon',
  60: '<',
  61: 'equals (firefox)',
  63: 'ß',
  64: '@ (firefox)',
  65: 'Capital A',
  66: 'Capital B',
  67: 'Capital C',
  68: 'Capital D',
  69: 'Capital E',
  70: 'Capital F',
  71: 'Capital G',
  72: 'Capital H',
  73: 'Capital I',
  74: 'Capital J',
  75: 'Capital K',
  76: 'Capital L',
  77: 'Capital M',
  78: 'Capital N',
  79: 'Capital O',
  80: 'Capital P',
  81: 'Capital Q',
  82: 'Capital R',
  83: 'Capital S',
  84: 'Capital T',
  85: 'Capital U',
  86: 'Capital V',
  87: 'Capital W',
  88: 'Capital X',
  89: 'Capital Y',
  90: 'Capital Z',
  160: '^',
  161: '!',
  163: '#',
  164: '$',
  165: 'ù',
  166: 'page backward',
  167: 'page forward',
  169: 'closing paren (AZERTY)',
  170: '*',
  171: '~ + * key',
  173: 'minus (firefox), mute/unmute',
  174: 'decrease volume level',
  175: 'increase volume level',
  176: 'next',
  177: 'previous',
  178: 'stop',
  179: 'play/pause',
  180: 'e-mail',
  181: 'mute/unmute (firefox)',
  182: 'decrease volume level (firefox)',
  183: 'increase volume level (firefox)',
  186: ':',
  187: '+',
  188: '<',
  189: '-',
  190: '>',
  191: '?',
  192: 'curly wurly',
  193: '?, / or °',
  194: 'numpad period (chrome)',
  219: '{',
  220: 'pipe',
  221: '}',
  222: 'Double Quote',
  223: '`',
  224: 'left or right ⌘ key (firefox)',
  225: 'altgr',
  226: '< /git >',
  230: 'GNOME Compose Key',
  231: 'Rç',
  233: 'XF86Forward',
  234: 'XF86Back',
  255: 'toggle touchpad'
}

var chaptOne = {
  one: 'In Chapter 1, We will teach you how to place your left hand on the keyboard. Feel around your keyboard, and see if you can find 2 keys with protruding bumps on them. When you have found your keyboard bumps, put your left index finger on the key with the bump on the left and press on it.',
  two: "Great Job! You have found the 'F' letter on your keyboard! Now rest your middle finger on the key beside the F key, and press on it.",
  three: "Awesome! That is the 'D' letter. Now rest your fourth finger beside your middle finger, and press on it.",
  four: "Great! You have found the 'S' key. Now place your pinky finger on the key beside your fourth finger and press on it.",
  five: "Fantastic! That is the 'A' on your keyboard. Now rest your left thumb on the space bar below and press on it.",
  six: 'Perfect! Your left hand is now in the correct position for the left home row keys for touch typing! Chapter 2 will teach you the correct position for your right hand.',
  next: 'Press on the right arrow key to go to Chapter 2. Press on the up arrow key to go back to the contents page. Or press on the escape key on the top left of your keyboard to redo this chapter again.'
}

var chaptOneMistakes = {
  j: 'This is the right key bump. Move your finger 3 keys to the left to find the left key bump.',
  notF: 'Try to find the key with the bump again.',
  notD: 'Try again. Remember to keep your left index finger on the left key bump and place your middle finger on the key beside.',
  notS: "Press on the key to the left of your middle finger beside 'D'",
  notA: "Try again. Just place your pinky beside the 'S' key that you had your fourth finger on.",
  notSpaceBar: 'Press on the space bar at the middle bottom of your keyboard to finalize this chapter.'
}

var chaptTwo = {
  one: 'In Chapter 2, We will teach you how to place your right hand on the keyboard. Find the other keyboard bump, the bump on the most right, and press on it. ',
  two: "Nice. You have found the 'J' key on your keyboard. Keep your right index finger on it and place your middle finger on the key beside it. Press on it. ",
  three: "Great! You have pressed on the 'K' key. Now put your fourth finger on the key beside 'K' and press on it.",
  four: "Sweet! That is the 'L' key of the keyboard. Now you can rest your pinky finger beside 'L' and press on the key. ",
  five: 'Awesome! Now that is the semicolon on your keyboard. Finally rest your right thumb on the space bar below and press on it. ',
  six: 'Perfect! Your right hand is now in the correct position for the right homerow keys! The next chapter will refresh your memory on the home row keys.',
  next: 'Press on the right arrow key to go to Chapter 2. Press on the up arrow key to go back to the contents page. Or press on the escape key on the top left of your keyboard to redo this chapter again.'
}

var chaptTwoMistakes = {
  f: "This is 'F' at the left key bump. Move your finger 3 keys to the right to find the right key bump.",
  notJ: 'Try to find the key with the right bump again.',
  notK: 'Try again. Remember to keep your right index finger on the right key bump and place your middle finger beside that key.',
  notL: "Press on the key to the right of your middle finger beside 'K'",
  notSemiColon: 'Try again. Just place your pinky beside your fourth finger.',
  notSpaceBar: 'Press on the space bar at the middle bottom of your keyboard to finalize this chapter.'
}

var chaptThree = {
  one: "Chapter 3. Place both hands on the homerow keys before we start this lesson. Remember to position your index fingers on the 'F' and the 'J' keys which have bumps on them. Let's refresh our memories. Let's start with the 'F' key. Press on it.",
  two: "Great! Now, press on the 'J' key.",
  three: "Awesome, now press on the 'D' key.",
  four: "Cool, now press on the 'K' key.",
  five: "Great, now press on the 'S' key.",
  six: "Fabulous, now press on the 'L' key.",
  seven: "Wonderful, now press on the 'A' key.",
  eight: 'Nice, now press on the semicolon key.',
  nine: 'Fantastic! Now rest both your left and right thumbs on the space bar below. Press on the space bar.',
  ten: "Excellent! You have mastered placing your fingers at the homerow keys at the correct position. It’s called the homerow because it should be the place where your fingers feel at home when typing and all the other keys are a short distance away. Let's be adventurous. Now move your left index or second finger 1 key to the right and press on it.",
  eleven: "Outstanding! You have pressed on 'G' on your keyboard. Now shift your right index or second finger 1 key to the left. Press on it.",
  twelve: "Amazing! As long as you place your index fingers on the bumps where 'F' and 'J' are, you will never get lost. You are ready to learn the top row keys.",
  next: "Press on the right arrow key to go to Chapter 2. Press on the up arrow key to go back to the contents page. Or press on the escape key on the top left of your keyboard to redo this chapter again."
}

var chaptThreeMistakes = {
  j: "This is 'J'. Move your finger 3 keys to the left to find 'F'.",
  notF: 'Try to find the left bump again.',
  f: "This is 'F'. Move your finger 3 keys to the right to find 'J'.",
  notJ: 'Try to find the right bump again.',
  notD: "'D' is the letter beside your left index finger.",
  notK: "'K' is the key beside your right index finger.",
  notS: "'S' is the key beside your left middle finger.",
  notL: "Your right hand fourth finger should be on the 'L' key.",
  notA: "The 'A' key should be pressed by your left pinky.",
  notSemiColon: 'The semicolon key should be pressed by your right pinky.',
  notSpaceBar: 'The space bar is at the bottom middle part of your keyboard.',
  notG: 'Remember that your left index finger should be on the left key bump. Find the key to the right of that bumped key and press on it.',
  notH: 'Your right index finger should be on the right keyboard bump. Find the key to the left of that and press on it.'
}

var chaptFour = {
  one: 'Chapter 4. We will learn the top alphabet keys of your keyboard starting from the left. First, place both hands on the homerow keys and press on the space bar to begin.',
  two: "Wonderful! Lets start! Did you know that the keyboard you have in front of you is called the QWERTY keyboard because of the 1st 6 keys on the top left alphabet row of the keyboard. This means that the very 1st letter above your pinky is the 'Q' key. Go ahead and press it.",
  three: "Wonderful! You have found the 'Q' of your QWERTY keyboard. Bring your pinky back to your 'A' and Now lift your fourth finger to the key above to get 'W'.",
  four: "Fantastic! This is the 'W' key of your keyboard. Bring your fourth finger back to 'S'. Now shift your middle finger above your 'D' key and press on it. This will be the 'E' of your QWERTY keyboard.",
  five: "Excellent Job! You got 'E' on your keyboard. Now with your index finger, press the key next to the 'E' key to get the 'R' of your QWERTY keyboard.",
  six: "Great job! You have found 'R'! Keep your finger on 'R', shift 1 key to the right and press on it.",
  seven: "Awesome! That is the 'T' key that you just entered! Now, the 'Y' of your QWERTY keyboard is beside 'T'. You will have to press 'Y' with your right index finger because it is too far from your left index finger. Shift your right index finger one key to the left, and shift it again to the top. Press on it.",
  eight: 'Outstanding! You have now completed this chapter learning the top row of your keyboard spelling out QWERTY. In the next chapter, you will learn the remaining right side of your top row keys.',
  next: 'Press on the right arrow key to go to Chapter 5. Press on the up arrow key to go back to the contents page. Or press on the escape key on the top left of your keyboard to redo this chapter again.'
}

var chaptFourMistakes = {
  notSpaceBar: 'Press on the space bar which is at your middle bottom of your keyboard to start the lesson.',
  tab: 'This is your TAB key. This creates space before a paragraph. Shift your pinky 1 key to the right from the TAB key and press it.',
  a: "This is your homerow 'A key. Move your pinky 1 key above to get that 'Q' key.",
  capslock: "This is your CAPS Locks key. Shift your pinky above the 'A' key to get the 'Q'.",
  w: "This is 'W' which should be pressed by your fourth finger. Use your left pinky to press on 1 key to the left.",
  notQ: "Try to find the 'Q' key again with your pinky. It is above your 'A'",
  q: "This is your 'Q' key. You should be pressing this with your pinky finger. 'W' is 1 key to the right of this key. Press it with your fourth finger.",
  e: "This is the 'E' on your keyboard. You should be pressing this with your middle finger. Put your fourth finger 1 key to your left to get the 'W'.",
  notW: "Try to find 'W' again with your fourth finger. It is above 'S'.",
  wForE: "This is 'W'. 'E' is 1 key to the right of this key. Use your middle finger to press on 'E'.",
  r: "This is 'R'. The 'E' key is 1 key to the left. Use your middle finger to press on it.",
  notE: "Try again. 'E' is the key above your 'D' key.",
  eForR: "You have pressed the 'E' key. 'R' is one key to the right of this key. Use your index finger to press on it.",
  t: "This is the 'T' on your keyboard. Use your index finger to press on 1 key to the left for 'R'.",
  notR: "Please try again. 'R' is above your 'F' key.",
  rForT: "'T' is one key to the right of this key.",
  g: "This is 'G'. 'T' is just right above this key.",
  notT: "Try to find 'T' again.",
  u: "This is 'U'. Shift one key to the left and press it with your right index finger.",
  h: "This is the 'H' key. The 'Y' is right above this key.",
  tForY: "This is 'T'. And you should press this with your left index finger. 'Y' is one key to the right of this key. Press it with your right index finger.",
  notY: "Your right hand should be on the homerow keys. Try to find 'Y' again with your right index finger.'"
}

var chaptFive = {
  one: "Chapter 5. Now that we have learnt the first 6 alphabets above your homerow keys spelling out QWERTY, we will continue to learn the other 4 top row keys above your right hand. Let's place both our hands on the homerow keys and press on the space bar to continue.",
  two: "Great let's start! With your right hand on the homerow keys, shift your right index finger 1 key up from the bump. You will find the 'U' key there. Press on it.",
  three: "Wonderful! You can now try the key beside 'U' and use your middle finger to press on 'I'.",
  four: "Fabulous! You have found 'I'! Now put your middle finger back on 'K'. Shift your right fourth finger up to the 'O' key and press on it.",
  five: "Awesomeness! You have found 'O'. Use your pinky to press on the key above your semicolon. That will be the 'P' key.",
  six: 'Outstanding! You have now covered the entire top row of your alphabet keys. In the next chapter, we will revise the homerow and top row keys.',
  next: "Press on the right arrow key to go to Chapter 6. Press on the up arrow key to go back to the contents page. Or press on the escape key on the top left of your keyboard to redo this chapter again."
}

var chaptFiveMistakes = {
  notSpaceBar: 'Press on the space bar which is at your middle bottom of your keyboard to start the lesson.',
  y: "This is the 'Y' key. 'U' is 1 key to the right of this key.",
  i: "You have pressed on 'I' on your keyboard. This key should be pressed by your middle finger. Press on the key to the left for 'U'.",
  h: "'H'. Your 'U' key is just above your 'J' key.",
  notU: "Find 'U' again just above your 'J' key.",
  u: "You have just pressed 'U' earlier on with your index finger. 'I' is just 1 key to the right of this key.",
  k: "'K' is on your homerow. Just shift your middle finger one key up to get 'I'.",
  o: "You have pressed on 'O' which should be pressed by your fourth finger. Try 1 key to the left and use your middle finger to press on it.",
  notI: "Try again to find 'I' on your keyboard. It is just above 'K'.",
  l: "This is 'L'. Shift your fourth finger one key up to get 'O'.",
  iForO: "You just entered 'I' on your keyboard. 'O' is just 1 key to the right of this key.",
  p: "You just pressed on 'P' which should be pressed by your right pinky. 'O' is just 1 key to the left of this key.",
  notO: "'O' is above your homerow 'L' key. Try again.",
  semicolon: "This is semicolon. Move your pinky finger one key above this and press on it for 'P'.",
  quote: 'This is your single quote. Try the key above your semicolon.',
  squareBracket: 'You have pressed the opening square bracket. Press on 1 key to the left of this key.',
  notP: "Shift your pinky 1 key up from the homerow to find 'P'."
}

var chaptSix = {
  one: "Chapter 6. Now that we have learnt both the homerow and the top row alphabet keys, let's revise these keys! We will tell you which alphabet to press on. Let's begin! Press on 'F'!",
  two: "Great! Now press on 'J'.",
  three: "Fantastic. Now press on the 'R' key.",
  four: "Excellent. Press on the 'U' key on your keyboard.",
  five: "Fantastic. Now let's press on 'D'.",
  six: "Awesome. Let's press on the 'K' key now.",
  seven: "Fabulous. How about the 'E' key?",
  eight: "Amazing! Now press on the 'I' key.",
  nine: "Great Job! Let's press on the 'S' key now.",
  ten: "Wonderful! Press on the 'L' key now.",
  eleven: "Brilliant! The next key to press on is the 'W' key.",
  twelve: "Incredible! Now let's press on the 'O' key.",
  thirteen: "Terrific! Let's get the 'A' key now.",
  fourteen: "Great Job! Now let's press on the semicolon.",
  fifteen: "Outstanding! Let's get the 'Q' key now!",
  sixteen: "Brilliant Work! Now press on the 'P' key",
  seventeen: "Phenomenal! Now let's try the 'G' key.",
  eighteen: "Excellent! Press on the 'H' key.",
  nineteen: "Incredible Memory! Let's try the 'T' key now.",
  twenty: "Marvelous! Last letter! Press on the 'Y' key.",
  twentyOne: "Excellent Work! You have mastered both the homerow and the top row alphabet keys! You are now ready for the bottom row alphabet keys.",
  next: "Press on the right arrow key to go to Chapter 7. Or press on the up arrow key to go back to the contents page. Or press on the escape key on the top left of your keyboard to redo this chapter again."
}

var chaptSixMistakes = {
  notF: "Try again. Find your left key bump and press on it.",
  notJ: "Try again. Find your right key bump and press on it.",
  notR: "Try again. 'R' is above your 'F key.",
  notU: "Try again. 'U' is above your 'J' key.",
  notD: "Try again. 'D' is beside your 'F' key.",
  notK: "Try again. 'K' is beside your 'J' key.",
  notE: "Try again. 'E' is above your 'D' key.",
  notI: "Try again. 'I' is above your 'K' key.",
  notS: "Try again. 'S' is beside your 'D' key.",
  notL: "Try again. 'L' is beside your 'K' key.",
  notW: "Try again. 'W' is above your 'S' key.",
  notO: "Try again. 'O' is above your 'L' key.",
  notA: "Try again. 'A' is beside your 'S' key.",
  notSemicolon: "Try again. The semicolon is beside your 'L' key.",
  notQ: "Try again. 'Q' is above your 'A' key.",
  notP: "Try again. 'P' is above your semicolon.",
  notG: "Try again. 'G' is beside 'F'.",
  notH: "Try again. 'H' is beside 'J'.",
  notT: "Try again. 'T' is above 'G'.",
  notY:"Try again. 'Y' is above 'H'."
}

var chaptSeven = {
  one: "Chapter 7. You are now ready to learn the alphabets below your homerow keys. First place both hands on the homerow keys and press on the space bar to begin.",
  two: "Excellent. Let's begin. with your left index finger on the 'F' key, shift it down to keys below and you will find yourself in between 2 keys. Just move your index finger to the key on the right. This is the 'V' key. 'V' for van. Press on it. ",
  three: "Fantastic. Now, bring your index finger back to 'F'. With your left middle finger, bring it down to the row below the home keys. You will also find yourself in between 2 keys. Now, shift your middle finger to the key on the right. This is the 'C' key on your keyboard. Press on it.",
  four: "Great Job! Now bring your middle finger back to your homerow 'D' key. With your fourth finger, do the same. Bring your finger down to the row below, and press on the key to the right. This is 'X' on your keyboard.",
  five: "Outstanding. Finally with your left pinky, bring it down 1 row and press on the key to the right. This is your 'Z' key.",
  next: "Great now proceed to Chapter 8 to learn the right hand bottom alphabet keys. Press on the right arrow key. Or press on the up arrow key to go back to the contents page. Or press on the escape key on the top left of your keyboard to redo this chapter again."
}

var chaptSevenMistakes = {
  notSpaceBar: 'Press on the space bar which is at your middle bottom of your keyboard to start the lesson.',
  cForV: "This is your 'C' key. This key should be pressed by your middle finger. Shift 1 key to the right and press on it.",
  notV: "Try to find 'V' again. Shift your left index finger 1 key down from 'F'. You will find your finger in between 2 keys. Press on the key to the right.",
  xForC: "This is your 'X' key. This key should be pressed by your fourth finger. Shift 1 key to the right and press on it.",
  notC: "Try to find 'C' again. Shift your left middle finger 1 key down from 'D'. You will find your finger in between 2 keys. Press on the key to the right.",
  zForX: "This is your 'Z' key. This key should be pressed by your pinky finger. Shift 1 key to the right and press on it.",
  notX: "Try to find 'X' again. Shift your left fourth finger 1 key down from 'S'. You will find your finger in between 2 keys. Press on the key to the right.",
  shiftForZ: "This is your shift key. Bring your pinky 1 key to the right and press on it.",
  notZ: "Try to find 'Z' again. Shift your left pinky finger 1 key down from 'A'. You will find your finger in between 2 keys. Press on the key to the right."
}

var chaptEight = {
  one: "Chapter 8. Let's learn the alphabets on the row below your right homerow keys. First place both hands on the homerow keys and press on the space bar to begin.",
  two: "Great let's begin! With your right index finger on the 'J' key, shift it down to keys below and you will find yourself in between 2 keys. Just move your index finger to the key on the left. This is the 'AN' key. Press on it.",
  three: "Good job! Now keep your index finger on 'AN' and shift 1 key to the right. This is your 'M' key. Press on it.",
  four: "Fabulous! Bring your index finger back to 'J'. Remember that both 'AN' and 'M' are pressed by your right index finger. Now let's bring your right middle finger down 1 row. You will be placed in between 2 keys. Press the key on your right to get the comma.",
  five: "Great job! Bring your middle finger back up to the 'K' key. Now shift your fourth finger down 1 row, and you will be positioned between 2 keys. Press on the key to the right. This is the period punctuation.",
  six: "Fantastic! You are now in the punctuation zone. Bring your fourth finger back to your 'L' key. Bring your pinky finger down 1 row and press on the key to the right. This is your slash key.",
  seven: "Excellent! Bring your pinky back up to the semicolon and let's try 1 more key. With both hands on your homerow keys, slide both your left and right index fingers down 1 row. Meet both fingers to the center of that row. This 1 key is the 'B' of your keyboard. Press on it.",
  eight: "Awesomeness! You have learnt all the alphabets on your keyboard!",
  next: "Press on the right arrow key. Or press on the up arrow key to go back to the contents page. Or press on the escape key on the top left of your keyboard to redo this chapter again."
}

var chaptEightMistakes = {
  notSpaceBar: 'Press on the space bar which is at your middle bottom of your keyboard to start the lesson.',
  mForN: "You have pressed on 'M'. Bring your finger 1 key to the left and press on it for the 'AN' key.",
  notN: "Try to find 'AN' again. Shift your right index finger 1 key down from 'J'. You will find your finger in between 2 keys. Press on the key to the left.",
  nForM: "This is your 'AN' key. For 'M', bring your index finger 1 key to the right of this key and press on it.",
  notM: "Try to find 'M' again. Shift your right index finger 1 key down from 'J'. You will find your finger in between 2 keys. Press on the key to the right.",
  mForComma: "This is the 'M' key. Press on the key to the right of 'M' to get the comma key.",
  notComma: "Try again. Shift your right middle finger 1 key down from 'K'. You will find your finger in between 2 keys. Press on the key to the right.",
  commaForDot: "This is the comma. Press on the key to the right to get the dot or period punctuation.",
  notDot: "Try again. Shift your right fourth finger 1 key straight down from 'L'. You will find your finger in between 2 keys. Press on the key to the right.",
  dotForSlash: "This is your dot. Bring your left pinky 1 key to the right to get the slash mark.",
  notSlash: "Try to find the slash again. Shift your right pinky finger 1 key straight down from the semicolon. You will find your finger in between 2 keys. Press on the key to the right.",
  vForB: "This is your 'V' key. Shift your finger 1 key to the right for 'B'. Press on it.",
  nForB: "This is your 'N' key. Shift your finger 1 key to the left for 'B'. Press on it.",
  notB: "Try again. Let's try another method to find the 'B' key. With both your index fingers on the bumps at the homerow keys, meet your index fingers together in the middle on the same row and shift both your fingers 1 row down. Your fingers will both fall on 'B'. Press on it."

}
