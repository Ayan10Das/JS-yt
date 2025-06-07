/*
let loggedIn=NaN


let booleanLoggedIn= Boolean(loggedIn);
console.log(typeof booleanLoggedIn);
console.log(booleanLoggedIn);
// 1/anyNumber->true & 0->false
// ""(empty String)-->false & "anything"-->true

// null-->false
// undefined-->false
// NAN-->false
*/


let score=undefined;
let valueInNumber=Number(score);
console.log(typeof score);// Undefined
console.log(typeof valueInNumber)// Number
console.log(valueInNumber)// NaN

/*
console.log(valueInNumber);
// ""-->0 && "any_number"-->number
// "12abc"-->NaN(type of NaN is number)
// null-->0 && true-->1 && false-->0 && undefined(<--typeof undefined)-->NaN-->Coverting the undefined in a Number will give NaN

*/

// let value=0;

// let stringValue=String(value);
// console.log(typeof stringValue)
// console.log(stringValue)

// type of every value is String and it becomes String "NaN"||"undefined"||"true"&&"false"
console.log(true-false)//-->1
let vaal=null;
// let val2=val+2;
// console.log(val2)
let val=Number("ab12");
console.log(val)


let a=2
let b;
console.log(a+b)