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

//**********************************

// Stack / Heap
// primitive datatype ko store krta hai.

 let a= 10;
 let b = a;

 a = 50
 console.log (a)

 let userone = {
       email : "shadow123@gmail.com",
       password: "shadow@123"

 }

 let usertwo = userone

 usertwo.email = "ateeb12342gmail.com"
 
 console.log (userone.email);
 console.log (usertwo.email);
