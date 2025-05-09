const name = "diya"
const repoCount = 90

console.log(`Hello my name is ${name} and my repo cuont is ${repoCount}`);

const gameName = new String('diya')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-4,2)
console.log(anotherString);

const anotherStringOne = "hitesh"
console.log(anotherStringOne.trim());


const url = "https://hitesh.com%20kumar00"
console.log(url.replace('%20','_'));

console.log(url.includes("kumar"));


