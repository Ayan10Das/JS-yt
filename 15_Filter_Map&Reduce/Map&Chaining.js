//  *********************  MAP  **********************//

// Calls a defined callback function on each element of an array, and returns an array that contains the results

let arr=[1,2,3,4,5];

//  Map methods returns results always, In this case Map method checks the Condition and returns true or false,not the values.

let newArr1=arr.map((num)=>{
    return num>=3; 
});
// console.log(newArr);

let newArr2=arr.map((num)=>{
    return num+10;
});
// console.log(newArr2);// prints [ 11, 12, 13, 14, 15 ]
// console.log(arr); Does not alter the real array.

// ****************  Chaining in JS  *************** //

//  Multiple methods can be chained at One time.
//  The result of one method is passed as Input of next Method and so on.In the end result is returned.

let arr2=[1,2,3,4,5,6];

let newValue=arr2.map((num)=>{// Array recevied in this Position : [1,2,3,4,5,6]
                 return num*10; //Result: [10,20,30,40,50,60]
                 }).map((num)=>{// Array recevied in this Position : [10,20,30,40,50,60]
                    return num+1;//Result: [11,21,31,41,51,61]
                 }).filter((num)=>{// Array recevied in this Position : [11,21,31,41,51,61]
                    return num>30;//Result: [31,41,51,61]
                 });
console.log(newValue);  // Prints :  [ 31, 41, 51, 61 ]            