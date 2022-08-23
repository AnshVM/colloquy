// Set the date we're counting down to
var countDownDate = new Date("Aug 25, 2022 16:00:00").getTime();

const addZero = (num) => num < 10 ? "0".concat(num) : num;
// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    //   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    //   + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        hours = 0;
        minutes = 0;
        seconds = 0;
    }
    document.getElementById('hour-count').innerHTML = addZero(hours);
    document.getElementById('min-count').innerHTML = addZero(minutes);
    document.getElementById('sec-count').innerHTML = addZero(seconds);


    // If the count down is finished, write some text

    if (distance < 0) clearInterval(x);

}, 1000);