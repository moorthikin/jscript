//Variables and Data Types
let name = "John"; //String
const age  = 32; //Number
let isActive = true;//boolean
//Object
let user = {
firstName : "John",
age : 23
}

const fruits = ["Apple", "Orange", "Mango"];
const numbers = [1, 2, 4, 45, 23];

numbers.sort((a, b) => a - b);
console.log(numbers); 

fruits.push("Banana");
console.log(fruits);

for (var i = 0; i < fruits.length; i++) {
    if (fruits[i] == "Apple") {
        console.log("Apple is available in the array!");
    }
    console.log(fruits[i]);
}
