function setUsername(user){
    this.user=user;
    console.log("Called")
}

function setDetails(user,email,password){
    // setUsername(user);// Calls the setUsernmae(),but it storing the user to avobe function(setUsername) calls 'this'
    setUsername.call(this,user)// Reference of setDetails() function is given inside the call(),so setUsername() stores the user to the passed refernce object not its own object.

    this.email=email;
    this.password=password;
}

const chai=new setDetails("ayan","ayan123@gmail.com","123")
// console.log(chai);// Called   setDetails { email: 'ayan123@gmail.com', password: '123' }
console.log(chai);  // Prints:
/*
setDetails {
  user: 'ayan',
  email: 'ayan123@gmail.com',
  password: '123'
}
*/ 