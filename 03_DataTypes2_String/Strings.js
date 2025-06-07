let str=new String('ayandas')
//console.log(str.substring(0,4));//__proto__ -->shows the object in built methods
// console.log(str.substring(4,0));// Same answer cause it swaps if(start>end)
//Substring does not obey the -indexes
//console.log(str.slice(-3))// -1 means last index,prints(das)
console.log(typeof str) 


let nam="hi te s h h c b";
let modName= nam.slice(-10);
// console.log(modName)

// console.log(nam.includes('hites'));
console.log(nam.split(' ',5))
let h=nam.split(' ',5)
console.log(nam)
// console.log(nam.replace("hite","ayan"))

// const newNam="  ay an ay   "
// console.log(newNam.replaceAll("ay",""))// Replaces all 'ay' not only the first one

// console.log(newNam.trim());// Removes the leading and trailing white spaces(" ")

