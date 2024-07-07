//Let var and Const
//let and const have block scope but the value of const cannot be changed 
//let
let num = 23;
console.log(num);
{
    let num = 25;
    console.log(num);
}
const num1 = 123
console.log(num1);
//This will give an error
// {
//     num1 = 1323
//     console.log(num1);
// }
var num3 = 5567
console.log(num3);
num3 = 90;
console.log(num3);

//<--------------Arrow Functions---------------->
//normal function
function f1(a, b) {
    console.log(a + b);
}
f1(2, 100)
//arrow function
const f2 = (a, b) => {
    return a + b
}
console.log(f2(2, 3));
//short hand way to use the arrow function
const f3 = (a, b) => a * b;
console.log(f3(3, 3));


/*----------------------ES6 Spread operator----------------- */
//this operator spreads an iterable object into its own element
const q1 = ["January", "February", "March"];
const q2 = ["April", "May", "June"];
const q3 = ["July", "August", "September"];
const q4 = ["October", "November", "December"];
const year = [...q1, ...q2, ...q3, ...q4]
console.log(year);


/*-----------------------Loops through the values of an iterable object------------------------*/
const string = "Rahul Singh"
let forofoutput = ""
for (let ch of string) {
    forofoutput += ch + " "
}
console.log(forofoutput);

//----------------------------map in js-------------------------
const fruitsMap = new Map([
    ["Apple", "Red"],
    ["Banana", "Yellow"],
    ["Orange", "Orange"],
    ["Mango", "Yellow/Green/Red"],
    ["Grape", "Purple/Green/Red"]
]);

console.log(fruitsMap);
console.log(fruitsMap.get("Mango"));

//-------------------------------------Sets in js--------------------------
const letters = new Set();
letters.add("a")
letters.add("b")
letters.add("c")
//set dont add duplicate values so the below values will not be added
letters.add("a")
letters.add("b")
console.log(letters);

//------------------------------class in javascript---------------------------
//A javascript class is not a object but it is the template for creating objects just like other oops programming languages
class class1 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

}
const c1 = new class1("Rahul", 22)
const c2 = new class1("Rohit", 24)
console.log(c1, c2);
//==================================JS Promises======================================

//promises are only used in the ideas of callback only its a bi product of using call backs 
const Myfunction3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout = (() => {
            console.log("This is inside a promise");
            resolve();
        }, 20000);
    });
}
Myfunction3().then(() => {
    console.log("successfull");
}).catch(() => {
    console.error("not successfull");
})

//================================Symbols in javascript=================================
//Symbols are the primitive datatype which store a unique refrence value

const info = {
    name: "Rahul Singh",
    age: 21,
    course: "MCA"
}
let id = Symbol("id")
info[id] = 23445
console.log(info);

//========================default parameters in js=========================
// if there are no parameters passed during the function call then we use default parameters
function f5(a = 12, b = 23) {
    console.log(a + b);
}
f5(undefined, 100)
f5(2, undefined)
f5()
//====================rest parameter====================
//this parameter makes a infinity length array like data structure  
function f1(a, ...b) {
    console.log(a, b);
}
f1(2, 100, 123, 4, 5, 56, 6, 67, 8, 8, 8, 99, 9345, 5, 32)