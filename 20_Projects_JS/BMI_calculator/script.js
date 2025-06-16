//   Have to trigger the 'form' using submit BUTTON 'calculate',cause its a form submit button
/*

  FORM is either 'get' or 'post', but we dont want to send the data to any server or in url, That's why a addEventListener() method is used called 
//   form.addEventListener('submit',function(event){
        event.preventDefault();
    })

*/

// const value=parseInt("123");
// console.log(value)

const form=document.querySelector("form");

form.addEventListener('submit',function(e){
    e.preventDefault();

    // Height and Weight are taken when the form is submitted so we take the values of those input feild inside the form eventListener.
    let height=parseInt(document.querySelector("#height").value);
    console.log(height);
    let weight=parseInt(document.querySelector("#weight").value);

    // ** IMPORTANT ** //
    // NaN == NaN is always false in JavaScript. That's why your if condition never becomes true, even if the value is actually NaN.
    // if(height==NaN || weight==NaN )--> Always false;
        
    if(isNaN(height) || isNaN(weight) || height==="" || height<0 || weight<0 || weight===""){
        alert('Enter a valid Height or Weight');
        document.querySelector("#height").value="";
        document.querySelector("#weight").value="";
    }else{
        // alert(`Height: ${height}, Weight: ${weight}`);
        height=height/100;
        let bmi=(weight/Math.pow(height,2)).toFixed(1);
        // alert(`BMI : ${bmi}`);
        let res=document.getElementById('results');
        res.innerHTML=`<p> BMI: ${bmi} </p>`;
        // res.setAttribute("style","font-style:sans-serif")
    }

});