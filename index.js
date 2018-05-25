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

//strings in js and basic concatenation
var strOne = "Hello";
var strTwo = ", World";
var helloWorldStr = strOne + strTwo;

console.log(helloWorldStr);
// this must start with ` the symbol under the tilda (backtick)
// js will also keep whatever line spacing you use
console.log(`The value of strOne and strTwo concatenation is: ${ strOne + strTwo }`);
