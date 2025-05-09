let arr =["hiii " , "my " , "name ","divyansh"];
for(let idx=0; idx<arr.length;idx++){
    console.log(arr[idx]);
}

// an other question  average marks of student 

let marks = [78,90,98,45,66,];
let sum = 0;

for(let val of marks ){
    sum +=val;

}
let avg = sum /marks.length;
console.log(`avg of marks of the class =${avg}`);


let items = [250,645, 300,900,50];
let i=0;
for (let val of items){
    let offer = val /10;
    items[i] = items[i]-offer;
    console.log (`value of offer = ${items[i]}`);
    i++;
}
