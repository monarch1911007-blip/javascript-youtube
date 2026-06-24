// datatypes ko two parts ma divide kiya gaya hai.

//  1) primitive datatypes:

// types: String, Numbers, Boolean, Null, Undefined, Symbol, BigInt.

const score = 250
const scorevalue = 161.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 123456789123456789n

// Refrence (Nin primitive)

// Array, Object, Functions.

const heros =["ironman","thor","captainAmerica"];
let myObj = {
    name: "monarch"
  
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);