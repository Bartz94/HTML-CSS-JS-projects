function init() {
    const rndColorBtn = document.querySelector('.color_button');
    const body = document.querySelector('body');
    const colorName = document.querySelector('.color_name')

    rndColorBtn.addEventListener('click', () => {
        const randomColor = '#' + Math.random().toString(16).slice(2, 8);
        body.style.backgroundColor = randomColor;
        console.log(randomColor)
        colorName.innerText = randomColor
    })
};

window.onload = init;