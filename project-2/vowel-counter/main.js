function init() {
    const vowelBtn = document.querySelector('button');
    const vowelInput = document.querySelector('textarea');
    const vowel = document.querySelector('#vowel');

    vowelBtn.addEventListener('click', () => {
        sentance = vowelInput.value;
        let vowelsCount = 0;
        let string = sentance.toString();

        for (let i = 0; i <= string.length; i++) {
            if (string.charAt(i) == "a" || string.charAt(i) == "A" || string.charAt(i) == "ą" || string.charAt(i) == "Ą"
                || string.charAt(i) == "e" || string.charAt(i) == "E" || string.charAt(i) == "ę" || string.charAt(i) == "Ę"
                || string.charAt(i) == "i" || string.charAt(i) == "I" || string.charAt(i) == "o" || string.charAt(i) == "O"
                || string.charAt(i) == "u" || string.charAt(i) == "U" || string.charAt(i) == "ó" || string.charAt(i) == "Ó"
                || string.charAt(i) == "y" || string.charAt(i) == "Y") {
                vowelsCount++;
            }
        }
        vowel.innerHTML = vowelsCount;
    })
};

window.onload = init;