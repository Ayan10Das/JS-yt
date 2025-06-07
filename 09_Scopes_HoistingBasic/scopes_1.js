// var a=1;
// let b=2;
// const c=3;

// {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// ********************IMPORTANT--> Var is global Scope,LET and CONST are block scoped
// If variable declared with VAR can be accessed evrywhere inside the program
// If variable declared outside with LET AND CONST globally, can be accessed evrywhere
// If variable declared with LET AND CONST inside a SCOPE then, can be accessed inside the scope only
// Problem

// var a=2
// let a=2 --->ERROR!   a is globally declared once ,again creating a variable a inside scope with VAR which isglobal scoped
{
    var a = 1; // Overwrites the previous VAR a
    let b = 2;
    const c = 3;
}
// console.log(a);    prints 1 always
// console.log(b);      b is not defined
// console.log(c);      c is not defined