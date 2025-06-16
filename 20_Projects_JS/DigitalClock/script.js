
let clock=document.querySelector("#clock");

setInterval(()=>{
    let time=new Date();
    time=time.toLocaleTimeString();
    // console.log(time)
    clock.innerHTML=`${time}`;
},1000);

// console.log(time.toLocaleTimeString());