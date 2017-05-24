

 <div class="container">
 	<div class="row">
 		<div class="col-md-12">
 			<div class="display">
 				<div class="wrap" aria-live="polite" aria-atomic="true">
 			     <p class="keycode-display"></p>
 			     <p class="text-display">press any key to get the JavaScript event keycode</p>
 				 <input type="hidden" id="keyDown" readonly /><br/>
 				 <input type="hidden" id="keyPress" readonly />
 				</div>
 		</div>
 	</div>
 </div>

$(document).ready(function(){
	var $kp = $('#keyPress');
    var $kd = $('#keyDown');
    var $ku = $('#keyUp');

    var _to_ascii = {
        '188': '44',
        '109': '45',
        '190': '46',
        '191': '47',
        '192': '96',
        '220': '92',
        '222': '39',
        '221': '93',
        '219': '91',
        '173': '45',
        '187': '61', //IE Key codes
        '186': '59', //IE Key codes
        '189': '45'  //IE Key codes
    }

    var shiftUps = {
        "96": "~",
        "49": "!",
        "50": "@",
        "51": "#",
        "52": "$",
        "53": "%",
        "54": "^",
        "55": "&",
        "56": "*",
        "57": "(",
        "48": ")",
        "45": "_",
        "61": "+",
        "91": "{",
        "93": "}",
        "92": "|",
        "59": ":",
        "39": "\"",
        "44": "<",
        "46": ">",
        "47": "?"
    };

    $(document).on('keydown', function(e) {
        var c = e.which;

        if (_to_ascii.hasOwnProperty(c)) {
            c = _to_ascii[c];
        }

		var keyCode = c;

        if (!e.shiftKey && (c >= 65 && c <= 90)) {
            c = String.fromCharCode(c + 32);
            u = 'and '+keyCode;
            responsiveVoice.speak(c, "US English Female")
        } else if (e.shiftKey && shiftUps.hasOwnProperty(c)) {
            c = shiftUps[c];
        	u = 'and '+keyCode;
          responsiveVoice.speak(c, "US English Female")
        } else {
            c = String.fromCharCode(c);
        	u = '+ CAPITAL';
          responsiveVoice.speak("Capital " + c, "US English Female")
        }
        $kd.val(c+' '+u);
        $(".keycode-display").text(c+' '+u);
    }).on('keypress', function(e) {
    	$(".keycode-display").text(String.fromCharCode(e.which)+' '+u);
        $kp.val(String.fromCharCode(e.which)+' '+u);
    });
});
