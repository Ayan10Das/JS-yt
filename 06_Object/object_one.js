//Sigleton objects-->Creating objects in heap memory using constructors
//Object.create(prototypes,propertiesObject)
//new Number(),new String(),new Array(),new Object()

//Object Literals

let mySym=Symbol("key1")

let obj={
    [mySym]:"mySym1",
    name:"Ayan",
    "full name":"Ayan Das",
    age:21,
    email:"ayanUngabunga@gmail.com",
    arr:[1,2,3,4,true]
}
console.log(obj.arr[2])
// console.log(obj.name)
// console.log(obj["name"])
// console.log(obj."full name")//ERRORR!
// console.log(obj["full name"])


// TO print the Symbol
// console.log(typeof obj[mySym])// Still string but treated as symbol
// console.log(obj)


// obj.email="ayandas@gmail.com"
// console.log(obj)


// Object.freeze(obj)// Frezzes the object stopping from changing it
// obj.email="ayandaaaaaaas@gmail.com"
// console.log(obj)

// Adding Key and values after object declaration
// obj.married=false;
// console.log(obj.married)

//Function
// obj.greeting=function(){
//     console.log("Hello there")
// }


//In order to use the properties of object inside the same object have to us 'this' keyword
obj.greeting=function(){
    console.log(`Hello there ${this.name}`)
}
console.log(obj.greeting())
