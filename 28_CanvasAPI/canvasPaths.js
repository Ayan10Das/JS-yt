
//  Paths 

const canvas= document.getElementById('canvas');
const ctx= canvas.getContext('2d');


//  Downface Triangle
ctx.beginPath();
ctx.moveTo(50,50);// Initial point(50,50)
ctx.lineTo(150,50);//  Line upto point(150,50)
ctx.lineTo(100,150);// 2nd middle point line
// ctx.lineTo(50,50);
ctx.closePath();// Connect to initial point
ctx.stroke();// Draw hollow Shape.
ctx.fill()//  Draw it

//  Upface Triangle

ctx.beginPath();
ctx.moveTo(200,50);
ctx.lineTo(250,150);
ctx.lineTo(150,150);
ctx.closePath()
ctx.fill();

//  Rectangle

ctx.fillRect(300,50,200,100);

//  Arc
// context.arc(x,y,radius,startAngle,endAngle,clockWise(t/f))
//  x --> Middle of the arc.

ctx.beginPath();
// ctx.moveTo(0,200)
// ctx.lineTo(100,200);
ctx.arc(100,200,30,0,Math.PI*2,true);
ctx.stroke();