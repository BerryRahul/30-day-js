const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
  (data) => {
    speed.textContent = data.coords.speed;
    arrow.computedStyleMap.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    console.err(err);
    alert("Need Location Permisssions");
  }
);
