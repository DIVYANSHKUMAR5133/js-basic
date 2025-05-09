let arr = [1,3,3,4,5,6,7,8];
arr.push("10")
// console.log(arr)
// console.log(arr.toString())








let d = [1,3,45,5,6,7]
delete d[1]
// console.log(d)








let name = ["jay ","kisor","raj","sharma"]
// console.log(name.slice(1))


name.splice(1,0, 'kumar');
// Inserts at index 1
console.log(name);

name.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(name);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]



const array1 = ['one ','two','three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log ('reversed:',reversed);

// reversed: [ 'three', 'two', 'one ' ]
