const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const body = document.querySelector('#body')
let intervalId = null;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//setting up for start button
start.addEventListener('click', function () {
    if (!intervalId) { // Check if intervalId is null (no interval running)
        intervalId = setInterval(function () {
            body.style.backgroundColor = getRandomColor();
        }, 1000);
    }
});
//setting up for stop button
stop.addEventListener('click', function () {

    if (intervalId) { // Check if intervalId is not null (an interval is running)
        clearInterval(intervalId); // Clear the interval using the stored interval ID
        intervalId = null; // Reset intervalId to null

    }
});
