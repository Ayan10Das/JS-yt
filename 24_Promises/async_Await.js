let promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let bool=true;
        if(bool){
            reject('Error!')
        }else{
            resolve({user:"Chayan",company:"TCS"})
        }
    },1000);
})

//   Wrap the promise in a Async function and use Await for either resolve and reject.
//   Await can be used inside async funtion only.

// //  This cant handle ERRORS!
// async function promieResolve() {
//     let data= await promiseFive;
//     console.log(data.user)
// }
// promieResolve();


//   use Try&Catch block to manually handle errors
async function promieResolve() {
    try {
        let data= await promiseFive;
        console.log(data.user)
    } catch (error) {
        console.log(error)
    }
    
}
promieResolve();


        // Fetch With Async & Await 
        // /*********** Fetch also returns a promise*********
async function fetchExample() {
    let fetchData=await fetch('https://api.github.com/users/Ayan10Das');
    let data= await fetchData.json();
    // console.log(data) 
    console.log(data.location)  
}

fetchExample();

