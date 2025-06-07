
// Primitive DataTypes behaviour
let userOne = "Ayan Das";
let userTwo = userOne;// Call by value-->Copy fo the value holding by userOne is given to userTwo not the reference of userOne

// userTwo="Chayan Das";
// console.log(userOne);
// console.log(userTwo);

// Non-primitive or Reference type(OBJECT)

let obj1 = {
    name: "ayan",
    id: 22
};

let obj2 = obj1;

// for (const key in obj1) {

//     const element = obj1[key];
//     console.log(element)

// }
// obj2.name="Chayan"
// console.log(obj1.name)
// console.log(obj2.name)

let arr = [1, 2, 3, 4];
let arr2 = arr;

// arr[2]=10;
// console.log(arr)
// console.log(arr2)