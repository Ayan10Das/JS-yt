/*
                                   ****** PROMISE ****** 
 The promise object represents the eventual Completion (or failure) of any asynchronous operation and its resulting value .

  Three States:
    1) pending
    2) Resolved
    3) Rejected
 */

//   Creating Promise 
                //  Method 1: Storing the Promise Reference
let promiseOne=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async code is Executed")
        resolve();
    },2000);
});

promiseOne.then(()=>{
    console.log("Resolved")
});

                // Method 2: Direct resolve.

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async 2")
        resolve();
    },1000);
}).then(()=>{
    console.log("Resolved 2")
});

                // .then() || .catch() Chaining 

let promiseThree=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=true;
        if(error){
            resolve({username :"Ayan",password:"123"});
        }else{
            reject('Something went wrong!')
        }
    },1000);
})

promiseThree
.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=> console.log("Promise either resolved or rejected"))