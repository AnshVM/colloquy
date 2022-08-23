// Set the date we're counting down to
var countDownDate = new Date("Aug 25, 2022 18:00:00").getTime();

const addZero = (num) => num < 10 ? "0".concat(num) : num;

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    if (distance < 0) {
        hours = 0;
        minutes = 0;
        seconds = 0;
    }
    document.getElementById('hour-count').innerHTML = addZero(hours);
    document.getElementById('min-count').innerHTML = addZero(minutes);
    document.getElementById('sec-count').innerHTML = addZero(seconds);


    if (distance < 0) clearInterval(x);

}, 1000);