/************* Nullish Coalescing Operator************/

//  Provides a Default value when a variable is UNDEFINED  or NULL
//  It takes R.H.S value if L.H.S value is NULL || UNDEFINED

let firstName=null;
let lastName="Ayan Das";
let fullName="Ayan Das Engineer"

console.log(firstName ?? lastName ?? fullName);// --> Prints -> 'Ayan Das' cause firstName is NULL so it takes value of first encountered r.h.s value

//  All other cases it takes L.H.S value

let age=0;
let defaultAge=18;

//  Remember All other values are Acceptable and L.H.S value taken except Null and Undefined.
console.log( age ?? defaultAge);// Prints 0
