"use strict"; // treat your all js code as newer version of node.js

/*alert("Hello") //we are using node.js
alert(3 + 3)
*/
console.log(3 *
    3);// Code readability that shuold be high,this type of code is not a good practice 
console.log("hitesh")

// ecma_script(tc39) defines standards/specifications for JS
// MDN =>

let name = "Ayan";
let age = 22;
let loggedIn = true;

/*
Primitive-Data-Types in JavaScript
1)number => range 2 to power 53
2)bigint=> Fot large number
3)String=>" Written inside Double Quote"
4)boolean=> stores TRUE/FALSE
5)null =>Standalone value(typeOf(null)=Object)
6)undefinded=>when value is not initialised
7)symbol =>unique
*/

/* 
Non-primitive Data Types
1)Object
*/
console.log(typeof 1+2+"2")// Checks the type of first value only-->ans->number
console.log(typeof (1+2+"2"))//ans->String
console.log(typeof null) //Object
console.log(typeof undefined) // Undefined --> It's a DataType