const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
resetButton = document.querySelector(".reset-button");
selectAll = document.querySelector(".select-button");
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

function resetCheckboxes() {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
}

function handleReset() {
  setTimeout(resetCheckboxes, 200);
}

function handleSelect() {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
resetButton.addEventListener("click", handleReset);
selectAll.addEventListener("click", handleSelect);
