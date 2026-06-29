const name = "Ateeb"
const repoCount = 6

console.log (`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String( 'ateeb-hc' );

console.log(gameName[0]);
console.log(gameName.__proto__); 

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('b'));

const newString = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(-7,6)
console.log(anotherString);

const newStringone = "    Ateeb    "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://nvidia.com/nvidia%20graphics"

console.log(url.replace('%20','-'))