let obj={
    name:{
        "full name":{
            firstname:"Ayan",
            lastname:"Das"
        }
    }
}
console.log(obj.name["full name"].firstname)

let obj2=new Object();// Singelton Object using constructor
// console.log(obj2);// Prints an empty object
// obj2.id="abc123";
// obj2.age=21;
// obj2.isMarried=false;
// console.log(obj2)


let obj3={1:"a",2:"b"};
let obj4={3:"c",4:"d"};

// let obj5={...obj3,...obj4};
// let obj5={obj3,obj4};    //  SHALLOW COPY
// console.log(obj5);
// console.log(obj6);
// obj5.obj4[3]="k"     // Changes both obj5 and obj4
// console.log(obj3)
// console.log(obj5)
// console.log(obj4)


//assign(target,source1,source2,..)-----> Creates Shallow Copy
let copyObj=Object.assign({},obj3,obj4)// Takes values from obj3,obj4 as source and puts it in target {} empty object,then returns it...Shallow copy stores ref if object:{object}
copyObj[1]="k" 
console.log(copyObj)
console.log(obj3)

// console.log(Object.keys(copyObj))
// console.log(Object.values(copyObj))

// console.log(obj.hasOwnProperty("name"))
