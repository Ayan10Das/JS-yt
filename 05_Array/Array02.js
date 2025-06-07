// const myArr=[2,5,6,7];
// console.log(myArr.reverse())// reverse the array and alters it
// console.log(myArr)

const marvel_heros=["IronMan","Hulk","Loki"];
const DC_heros=["SuperMan","BatMan","Flash"];

// marvel_heros.push(DC_heros);// Passed an array
// console.log(marvel_heros)


// const myneArr=marvel_heros.concat(DC_heros);// concates the array elements and returnes a new array
// console.log(myneArr);

const myNewArr=[...marvel_heros,...DC_heros];// Spread Operator ,spreads ecah array elemets and adds
// console.log(myNewArr);

const arr=[1,2,[3,4],5,[6,7,8]];
const newArr=arr.flat(Infinity);// Opens the inner array and returnes a new array of all elements
// console.log(newArr)
// console.log(arr)


console.log(Array.isArray("Ayan"));// returnes true or false;
console.log(Array.from("Ayan"));// converts it into an array-->['a','y','a','n']
console.log(Array.from({name:'Ayan'}))// prints [] array,have to define array based in keys or values

let a=100;
let b="string";
let c=true;

let createdArray=Array.of(a,b,c);// returnes a new array With passed arguments
console.log(createdArray)


let val=[1,2,3]
let newVal=[...val];
newVal[1]=6;
console.log(newVal);
console.log(val)