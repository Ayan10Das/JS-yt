//  For In loops are used to iterate Over OBJECT 
//  It takes keys from the Object,Array(Keys are Index).
let obj={
    user1:"Ayan",
    user2:"Chayan",
    user3:"Sayan"
};
// for(let key in obj){
//     // console.log(key);// Printing all the keys --> Ayan,Chayan,Sayan.
//     console.log(obj[key]); // Printing all the Values.
// }

//  It can also used to iterate over ARRAY
let arr=[2,4,6,7];
for (const key in arr) {
    // console.log(key);// Prints all the keys(Index) of array ,starting from 0
    // console.log(arr[key]);// It would print all values
}

let map =new Map();

map.set(1,"Ayan");
map.set(3,"Chayan");
map.set(2,"Sayan");

// console.log(map)
// for (const [key,val] in map) { // Array destructure to store key and value doesn't work for Maps
    for (const key in map){
    // console.log(key,'=',val);// Nothing Printed
    console.log(key);// Nothing printed Maps are not iterable like that.
}