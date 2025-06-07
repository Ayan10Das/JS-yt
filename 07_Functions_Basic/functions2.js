
// Used when Fucntion do not have any idea about how many values are there in parameter
// function addValues(...num){// REST(...) operator stores all received parameters in one array.
//     console.log(num);
// }


// function addValues(val1,val2,...num){// Takes first two values from parameter and rest are stored as array.
//     console.log(num);// [22,55,155]
// }

// addValues(100,200,22,55,155);
 

//   Passing OBJECTS and ARRAYS as Parameter

let obj={
    name:"Ayan",
    age:21
};

function userDetails(user) {// Object ref is received in 'user' variable
    console.log(`Hello my name is ${user.name} and my age is ${user.age}`)
}

userDetails(obj);