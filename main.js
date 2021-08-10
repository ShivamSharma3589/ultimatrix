const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const z = ["AM", "PM"];

let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ms = document.getElementById("ms");
let zone = document.getElementById('zone');
let date = document.getElementById("date");
let myAudio = document.getElementById("myAudio");
let clock = document.getElementById("clock");
let dateObj;

let des = document.getElementById('des');
let vis = document.getElementById('vis');

window.onload = () => {
    let interval = setInterval(() => {
        dateObj = new Date();
        hr.innerHTML = addZero(hours(dateObj.getHours()));
        min.innerHTML = addZero(dateObj.getMinutes());
        sec.innerHTML = addZero(dateObj.getSeconds());
        ms.innerHTML = ":" + addZero(((dateObj.getMilliseconds()).toString()).slice(0, 2));
        zone.innerHTML = z[meridian(dateObj.getHours())];
        date.innerHTML = day[dateObj.getDay()] + ", " + month[dateObj.getMonth()] + " " + addZero(dateObj.getDate()) + " " + dateObj.getFullYear();
    }, 10)
}
function addZero(value) {
    if (value > 9) {
        return value;
    } if (value == undefined) {
        return 12;
    }
    return "0" + value;
}
function hours(value) {
    if (value > 12) {
        return value - 12;
    }
    return value;
}
function meridian(value) {
    if (value > 12) {
        return 1;
    }
    return 0;
}
clock.addEventListener('click', () => {
    des.style.transform = 'rotate(180deg)';
    des.style.animationDuration = '0.5s';
    vis.style.opacity = '1';
    myAudio.play();
    setTimeout(() => {
        des.style.transform = 'rotate(0deg)';
        des.style.animationDuration = '0s';
        vis.style.opacity = '0';
    }, 5000);
});