// N N B B S S U prinitive
let a = null;
let b = 244
let c = true;
let d = "hello"
let e = Symbol("it is symbol")
console.log(a, b, c, d, e);

// primitive

// 7 types: number , null , boolean , bigint , string , symbol , undefinded,

const number = 100

const scoreValus = 100.0
 
const isLogged = false

const outsideTemp = null
 
let userEmail = ""

const bigNumber = 122453221122211



// reference (non primitive)

// Array, objects, Functions 

// Array 
const heros =["shaktiman", "naagraj" , "superman"]

// object 

let myobj = {
    name: "jay",
    age : 98,
}

//function 

const myFuncution = function(){
    console.log("hello jay");
    
}
console.log(typeof bigNumber);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//heap  stack memory

let myName = "jaya khan"

let anotherName = myName
anotherName = "jay pratap"
console.log(myName);
console.log(anotherName);

let  userOne = {
    email : "jaya@google.com ",
    upi : "upi@sbi",
}

let userTwo = userOne

userTwo.email = "khan@google.com"

console.log(userOne.email);
console.log(userTwo.email);
