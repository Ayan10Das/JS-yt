//  Javascript is primarily a prototype based language, and its class'es are primarily syntactic sugar
//  over existing prototype based inhertance mechanism.

//  Programming paradime:- What style ,structure the language uses ,procedural,functional,oops..

//  OBJECT is COLLECTION of PROPERTIES and METHOD.

//     Object Literal

function user(username){
     this.username=username;// Inserting username In global object.
     this.method=function(){
        console.log(`hello ${this.username}`)
     }
    //  return this; Implicitely returns with 'NEW' kewWord .
}
let user1= new user("Ayan");
let user2= new user("Ankita");// Overrides the global object username value.             

/* *******  Important  *****

'New' ketword gives a new instance of the object ;

*/
let user3=new user('sayan')
console.log(user1);// Prints the user1 object
console.log(user3.username);// Prints sayan,
console.log(user3.method());// Prints hello sayan,

/* 
 1) create a instace of the object by 'NEW'.
 2) assign the properties and metods to the empty object instance of current object.  
 3) completes the creation of new instance of the object
*/ 

console.log(user1.constructor)// That’s because constructor is an inherited property from Object.prototype, and by default points back to the function that was used to construct the object. A property.


/* 
            Constructor() method
Initializing class properties

Setting default values

Dependency injection

Any setup logic required during object creation
*/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const p1 = new Person("Ayan", 22);
p1.greet();