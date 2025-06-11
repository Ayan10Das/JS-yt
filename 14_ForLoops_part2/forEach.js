
//   For Each - Higher order function
//   It takes a 'CallBackfunction' as parameter and takes Each element,index,whole Array as function parameter from Array internally 

//  Callback functions has no NAME.

let arr = ['js', 'c++', "java", "Python"];

arr.forEach(function (value) {// Takes Each value as Parameter Internally
    // console.log(value);  Prints all the values of array
});

arr.forEach(function (value, index, arr) {//  Function parameters -: value,value's Index,whole array
    // console.log(value, ' ', index, ' ', arr);
    
    /* Prints
    js   0   [ 'js', 'c++', 'java', 'Python' ]
    c++   1   [ 'js', 'c++', 'java', 'Python' ]
    java   2   [ 'js', 'c++', 'java', 'Python' ]
    Python   3   [ 'js', 'c++', 'java', 'Python' ]
    */
})

//  ()={}; arrow function can also be used as Callback Function
arr.forEach((value)=>{
    // console.log(value);// Prints all the Values
})

//  Iterate Over ARRAY having Multiple OBJECTS as values.
let arrOfObjects=[
    {
        user:"Ayan",
        loggedIn:true
    },
    {
        user:"Chayan",
        loggedIn:false
    },
    {
        user:"Sayan",
        loggedIn:false
    }
]

arrOfObjects.forEach((obj)=>{ // Takes Each objects as parameter cause those are array values.
    console.log(obj['user']);
    // for (const key in obj) {
    //     console.log(key,"=",obj[key]);// iterate over the OBJECT values
    // }
})