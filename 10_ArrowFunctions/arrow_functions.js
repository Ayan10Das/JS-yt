
// 'this' keyword is used to refer current context value in a object scope
const user={
        userName:"Ayan",
        loggedIn:"true",
        
        welcomeMessage:function() {
            console.log(`Hello ${this.userName}!`) // Prints Current context Object's username
            console.log(this);// Prints OBJECT current context --> same as console.log(user)
        }
}

// console.log(user.welcomeMessage) // Prints function reference
// user.welcomeMessage();// Prints 'Hello Ayan' and OBJECT current context
// user.userName="sam"; // Changing the username in USER object
// user.welcomeMessage();// Prints 'Hello sam' and OBJECT current context

//*********THIS**********//

// console.log(this)// In BROWSER console it prints WINDOW object multiple properties
// console.log(this)// Prints empty object cause nothing to refer in global context


function checkThis(){
    let username="ayan"
    console.log(this.username);// Prints undefined ->Cause 'this' inside function not work same as Inside object


    // console.log(this); --> prints Object[global] with Multiple key,Value pair
}
// checkThis();

// ********FUNCTION EXPRESSION*********
// let obj=function(){
//     // return ({user:"Ayan"})-->returns the object
//     // return {user:"Ayan"}-->returns the object
// }
// console.log(obj())


// ********ARROW FUNCTION*********

// Syntax: (parameter1,parameter2...)=>{return ...}  or   (para1,para2...)=>( );

// ***Explicit return
let obj1=(num1,num2)=>{
    return num1+num2;
}
// console.log(obj1(3,4));-->Prints 7

//  ***Implicit return

let obj2=(num1,num2)=> num1+num2;//--> Implicitly returning the value sholud be written in ONE LINE
// console.log(obj2(3,4))-->Prints 7

let obj3=(num1,num2)=> (num1+num2);// Works Same as before one
// console.log(obj3(3,4));

// ***** For objects Implicit return
let obj4=()=>({user:"Ayan"});// To return Object implicitly should be written inside curly brackets
// console.log(obj4())// Prints returned Object --> { user : 'Ayan' }

// ********** THIS in ARRAOW FUNCTION**********
let objNew={
    user:"Ayan",
    greeting:()=>{
        console.log(`Hi my name is ${this.user}`)//--> 'this is not objNew ,its the global Object'
    }
}
// objNew.greeting();--> Prints 'Hi my name is UNDEFINED'