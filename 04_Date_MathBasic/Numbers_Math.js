/*
const value=new Number(200.44711888)
const score=100;

console.log(value);// Creates object of number and defines the number value as 200

const value2=new Number(10.67);
console.log(typeof value.toString())// Converts the number to a String
console.log(value2.toLocaleString('en-IN'))// Prints the number as INR type With ","
console.log(typeof value2.toFixed(2))// Takes 2 digits after fraction, ** returnes a string

console.log(value2.toPrecision(2))// Prints 11,precise value upto limit'2'
*/

//------**********--------******* MATH *******----------*******************//

/*
const num=100.549;
console.log(Math.round(num))// takes the CEIL || FLOOR value according to the fraction value

console.log(Math.abs(-5000))// Gives absolute value non-negative
// console.log(Math.exp(1))
console.log(Math.round(Math.sqrt(11)))// SQRT to find square root
console.log(Math.pow(2,5))
*/
let min=5;
let max=10;
let vak=Math.random()*(max-min+1);
let val=Math.floor(vak)+min;
console.log(vak);
console.log(val)