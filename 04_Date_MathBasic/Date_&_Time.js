let myDate=new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
/*
*****OUTPUT*****
2025-05-25T12:07:28.508Z
Sun May 25 2025 17:37:28 GMT+0530 (India Standard Time)
2025-05-25T12:07:28.508Z
Sun May 25 2025
25/5/2025, 5:37:28 pm
2025-05-25T12:07:28.508Z
25/5/2025
*/

/*
*************Taking particular date*****************

let createMyDate=new Date(2025,3,15,6,32)// Year,month(0-11),date,time(Hour),time(Miniutes)
let createMyDate1=new Date("2025-04-15");// "yyyy-mm-dd"
console.log(createMyDate1.toDateString())
console.log(createMyDate.toString());
*/

// **********TimeStamp*********
// starts calculating ms Form(1970)
let createMyDate=new Date(2025,3,15,6,32)
let myTimeStamp=Date.now();//  Date.now() gives the timestamp btween 1970-today
// console.log(myTimeStamp);
// console.log(createMyDate.getTime())
// let diff=Math.floor((myTimeStamp-createMyDate.getTime())/1000);
// console.log(Math.floor(diff/(3600*24)))// Total date from our trips end

// console.log(myDate.getMonth()+1)// Prints 5 cause its may😊
// console.log(myDate.getMinutes())// Prints 38 cause its 19:38😊

// console.log(myDate.getHours())


let day2=myDate.toLocaleString('default',{
    weekday:"long",
     day:"2-digit",
     month:"long",
     hour:"numeric",
     minute:"numeric",
     dayPeriod:"long"
})
console.log(`Today is ${day2}`);
// console.log(`Today is ${day2},time is ${myDate.getHours()} hours ${myDate.getMinutes()} miniutes`)
