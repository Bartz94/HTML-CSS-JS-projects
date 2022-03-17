function init() {
    setInterval(function () {
        const dateGoal = new Date("Dec 25, 2021").getTime();
        let dateCurrent = new Date().getTime();
        let dateDifference = dateGoal - dateCurrent;

        const dayText = document.querySelector('#day');
        const hourText = document.querySelector('#hour');
        const minuteText = document.querySelector('#minute');
        const secondText = document.querySelector('#second');

        let dayDate = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
        let hourDate = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minuteDate = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
        let secondDate = Math.floor((dateDifference % (1000 * 60)) / 1000);

        dayText.textContent = dayDate;
        hourText.textContent = hourDate;
        minuteText.textContent = minuteDate;
        secondText.textContent = secondDate;

        if (dateDifference < 0) {
            clearInterval();
            dayText.textContent = 'FINISH';
            hourText.textContent = 'FINISH';
            minuteText.textContent = 'FINISH';
            secondText.textContent = 'FINISH';
        };
    }, 1000);

    setInterval(newSnowflake, 500);
    function newSnowflake() {
        const snow_flake = document.createElement('i');
        snow_flake.classList.add('snowflake');
        snow_flake.innerHTML = '❆';
        snow_flake.style.left = Math.random() * window.innerWidth + 'px';
        snow_flake.style.animationDuration = Math.random() * 2 + 4 + 's';
        snow_flake.style.opacity = Math.random();
        snow_flake.style.fontSize = Math.random() * 30 + 10 + 'px';

        document.body.appendChild(snow_flake);

        setTimeout(() => {
            snow_flake.remove();
        }, 5000)
    }

};

window.onload = init;