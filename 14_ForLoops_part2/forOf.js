
//  **** for OF ,for IN , for EACH **** ----> Iterate over Array , Object , Map , String
let array=["Ayan","ram","sam"];
for (const value of array) {
    console.log(value);// prints all values of array,No need to increment the iterator ,which we do in traditional for ,while loops
}

// For of String
let greeting="Hello World";
for (const greet of greeting) {
    console.log(greet);
}

// **** Maps ****   // Maps are used to store the unique key and value pairs,stores umique vallues
let map =new Map();

map.set(1,"Ayan");
map.set(3,"Chayan");
map.set(2,"Sayan");

// console.log(map)
for (const [key,val] of map) { // Array destructure to store key and value
    console.log(key,'=',val);
}

let obj={
    user1:"Ayan",
    user2:"Chayan",
    user3:"Sayan"
};

for (let [key,val] of obj) {// Objects are not iteratable using for OF loops
    console.log(key,val);
}