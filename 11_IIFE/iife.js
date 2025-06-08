// **************   Immediately Invoked Function Expression    ************** //

let fun=()=>{
console.log("Arrow function");
}   

// ***IIFE*** //
(function iife(){
    console.log("I am a IIFE function");
})();// Immediately executing the function after Describing it

// SEMI_COLON(;) is needed to execute another IIFE. 

(()=>{
    console.log("Arrow IIFE");
})();
// console.log(fun());

// ***** IIFE for Avoiding Global Scope Pollution *****//

(function(){
    let message="Hi how u doing?";
    console.log(message);// o/p-> Hi how u doing?
})()
// console.log(message);-->Error message is not defined Cause message is not Global

// variables declared globally can be accessed or overwritten by other script ,IIFE creates a private scope.

// *** IIFE for DATA ENCAPSULATION / PRIVATE VARIABLE *** //

let counter =(function(){
    let count=0;
    return {
        increment:function(){
        count ++;
        return count;
        },
        reset:function(){
        count=0;
        return count;
        }
    }
})();

// console.log(counter.count);---> Count is undefined
console.log(counter.increment());// 1
console.log(counter.increment());// 2
console.log(counter.reset());// 0

//  Count variable is not accessed directly by the counter object ,instead its accessed by increment(),reset() function.(Closure)

/* CLOSURE */

// A closure is a function that remembers variables from its outer scope even after that outer function has finished execution

// Here for example Increment() and reset() function remembers the count variable from outer IIFE function thought it has executed already.

