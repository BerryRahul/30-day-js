const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = [];

function addItem(e) {
  // does not refresh page on every submit
  // form reloads data on every submit
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>  
            <label for="">${plate.text}</label>
        </li>
    `;
    })
    .join("");
}
addItems.addEventListener("submit", addItem);
