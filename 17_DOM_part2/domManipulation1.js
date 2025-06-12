/*
getElementsByClassName(),getElementById(),querySelector(),setAttribute()--> If same attribute is set again last one will overide the first one,getAttribute(),textContent='',innerText='',innerHTML='',.style.anyCSS style,
            ** Browser Console **
document.getElementById('ifrst-child').id
first-child

document.getElementsByClassName('heading')

let header=document.querySelector('.heading')
undefined

header.setAttribute('style','font-size: 50px;')
undefined

header.innerText='Yes I am modified'
'Yes I am modified'

header.getAttribute('style')
'font-size: 50px;'

let myUl=document.querySelector('ul')
undefined

myUl.children[1].innerText='Hey i am 2nd child of myUl'
'Hey i am 2nd child of myUl'

document.querySelector('#first-child').style.backgroundColor='green'
'green'
*/

/* *** Important *** 

 1)     .querySelectorall()--> provides NODE-LIST[]

 NODE-List != Array
 Node-list has for-each Methdo for itearate over every selected element. 

 2)     .getElementsByClassName()--> Provides HTML-COLLECTION[]

 HTML-COLLECTION[] has NO for-each method .
 convert it to Array to access all the elements.
 
*/ 

//  convert it to Array to access all the elements-->
    //  Array.from()-->This method converts any method to an array.
//   Array.from(HTML.COllECTION[]);
//   Array.from(NODE-LIST[]);

let nodeList=document.querySelectorAll('list');
nodeList[0],nodeList[1]// Values can be accessd like this also.


        //  Example //
let listCollection=document.getElementsByClassName('list')
let myArr=Array.from(listCollection)
myArr.forEach((list,index)=>{
    list.innerText=`Hi i am a LIST numer ${index}`
    list.style.color='orange'
}
)