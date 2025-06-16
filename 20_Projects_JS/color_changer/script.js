const buttons=document.querySelectorAll(".button");
// console.log(buttons)
const body=document.querySelector("body");

buttons.forEach(function(btn){
    // console.log(btn);

    btn.addEventListener('click',function(event){
        console.log(event);// What event has appeared
        console.log(event.target);// What's the targated Eleent.

        let color=event.target.id;
        body.style.backgroundColor=`${color}`;
    });
});

