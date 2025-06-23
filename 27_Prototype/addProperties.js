//    Evrything inhertis from OBJECT class.

const myHeros=["Thor","Shaktiman"];

// myHeros.hiAyan();//   myHeroa doesn't have any hiAyan() method.

Object.prototype.hiAyan=function(){  // Manually adds the hiAyan() method,in OBJECT prototype.
    console.log("Heros says hi to Ayan");
}

//  Array--> Object --> NULL
//  Array eventually inhertis from OBJECT so array now also have the access of hiAyan() in Array.prototype.

myHeros.hiAyan(); //  Heros says hi to Ayan.

//  But if we define any Property or method inside the Array,String prototype it wont be accessable to OBJECT prototype.

Array.prototype.greeet= function(){
    console.log("Hi from Array Prototype.")
}
myHeros.greeet();// prints:  Hi from Array Prototype.
// String.prototype.greeet();   Error! --> String.prototype.greeet is not a function
// Object.prototype.greeet();   Error! --> Object.prototype.greeet is not a function