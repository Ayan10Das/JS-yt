/*
    1) JavaScript is Synchronous in nature by Default.
      'Each operation waits for the last operation to complete before execution'.

    2) It's Single threaded.(Evrything will execute in single process/thread)

    3)JavaScript acts as an Asynchrnous language in some cases.
    like-> web API calls,dom API, setTimeOut(),setInterval(),fetch() etc.

    Aynchronous means non-blocking code ,while one funtion is executing which takes more time then executin context is working on after code execution.

    Asynchronous or Synchronous code depends on use cases.

    4)** EVENT LOOP ** 
    When js Engine call stack gets a asynchronous execution like setTimeOut(), setInterval()-->
    This is executed after the time is mentioned or event is mentioned. After that time it is added to Task Queue,then to call stack again.
*/

console.log('1');
setTimeout(()=>{// Asynchrnous in Nature so Excuted after the given time.
    console.log('2')
},100);
console.log('3')

/*
o/p-->  1   
        3
        2
*/