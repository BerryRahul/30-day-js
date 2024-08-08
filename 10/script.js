const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
panel = document.querySelector(".inbox");
let lastChecked;

function handleCheck(e) {
  let inbetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inbetween = !inbetween;
      }

      if (inbetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

// fix this since cant select more then 2 boxes 
function resetCheckboxes() {
  let count = 0;
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      count++;
    }
  });
  checkboxes.forEach((checkbox) => {
    if (count > 2) {
      checkbox.checked = false;
    }
  });
}

function handleMouseDown() {
  setTimeout(resetCheckboxes, 1500);
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);

panel.addEventListener("mousedown", handleMouseDown);
