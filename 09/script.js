const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
const good = "good";
console.log(`Hello I am ${good} today`);

// Styled can add basic css font styles in console 
console.log("%c large text wow", "font-size:50px; background:red;");

// warning!
console.warn("warning");

// Error :|
console.error("error");

// Info
console.info("crocs eat 4-5 people per year");

// Testing
// Can also test functionality of js elements on your page with console unit testing 
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "that is wrong");
console.assert(1 === 2, "that is wrong");

// clearing
console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  // default will be collapsed 
  //console.groupCollapsed();
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting - counts how many time any particular command was sent 
console.count("Wes");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
