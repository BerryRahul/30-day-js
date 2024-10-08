//contenteditable tag for html allows client to edit text in the element

const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100;

function shadow(e) {
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;

  // one line ESX
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  // if the element the mouse is currently on is different then the element 
  // that triggered the event listener 
  // this allows that the x and y value are consistent with the page
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 red,
  ${xWalk * -1}px ${yWalk}px 0 blue,
  ${yWalk}px ${xWalk * -1}px 0 green, 
  ${yWalk * -1}px ${xWalk}px 0 pink
  `;
}

hero.addEventListener("mousemove", shadow);
