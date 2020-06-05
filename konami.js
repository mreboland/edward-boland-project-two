function onKonamiCode(cb) {
    var input = '';
    var key = '38384040373937396665';
    document.addEventListener('keydown', function (e) {
        input += ("" + e.keyCode);
        if (input === key) {
            return cb();
        }
        if (!key.indexOf(input)) return;
        input = ("" + e.keyCode);
    });
}

onKonamiCode(function () {

const konami = `
<iframe width="1600" height="743"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1">
    </iframe>  
`
$(".background").append(konami);

})


// a key map of allowed keys
const allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

// the 'official' Konami Code sequence
const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
const konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function (e) {
    // get the value of the key code from the key map
    const key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    const requiredKey = konamiCode[konamiCodePosition];

    // compare the key with the required key
    if (key == requiredKey) {

        // move to the next key in the konami code sequence
        konamiCodePosition++;

        // if the last key is reached, activate cheats
        if (konamiCodePosition == konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function activateCheats() {
    document.body.style.backgroundImage = "url('images/cheatBackground.png')";

    const audio = new Audio('audio/pling.mp3');
    audio.play();

    alert("cheats activated");
}