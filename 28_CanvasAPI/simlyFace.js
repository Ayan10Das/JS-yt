const canvas= document.getElementById('canvas');
const ctx= canvas.getContext('2d');

//  ARC



// ctx.beginPath();
// ctx.moveTo(0,canvas.height / 2);
// ctx.lineTo(canvas.width,canvas.height / 2)
// ctx.stroke();
ctx.beginPath();

const heightX=canvas.height /2;
const widthY=canvas.width /2;

ctx.arc(widthY,heightX,150,0,Math.PI * 2,true)// Outer Arc.
//  It moves the pen to the to the outer circle laayer

//  Move to smile
ctx.moveTo(widthY+100,heightX)// It moves the pen to simily circle area
// draw smile
ctx.arc(widthY,heightX,100,0,Math.PI,false);

// Move to left eye
ctx.moveTo(widthY-60,heightX-60)
//Draw left eye

ctx.arc(widthY-70,heightX-60,10,0,Math.PI * 2,true);

// Move to right eye
ctx.moveTo(widthY+90,heightX-60)
// Draw right eye

ctx.arc(widthY+80,heightX-60,10,0,Math.PI * 2,true);


ctx.stroke();