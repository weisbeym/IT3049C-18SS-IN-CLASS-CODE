/*
//how basic js variables work

// null variable and a declared variable with no current value
var myNullVariable = null;
var myUndefinedVariable;

// example of boolean values
var trueVariable = true;
var falseVariable = false;

// basic numerical values, positive, negative, and float/decimal
var numberOneVariable = 1;
var negativeOneVariable = -1;
var OnePointOne = 1.1;

// more decimal/float examples that when added show under the hood js
// doesn't use normal integers, console value ends up being .30000000004 or something similar
var myPointOneVariable = 0.1;
var myPointTwoVariable =0.2;
console.log(myPointOneVariable + myPointTwoVariable);

// js object example, it can hold values and functions
const person = {
    name: "Andrew",
    sayHello: function () {
        console.log("Hello")
    }
};

// how to display object values using the object we made, person
console.log(person.name);
person.sayHello();

// example of symbol var type added in ES2015
var nameOne = Symbol("Andrew");
var nameTwo = Symbol("Andrew");

//this is not true as you might think because symbol makes them unique values
console.log(nameOne == nameTwo);
console.log(nameOne);
console.log(nameTwo);
*/

/////////////////////////////

/*
//strings in js and basic concatenation
var strOne = "Hello";
var strTwo = ", World";
var helloWorldStr = strOne + strTwo;

console.log(helloWorldStr);
// this must start with ` the symbol under the tilda (backtick)
// js will also keep whatever line spacing you use
console.log(`The value of strOne and strTwo concatenation is: ${ strOne + strTwo }`);
*/

//////////////////////////////
/*
//js arrays they can have multiple types in it like boolean, string, float etc...
var myArray =[1, "Hello", {name: "Andrew"}, function () {}];

// a for loop
// for (var i = 0; i < myArray.length; i+= 1) {
//     console.log(myArray[i]);
// }

// foreach function
myArray.forEach(function(currentIterationValue, index) {
    console.log(`${ currentIterationValue} is at the ${ index } index`)
});

var myNumArray = [1, 2, 3, 4];

// adds value to end of array
myNumArray.push(5);

// takes off last value of an array and returns it
myNumArray.pop();

// the map makes a new array by using a function to call elements of parent array
var myUpdatedNumArray = myNumArray.map(function(currentIterationValue) {
    return currentIterationValue + 1;
});

console.log(myUpdatedNumArray);
*/

//////////////////

//scope in js

/*
var test = 123;

if(true) {
    test += 1;
}
function incrementTest() {
    //test += 1;

    var test2 = test + 1;
}

incrementTest();

// gives an error because test2 is not global it os local to the function
console.log(test2);


// instead of var we use let and const
let randomNum = 555;

//const is a assigns a consistent assignment not value
const test = {
    value: 123
};

//doesn't work
if(true) {
    test = {value: 124}
}

//does work
if(true) {
    value = 124
}
*/

////////////////
/*
// functions

function sayHello(name) {
    console.log(`Hello, ${ name }!`);
}

sayHello("World");

// can also do
const sayHelloAssigned =  (name) => {
    console.log(`Hello, ${ name }!`);
};

sayHelloAssigned("World");

const returnHello = name => `Hello ${ name }`;

console.log(returnHello("World"));
*/

//////////////////////

// flow control

// for of returns values
for(let val of [1, 2, 3]) {
    console.log(val);
}

// for in returns index
for(let val in [1, 2, 3]) {
    console.log(val);
}