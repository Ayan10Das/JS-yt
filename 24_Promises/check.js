 let value;
 function timeOut() {
   return new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        value="yes done";
        resolve();
    },5000);
   })
}
async function check() {
    await timeOut();
    console.log(value);
}
check();