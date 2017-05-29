var intro = {
  title: "Welcome to the TouchType website",
  one: "You will learn how to navigate through your keyboard in this website and we will guide you with audio instructions. You can pause and resume the audio at anytime by clicking your mouse. Find the bottom right key of your keyboard and press on it to continue. It is your right arrow key.",
  none: "Sorry your browser does not have voice support features"
}

var contents = {
  intro: "You are now at the TouchType contents page",
  one: "For your audio keyboard, press on the space bar.",
  two: "Or press on the right arrow key to go to the 1st chapter.",
  three: "The space bar is the longest key at the middle most bottom of your keyboard."
}

var keyboardIntro = {
  intro: "Welcome to your Audio Keyboard.",
  one: "Enter any key on your keyboard for an audio guide.",
  two: "Or use your mouse to click anywhere on the site to go back to your contents page."
}

var keyCodes = {
  3 : "break",
  8 : "delete",
  9 : "tab",
  12 : "clear",
  13 : "enter",
  16 : "shift",
  17 : "control",
  18 : "option",
  19 : "break",
  20 : "caps lock",
  27 : "escape",
  32 : "spacebar",
  33 : "page up",
  34 : "page down",
  35 : "end",
  36 : "home ",
  37 : "left arrow ",
  38 : "up arrow ",
  39 : "right arrow",
  40 : "down arrow ",
  41 : "select",
  42 : "print",
  43 : "execute",
  44 : "Print Screen",
  45 : "insert",
  46 : "delete",
  48 : "0",
  49 : "1",
  50 : "2",
  51 : "3",
  52 : "4",
  53 : "5",
  54 : "6",
  55 : "7",
  56 : "8",
  57 : "9",
  58 : ":",
  59 : "semicolon",
  60 : "<",
  61 : "equals (firefox)",
  63 : "ß",
  64 : "@ (firefox)",
  65 : "a",
  66 : "b",
  67 : "c",
  68 : "d",
  69 : "e",
  70 : "f",
  71 : "g",
  72 : "h",
  73 : "i",
  74 : "j",
  75 : "k",
  76 : "l",
  77 : "m",
  78 : "n",
  79 : "o",
  80 : "p",
  81 : "q",
  82 : "r",
  83 : "s",
  84 : "t",
  85 : "u",
  86 : "v",
  87 : "w",
  88 : "x",
  89 : "y",
  90 : "z",
  91 : "Windows Key or Left Command",
  92 : "right window key ",
  93 : "Windows Menu or Right Command",
  96 : "numpad 0 ",
  97 : "numpad 1 ",
  98 : "numpad 2 ",
  99 : "numpad 3 ",
  100 : "numpad 4 ",
  101 : "numpad 5 ",
  102 : "numpad 6 ",
  103 : "numpad 7 ",
  104 : "numpad 8 ",
  105 : "numpad 9 ",
  106 : "multiply ",
  107 : "add",
  108 : "numpad period",
  109 : "subtract ",
  110 : "decimal point",
  111 : "divide ",
  112 : "f1 ",
  113 : "f2 ",
  114 : "f3 ",
  115 : "f4 ",
  116 : "f5 ",
  117 : "f6 ",
  118 : "f7 ",
  119 : "f8 ",
  120 : "f9 ",
  121 : "f10",
  122 : "f11",
  123 : "f12",
  124 : "f13",
  125 : "f14",
  126 : "f15",
  127 : "f16",
  128 : "f17",
  129 : "f18",
  130 : "f19",
  131 : "f20",
  132 : "f21",
  133 : "f22",
  134 : "f23",
  135 : "f24",
  144 : "num lock ",
  145 : "scroll lock",
  160 : "^",
  161: '!',
  163 : "#",
  164: '$',
  165: 'ù',
  166 : "page backward",
  167 : "page forward",
  169 : "closing paren (AZERTY)",
  170: '*',
  171 : "~ + * key",
  173 : "minus (firefox), mute/unmute",
  174 : "decrease volume level",
  175 : "increase volume level",
  176 : "next",
  177 : "previous",
  178 : "stop",
  179 : "play/pause",
  180 : "e-mail",
  181 : "mute/unmute (firefox)",
  182 : "decrease volume level (firefox)",
  183 : "increase volume level (firefox)",
  186 : ";",
  187 : "=",
  188 : ",",
  189 : "-",
  190 : ".",
  191 : "/",
  192 : "grave accent",
  193 : "?, / or °",
  194 : "numpad period (chrome)",
  219 : "[",
  220 : "back slash",
  221 : "]",
  222 : "'",
  223 : "`",
  224 : "left or right ⌘ key (firefox)",
  225 : "altgr",
  226 : "< /git >",
  230 : "GNOME Compose Key",
  231 : "Rç",
  233 : "XF86Forward",
  234 : "XF86Back",
  255 : "toggle touchpad"
}

var shiftKeyCodes = {
  3 : "break",
  8 : "delete",
  9 : "tab",
  12 : "clear",
  13 : "enter",
  16 : "shift",
  17 : "control",
  18 : "alt",
  19 : "break",
  20 : "caps lock",
  27 : "escape",
  32 : "spacebar",
  33 : "page up",
  34 : "page down",
  35 : "end",
  36 : "home ",
  37 : "left arrow ",
  38 : "up arrow ",
  39 : "right arrow",
  40 : "down arrow ",
  41 : "select",
  42 : "print",
  43 : "execute",
  44 : "Print Screen",
  45 : "insert",
  46 : "delete",
  48 : ")",
  49 : "!",
  50 : "@",
  51 : "#",
  52 : "$",
  53 : "%",
  54 : "^",
  55 : "&",
  56 : "*",
  57 : "(",
  58 : ")",
  59 : "colon",
  60 : "<",
  61 : "equals (firefox)",
  63 : "ß",
  64 : "@ (firefox)",
  65 : "Capital A",
  66 : "Capital B",
  67 : "Capital C",
  68 : "Capital D",
  69 : "Capital E",
  70 : "Capital F",
  71 : "Capital G",
  72 : "Capital H",
  73 : "Capital I",
  74 : "Capital J",
  75 : "Capital K",
  76 : "Capital L",
  77 : "Capital M",
  78 : "Capital N",
  79 : "Capital O",
  80 : "Capital P",
  81 : "Capital Q",
  82 : "Capital R",
  83 : "Capital S",
  84 : "Capital T",
  85 : "Capital U",
  86 : "Capital V",
  87 : "Capital W",
  88 : "Capital X",
  89 : "Capital Y",
  90 : "Capital Z",
  160 : "^",
  161: '!',
  163 : "#",
  164: '$',
  165: 'ù',
  166 : "page backward",
  167 : "page forward",
  169 : "closing paren (AZERTY)",
  170: '*',
  171 : "~ + * key",
  173 : "minus (firefox), mute/unmute",
  174 : "decrease volume level",
  175 : "increase volume level",
  176 : "next",
  177 : "previous",
  178 : "stop",
  179 : "play/pause",
  180 : "e-mail",
  181 : "mute/unmute (firefox)",
  182 : "decrease volume level (firefox)",
  183 : "increase volume level (firefox)",
  186 : ":",
  187 : "+",
  188 : "<",
  189 : "-",
  190 : ">",
  191 : "?",
  192 : "curly wurly",
  193 : "?, / or °",
  194 : "numpad period (chrome)",
  219 : "{",
  220 : "pipe",
  221 : "}",
  222 : "Double Quote",
  223 : "`",
  224 : "left or right ⌘ key (firefox)",
  225 : "altgr",
  226 : "< /git >",
  230 : "GNOME Compose Key",
  231 : "Rç",
  233 : "XF86Forward",
  234 : "XF86Back",
  255 : "toggle touchpad"
}

var chaptOne = {
  title: "Chapter 1",
  one: "We will teach you how to place your left hand on the keyboard. ",
  two: "Feel around your keyboard, and see if you can find 2 keys with protruding bumps on them. ",
  three: "Now try searching for the keyboard bumps. ",
  four: "When you have found your keyboard bumps, put your left index finger on the key with the bump on the left and press on it. ",
  five: "Great Job! You have found the 'F' letter on your keyboard! Now rest your middle finger on the key beside the F key, and press on it. ",
  six: "Awesome! That is the 'D' letter. Now rest your fourth finger beside your middle finger, and press on it. ",
  seven: "Great! You have found the 'S' key. Now place your pinky finger on the key beside your fourth finger and press on it. ",
  eight: "Fantastic! That is the 'A' on your keyboard. Now rest your left thumb on the space bar below and press on it.",
  nine: "Perfect! Your left hand is now in the correct position for the left home row keys for touch typing! Chapter 2 will teach you the correct position for your right hand.",
  ten: "Press on the right arrow key to go to the next Chapter. Or press on the shift key above your right arrow key to go back to the contents page. "
}

var chaptTwo = {
  title: "Chapter 2",
  one: "We will teach you how to place your right hand on the keyboard. Find the other keyboard bump, the bump on the most right, and press on it. ",
  two: "Nice. You have found the 'J' key on your keyboard. Keep your right index finger on it and place your middle finger on the key beside it. Press on it. ",
  three: "Great! You have pressed on the 'K' key. Now put your fourth finger on the key beside 'K' and press on it.",
  four: "Sweet! That is the 'L' key of the keyboard. Now you can rest your pinky finger beside 'L' and press on the key. ",
  five: "Awesome! Now that is the semicolon on your keyboard. Finally rest your right thumb on the space bar below and press on it. ",
  six: "Perfect! Your right hand is now in the correct position for the right homerow keys! The next chapter will refresh your memory on the home row keys.",
  seven: "Press on the right arrow key to go to Chapter 3. Or press on the shift key above your right arrow key to go back to the contents page. "
}

var chaptThree = {
  title: "Chapter 3",
  one: "Place both hands on the homerow keys before we start this lesson. Remember to position your index fingers on the 'F' and the 'J' keys which have bumps on them. Let's refresh our memories. Let's start with the 'F' key. Press on it.",
  two: "Great! Now, press on the 'J' key.",
  three: "Awesome, now press on the 'D' key.",
  four: "Cool, now press on the 'K' key.",
  five: "Great, now press on the 'S' key.",
  six: "Fabulous, now press on the 'L' key.",
  seven: "Wonderful, now press on the 'A' key.",
  eight: "Nice, now press on the semicolon key.",
  nine: "Fantastic! Now rest both your left and right thumbs on the space bar below. Press on the space bar.",
  ten: "Excellent! You have mastered placing your fingers at the homerow keys at the correct position. It’s called the homerow because it should be the place where your fingers feel at home when typing and all the other keys are a short distance away. Let's be adventurous. Now move your left index or second finger 1 key to the right and press on it.",
  eleven: "Outstanding! You have pressed on 'G' on your keyboard. Now shift your right index or second finger 1 key to the left. Pres on it.",
  next: "Amazing! As long as you place your index fingers on the bumps where 'F' and 'J' are, you will never get lost. You are ready to learn the top row keys. Enter your right arrow key for the next chapter or the shift key to go back to the contents page."
}

var chaptFour = {
  title: "Chapter 4",
  one: "We will learn the top alphabet keys of your keyboard starting from the left. First, place both hands on the homerow keys and press on the space bar to begin.",
  two: "Wonderful! Lets start! Did you know that the keyboard you have in front of you is called the QWERTY keyboard because of the 1st 6 keys on the top left alphabet row of the keyboard. This means that the very 1st letter above your pinky is the 'Q' key. Go ahead and press it.",
  three: "Wonderful! You have found the 'Q' of your QWERTY keyboard. Bring your pinky back to your 'A' and Now lift your fourth finger to the key above to get that 'W' key.",
  four: "Fantastic! This is the 'W' key of your keyboard. Bring your fourth finger back to 'S'. Now shift your middle finger above your 'D' key and press on it. This will be the 'E' of your QWERTY keyboard.",
  five: "Excellent Job! You got 'E' on your keyboard. Now with your index finger, press the key next to the 'E' key to get the 'R' of your QWERTY keyboard.",
  six: "Great job! You have found 'R'! Keep your finger on 'R', shift 1 key to the right and press on it.",
  seven: "Awesome! That is the 'T' key that you just entered! Now, the 'Y' of your QWERTY keyboard is beside 'T'. You will have to press 'Y' with your right index finger because it is too far from your left index finger. Shift your right index finger one key to the left, and shift it again to the top. Press on it.",
  eight: "Outstanding! You have now completed this chapter learning the top row of your keyboard spelling out QWERTY. In the next chapter, you will learn the remaining right side of your top row keys.",
  next: "Press on the right arrow key to continue to the next chapter. Or the shift key above to go back to the contents page."
}

var chaptFive = {
  title: "Chapter 5",
  one: "Now that we have learnt the first 6 alphabets above your homerow keys spelling out QWERTY, we will continue to learn the other 4 top row keys above your right hand. Let's place both our hands on the homerow keys and press on the space bar to continue.",
  two: "Great let's start! With your right hand on the homerow keys, shift your right index finger 1 key up from the bump. You will find the 'U' key there. Press on it.",
  three: "Wonderful! You can now try the key beside 'U' and use your middle finger to press on 'I'.",
  four: "Fabulous! You have found 'I'! Now put your middle finger back on 'K'. Shift your right fourth finger up to the 'O' key and press on it.",
  five: "Awesomeness! You have found 'O'. Use your pinky to press on the key above your semicolon. That will be the 'P' key.",
  next: "Outstanding! You have now covered the entire top row of your alphabet keys. In the next chapter, we will revise the homerow and top row keys. Press on the right arrow to proceed."
}

var chaptSix = {
  title: "Chapter 6",
  one: "Now that we have learnt both the homerow and the top row alphabet keys, let's revise these keys! We will tell you which alphabet to press, and you can Press on 'F'.",
  two: "Great! Now press on 'J'.",
  three: "Fantastic. Now press on the 'R'."

}
