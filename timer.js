$(document).ready(function () {
    const countDownDateObject = new Date(),
        hoursDiv = document.querySelector('#hours'),
        minutesDiv = document.querySelector('#minutes'),
        secondsDiv = document.querySelector('#seconds');

    calculateNextHour(countDownDateObject)

    const countDownDate = countDownDateObject.getTime();

    const x = setInterval(moveTimer, 1000);

    moveTimer()

    function moveTimer() {
        const now = new Date().getTime(),
            distance = countDownDate - now,
            hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds = Math.floor((distance % (1000 * 60)) / 1000);

        updateTimer(hours, minutes, seconds);

        if (distance <= 1000) {
            clearInterval(x);
        }
    }

    function calculateNextHour(date) {

        date.setHours(date.getHours() + 1);
        date.setMinutes(0, 0, 0);
    }


    function padWithZeroIfNeeded(value) {
        const pad = value.toString().length > 1 ? '' : '0';

        return pad + value;
    }

    function updateTimer(hours, minutes, seconds) {
        hoursDiv.innerHTML = padWithZeroIfNeeded(hours);
        minutesDiv.innerHTML = padWithZeroIfNeeded(minutes);
        secondsDiv.innerHTML = padWithZeroIfNeeded(seconds);
    }
});