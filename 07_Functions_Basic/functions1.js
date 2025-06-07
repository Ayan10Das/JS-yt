const fun=function sayMyName(){
    console.log("Hello Ayan!");
}
// console.log(typeof fun);-->function

// sayMyName();// Calls the Function Named sayMyName()->Execution
// sayMyName;// Returnes the 'reference' of the Function

// sayMyName();// sayMyName not defined error!
// console.log(greeting)-->Prints undefined

function addTwoNumbers(number1,number2){
    return number1+number2;
   
}

// console.log(addTwoNumbers());-->Prints NaN casue nothing is passed in the 'function arguments'
// console.log(addTwoNumbers(3,4));-->Adds two number and returned the value 7
// console.log(addTwoNumbers(3,"4"));-->Adds the 'string and number' and returnes the value "34"
// console.log(addTwoNumbers(3,null));-->return 3


// If no value received in parameter then it declaers 'username'=undefined;
function sayLoggedIn(username="Guest"){// Default value="Guest" but if any value is passed then overwrittrn
    return `${username} just Logged in!`
}

// console.log(sayLoggedIn())--> 'Undefined' just Logged in      ,if no default value is passed
console.log(sayLoggedIn("Ayan"))