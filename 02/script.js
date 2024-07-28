// Get properties by querySelector 
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Function to create Date Element 
function setDate() {
    const now = new Date();
    
    // Get the seconds minutes and hours
    const seconds = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    // Calculate what degree the time would be 
    const secondsDegrees = calcDegree(seconds, 60);
    const minuteDegreees = calcDegree(minute, 60);
    const hourDegrees = calcDegree(hour, 12);

    // transform the hands by rotating them 
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minsHand.style.transform = `rotate(${minuteDegreees}deg)`
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// calculate the degrees each time represents 
function calcDegree (unit, totalUnits) {
    return ((unit / totalUnits) * 360) + 90;
}

// run the function every second 
setInterval(setDate, 1000);
setDate();