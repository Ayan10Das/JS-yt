// Literal type
let myArr=[11,22,true,"yes"];// 0-indexed
// console.log(myArr[3])

//Constructor Way
let myArr2=new Array(1,2,true,"yes");// No square brackets needed
// console.log(myArr2[1]);

let myArr3=new Array(3);// Creates empty Array of Size 3
// console.log(myArr3);

let newArray=myArr.join('--');// Binds the array elements as string and returnes it
// console.log(newArray)

const mynArr=[4,5,9,8,7,3];
console.log("a",mynArr.slice(1,3));// [5,9] prints but doesn't modify the real array
console.log(mynArr)

console.log("b",mynArr.splice(1,3));// [5,9,8] prints as well as modifies the real array 
console.log(mynArr);