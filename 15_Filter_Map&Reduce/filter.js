//  'For Each' function Does Not returns anything so We have to store value in some new Object.

let arr=[1,2,3,4,5,6,7,8,];

let storedValue1=arr.forEach((num)=>{
    return num;
});
// console.log(storedValue);// prints UNDEFINED , FOR-EACH Does not returns anything.

//  ************ Important*************

//  Returning values using for each method.
let result=[];
let storedValue2=arr.forEach((num)=>{
    if(num>3){ // Manually checking the condition
        result.push(num);
    }
    return result;
});
console.log(result);//  Prints-> [ 4, 5, 6, 7, 8 ]


//*********  'filter'- Method helps to return an array of values Based on Condition check.

// Returns the elements of an array that meet the condition specified in a callback function.

/*  
let filterStored=arr.filter((num)=> {
return num>3;   Explicitly returning the value.
});
*/

let arr2=[1,2,3,4,5,6,7,8,9];
let filterStored=arr2.filter((num)=> num>3);
console.log(filterStored); // Prints-> [ 4, 5, 6, 7, 8 ]
console.log(arr2);// Does not alter the real array.