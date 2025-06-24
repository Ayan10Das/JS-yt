/*
The Canvas API provides a means for drawing graphics via JavaScript and the HTML <canvas> element. 
Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.
*/ 

/*
 HTMLCanvasElement.getContext() method gets that element's context—the thing onto which the drawing will be rendered.
*/ 

const canvas= document.getElementById('canvas');
const ctx= canvas.getContext('2d')// Draw '2d' stuffs

// canvas.height=window.innerHeight; Height as much as the Window
// canvas.width=window.innerWidth;  Width as much as the window


// 1)   fillRect(x,y,height,width) --> Draw rectangle

// 2)  fillStyle="any_Color"; --> Fills the rectangle with specified colour.

ctx.fillStyle='red'
ctx.fillRect(20,20,100,100);

ctx.fillStyle='blue'
ctx.fillRect(150,20,100,100);

// 3) strokeRect(x,y,height,width) -->creates HOLLOW rrectangle

ctx.strokeStyle='green'// Border-color
ctx.lineWidth= 3; // Border Width
ctx.strokeRect(20,130,100,100);

// clearRect(x,y,height,width) Clears the space. 

ctx.clearRect(29,31,80,80);

//  fillText('text',x,y)

ctx.font=' 20px arial';
ctx.fillStyle='gray'
ctx.fillText("Ayan is sexy!",300,80);

//  strokeText('text',x,y)
ctx.lineWidth=1;
ctx.strokeStyle='orange';
ctx.strokeText('Ayan is Handsome!',300,120);