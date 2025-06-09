/*************  TRUTHY AND FALSY VALUES  *************/

//  FALSY values
//  1) false ,2) "" ,3) 0(ZREO) ,4) NaN 5) Undefined 6) null ,7) -0(minus ZERO) ,8) BigInt 0n 

//  TRUTHY values
// 1) true ,2) "0" ,3) "false" ,4) " "(any string,even a SPACE) 5) [] -->empty ARRAY 6) {},-->empty OBJECT ,7) function(){}; -->empty FUNCTION

//  To check ARRAY is EMPTY or not
let arr=[];

if(arr.length === 0){
    console.log("Array is empty");
}

// if(arr){--> becomes 'true'

// }

//  To check OBJECT is EMPTY or not
let obj={};
if(Object.keys(obj).length === 0){//--> Object.keys() returns a ARRAY of KEYS of that object,obj has no keys its a empty ARRAY.
    console.log("Object is EMPTY!")
}
