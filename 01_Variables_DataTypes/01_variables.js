// const accountId=14
let accountEmail="ayan09484@gmail.com"
var accountPassword="12584"
accountCity="jaipur"

let accountState;
/*
Do not use VAR cause it's globaly Scoped
Use let and const block scoped
*/

// Var is globally scoped so overWitten variable wolud be overwritten evrywhere
// var value=10;
// {
// var value=20;
// console.log(value);
// }
// console.log(value);

// Const and Let is a globally scoped so if overwritten oly be overwitten inside that scope only
let accountId=22;
{
    let accountId=33
    accountId=12;
    console.log(accountId)
    //accountId=12
}
// accountId=22
console.log(accountId)
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

let me=25;
{
    me=60;
}
console.log(me);// Prints 60