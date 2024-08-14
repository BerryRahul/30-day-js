// let age = 100;
// let age2 = age;
// age = 200;
// // console log gives 200 100

// let name = "cool";
// let name2 = name;
// // console log gives cool cool
// name = "cooler";
// // console log gives cooler cool

const players = ["wes", "Sarah", "Ryan", "Poppy"];

const team = players;
// console log gives same list
team[3] = "lux";
// this updates players as well
// team is a reference to players

// to make a copy
const team2 = players.slice();
// second way
const team3 = [].concat(players);
// another way  ES6 way with spread operator
const team4 = [...players];
// fourth way
const team5 = Array.from(players);

// Objects
const person = {
  name: "Lebron James",
  age: 80,
};

const captain = person;
captain.number = 99;

// to make correct copy
const cap2 = Object.assign({}, person, { number: 99 });
// in react
// const cap3 = { ...person };

const who = {
  name: "random",
  age: 100,
  social: {
    twitter: "@rand",
    facebook: "asdasdasd",
  },
};

const dev = Object.assign({}, who);
// this copy is only 1 level deep
// changin dev.social would change wes.social as well

// lazy way of deep clone, check performance
const dev2 = JSON.parse(JSON.stringify(who));
