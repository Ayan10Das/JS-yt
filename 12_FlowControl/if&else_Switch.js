// let a =10;
// if(a==10){
//     console("Condition hits true")// Executed
// }

// if(a==100){// Equal to operator
//     console("Condition hits wrong")// Not executed 
// }

// let age=18;

// if(age<18){
//     console.log("Not eligible");
// }else if(age>18){ -->ELSE IF() checks other condition ALONG with if().IF TRUE then executes.
//     console.log("Eligible")
// }else{
//     console.log("Oh you are exactly 18!")
// }

// if(2=='2'){// --> condition hits 'true' cause '2' is converted to a number.(TYPE COERCION)
// console.log("true")
// }

// if(2==='2'){// Strict equalto checks both DATA TYPE and VALUE
// console.log("false");// Not executed.
// }

let month = 2;
switch (month) {
    case 1:// Case values could be string as well
        console.log("January")
        break;// Without break switch keep on executing all the cases untill finds a break or default. 
    case 2:
        console.log("FEB")// prints feb:cause month matches 2 case value-->2
        break;

    default:// No matches with the case runs default section 
        console.log("sorry!")
        break;
}

// LOGICAL OPERATORS //

// && , || , !(Logical not)

//   && --> Logical AND , while both condition true works otherwise not.
//  SHORT CIRCUITING --> left->right check so IF first condition false never checks other condition in right.
if(10>5 && 10>6){
console.log("Both condition is true");
}

if(10>12 && 10>4){
    console.log("One condition is false so never executed")
}

//  || Logical OR , works if any of the condtion is true
if(10>12 || 10>4){
    console.log("One of the condition true so executed");
}

//  ! Logical NOT , no change the actual condition result, !TRUE-->FALSE,!FALSE-->TRUE
if(!true){
console.log("true becomes false ,so not executed")
}

if(!false){
    console.log("False becomes true so Executed")
}
//  In a single go
let age=18;
if(age>=18) console.log("Eligible");