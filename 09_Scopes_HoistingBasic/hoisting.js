// ******Hositing******//
// In JavaScript variables and functions declarations moved to the top of their scope before their execution.

// var a;-->Internally
console.log(a);// Gives 'undefined' not error!
var a=10// a=10-->Internally

// ****Important*****//
/*
'Let' and 'Const' are also hoisted but they can't be used before their declaration line ,
they remain in te Temporal Dead Zone(TDZ)
*/

// Function declared like this can be CALLED BEFORE Initilization
console.log(addOne(2))
function addOne(num){
    return num+1;
}

// Function stored as EXPRESSION(storing in a variable)
// console.log(addTwo(8)) //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo=function(num){
    return num+2;
}
// console.log(addTwo(8))-->prints


// **********CLOSURE***********//
function wholeName(){
    const name="Ayan"
    function surName() {
        console.log(name);// No ERROR , Inner function can access outer function variables as Outer function is keep executing or already executed.
        const lastName="das"
    }
    surName();// Prints "Ayan"
    // Outer function can't access inner function Variable cause it has alreadt executed
    // console.log(lastName);       -->ReferenceError: lastName is not defined
}
wholeName();
