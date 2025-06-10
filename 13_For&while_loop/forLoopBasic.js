//                  ***Syntax***
//  for(declaration ; condition ; increment/decrement)
// for(let i=0;i<5;i++){// i declared by let so it is block scoped ,so it's use is limited inside for scope{}.
//     console.log(i);// Prints 0->4
// }

//  ****Nested For loop****
// for(let i=1;i<2;i++){ // Outer loop
//     for(let j=0;j<10;j++){ // Inner loop has the access of outer loop variables (i)
//         console.log(`${i} * ${j} = ${i*j}`); // Outer loop runs 1 time for each outer loop iteration inner loop runs 10 times
//     }
// }

//  break : Used to stop the current loop and for loop execution stops
//  continue : Used to skip the current iteration and goes to next iteration

for(let i=0;i<10;i++){
    if(i==5){
        continue; // Skips the 5 th iteration
    }
    if(i==7){
    break;   // Breaks the for loop when i==7
    }
    console.log(i)
}


