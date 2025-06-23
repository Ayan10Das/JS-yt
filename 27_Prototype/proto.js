// Evrything in js is a OBJECT

// Whatever property a object has are available to array,string etc. to any other object


        //  Prototypal Inheritance
// Array-->Object-->NULL
// String-->Object-->NULL

function check(num){
// console.log(this);
return num*5;
}

check.power=2;

// console.log(check(5))
// console.log(check.power)
// console.log(check.prototype)
// o/p--> 25 , 2 , {}

//  A function is a function but can also be treated as a object ,cause eventually everything inherits the Object.

function bevarage(userName,price){
    this.userName=userName;
    this.price=price;

    return 5;
    // return `${this.userName} costs ${this.price}`
}

bevarage.prototype.increment=function(){  // Creates my own MANUAL prototype 
    this.price++;
}
bevarage.prototype.printMe=function(){    // Creates my own MANUAL prototype.
    console.log(`${this.userName} : ${this.price}`)
}

// const chai=bevarage("Chai",20);    
// console.log(chai.price) --> TypeError: Cannot read properties of undefined (reading 'price')

// const chai =bevarage('chai',20);  chai recevies the explicitly returned value.
// console.log(chai)// prints : chai costs 20

const chai =new bevarage('chai',20);//  *********** NEW ************    IMPLICITLY RETURNING the OBJECT
console.log(chai)
// console.log(chai.prototype)     Undefined : Cause object instances does not have .prototype property.
console.log(Object.getPrototypeOf(chai))  // Same as bevarage.prototype , Cause 'NEW' the prototype of Constructor function with Object instace prototype.

console.log(bevarage.prototype)// function: Has .prototype property.

// console.log(chai.increment())
// console.log(chai.price)
// 20 , undefined , 21

//                                                  ****** IMPORTANT ******
/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/ 

