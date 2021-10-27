function init() {
    const vowelBtn = document.querySelector('button');
    const vowelInput = document.querySelector('input');
    const vowel = document.querySelector('#vowel');

    vowelBtn.addEventListener('click', () => {
        sentance = vowelInput.value;
        if (typeof sentance === 'string') {
            let vowelsCount = 0;
            let string = sentance.toString();

            for (let i = 0; i <= string.length - 1; i++) {
                if (string.charAt(i) == "a" || string.charAt(i) == "ą" || string.charAt(i) == "e" || string.charAt(i) == "ę" ||
                    string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u" || string.charAt(i) == "ó"
                    || string.charAt(i) == "y") {
                    vowelsCount += 1;
                }
            }
            vowel.innerHTML = vowelsCount;
        }
        else {
            vowel.innerHTML = 'That is not a sentance';
        }

    })

};

window.onload = init;