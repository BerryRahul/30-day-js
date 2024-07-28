const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
  
    const seconds = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const secondsDegrees = calcDegree(seconds, 60);
    const minuteDegreees = calcDegree(minute, 60);
    const hourDegrees = calcDegree(hour, 12);

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minsHand.style.transform = `rotate(${minuteDegreees}deg)`
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function calcDegree (unit, totalUnits) {
    return ((unit / totalUnits) * 360) + 90;
}

setInterval(setDate, 1000);
setDate();