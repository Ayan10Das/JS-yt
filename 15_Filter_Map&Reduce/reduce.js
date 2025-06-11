//    ********* REDUCE *********    //
// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

let arr=[1,2,3,4];

let initial=0;

let totalValue=arr.reduce((acc,current)=>{
    return current+acc;// Accumilator result is returnded and passed as parameter to the next call.
}, initial);// Initial is used by accumelator for first time only 'accumelator=initial'

// console.log(`Total Price : ${totalValue}`);

let shoppingCart=[
    {
        item:"JS course",
        price:500
    },
    {
        item:"HTML course",
        price:99
    },
    {
        item:"CSS course",
        price:299
    }
];

let totalPrice=shoppingCart.reduce((acc,current)=>{
        return acc+current.price;
},0);
console.log(`Total price of three course: ${totalPrice}`);