const user={
    username:"Ayan",
    password:"123"
}

const teacher={
    isAvailable:true
}

const teaachingAssistant={
    editing:true,
    __proto__:teacher  // Giving access of prototype of Teacher to teachingAssistant.
}

// teacher.__proto__=user;
// console.log(teacher.username);  Now teacher has the access of user Prototype.

// New Method

Object.setPrototypeOf(teacher,user);  //  setPrototypeOf(targetObject,inputObject)
console.log(teacher.username)// Teacher has all the access of user prototype.


String.prototype.trueLength=function(){// Now all Strings have the method trueLength().
    console.log(this)// Which String Object has called the trueLength() ,this refers to that String. prints:- [String: 'Ayan  ']

    console.log(`${this.trim().length}`) // Prints:- 4
}

console.log("Ayan  ".trueLength());
