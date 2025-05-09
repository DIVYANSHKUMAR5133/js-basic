console.log("hii");

"use strict";//treat all js code as nerwer version

// alert (3+3) // we are using not browser

console.log(3+
    3) // code  readability should be high

console.log("raj")

// data type 
//primitive data type

// number 
// bigint
//string => ""
//boolean =>true/false
//null => standalone value
//undefined =>
//symbol => unique

//object

console.log(typeof"raj");
console.log(typeof null);//object
console.log(typeof undefined);//undefined



//conversion confusion

//number
let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//string value
let score = "raj"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// boolean value
let score = true

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33aba" => NaN
//true => 1; false =>0

let isLoggedIn = 1
let booleanIsLoggedIn = boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0=> false
//"" => false
// "raj" > true

//  convert the number to string
let someNumber = 33
let stringNumber = string(someNumber)
console.log(stringNumber);