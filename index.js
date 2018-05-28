"use strict";
//module-3: DOM, JQuery, Forms, and Regular Expressions

// Make a variable referencing a HTML element
const helloHeader = document.getElementById("helloHeader");
// gets all elements with this tag
const helloParagraph = document.getElementsByTagName("p");

// change that element, in this case making the txt red
helloHeader.style.color ="red";

// console.log(helloParagraph);

// creates a new element, is not automatically placed in the document
const testParagraph = document.createElement("p");

// adds txt within the parent element, in this case our empty paragraph, it won't pick up the HTML tags
//testParagraph.innerText = '<span style="color: blue">Hello</span>'

//this version adds HTML inside the parent element, so it will pick up the spans this time
testParagraph.innerHTML = '<span style="color: blue">Hello</span>'

// this places a child element into the document body, in this case the paragraph we made above
document.body.appendChild(testParagraph);

console.log(testParagraph);