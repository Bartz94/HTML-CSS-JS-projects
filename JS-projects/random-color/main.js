function init() {
    // const hexColorButton = document.querySelector('.hex_color_button');
    // const rgbColorButton = document.querySelector('.rgb_color_button');
    // copyButton = document.querySelector('.copy_button')
    // const body = document.querySelector('body');
    // const colorName = document.querySelector('.color_name')

    // hexColorButton.addEventListener('click', () => {
    //     const randomColor = '#' + Math.random().toString(16).slice(2, 8);
    //     body.style.backgroundColor = randomColor;
    //     colorName.innerText = randomColor;
    // })
    // rgbColorButton.addEventListener('click', () => {
    //     const randomColor = '#' + Math.random().toString(16).slice(2, 8);
    //     body.style.backgroundColor = randomColor;
    //     colorName.innerText = body.style.backgroundColor;
    // })

    // copyButton.addEventListener('click', function copy() {
    //     const temp = document.createElement("textarea");
    //     document.body.appendChild(temp);
    //     temp.value = colorName.innerText
    //     temp.select();
    //     document.execCommand("copy");
    //     document.body.removeChild(temp);
    // })

    const colorBox = document.querySelectorAll('.color_box h2');
    const colorHex = document.querySelectorAll('.color_hex');
    const generateButton = document.querySelector('.generate_button');

    console.log(colorBox)

    generateButton.addEventListener('click', () => {
        colorBox.forEach((color) => {
            let randomHexColor = '#' + Math.random().toString(16).slice(2, 8);
            color.style.backgroundColor = randomHexColor;
            color.innerHTML = randomHexColor
        });
    });
};
window.onload = init;