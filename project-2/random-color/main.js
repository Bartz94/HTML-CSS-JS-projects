function init() {
    const hexColorButton = document.querySelector('.hex_color_button');
    const rgbColorButton = document.querySelector('.rgb_color_button');
    const body = document.querySelector('body');
    const colorName = document.querySelector('.color_name')

    hexColorButton.addEventListener('click', () => {
        const randomColor = '#' + Math.random().toString(16).slice(2, 8);
        body.style.backgroundColor = randomColor;
        console.log(randomColor)
        colorName.innerText = 'Hex Code: ' + randomColor
    })
    rgbColorButton.addEventListener('click', () => {
        const randomColor = '#' + Math.random().toString(16).slice(2, 8);
        body.style.backgroundColor = randomColor;
        console.log(randomColor)
        // colorName.innerText = 'Hex Code: ' + randomColor
        colorName.innerText = 'RGB Code: ' + body.style.backgroundColor
    })
};

window.onload = init;