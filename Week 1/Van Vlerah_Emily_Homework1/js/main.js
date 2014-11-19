/*
     Name: Emily Van Vlerah	
     Date: 10-29-2014
     Class & Section:  WIA-1014
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message
*/
if(Modernizr.canvas){
		
		var modern = document.getElementById("modernizr");
		var mdr = modern.getContext("2d");
		
		mdr.font = "16pt Georgia black";
		mdr.fillText("Canvas is supported!", 20, 20);
		
		
		}else {
			
			mdr.font = "16pt Georgia black";
			mdr.fillText("Canvas is not supported.", 20, 20);
			
			};	
	

/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
/*
*/
					
	var theCanvas = document.getElementById("Canvas1");
				
	if(theCanvas){
					
		var ctx = theCanvas.getContext("2d");
			if(ctx){	
			
				//Details on the Rectangle
				ctx.strokeStyle = "black";
				ctx.fillStyle = "blue";
				ctx.lineWidth =5;
														
				//The rectangle
				//strokeRect(posX, posY, Width, Height)
				ctx.strokeRect(0 , 0, 50, 100);	
				ctx.fillRect(0, 0, 50, 100);
			}
			
	}

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

	var theCanvas = document.getElementById("Canvas2");
					
		if(theCanvas){
						
			var ctx = theCanvas.getContext("2d");
				if(ctx){	
				
						ctx.strokeStyle= "black";
						ctx.fillStyle = "red";
						ctx.lineWidth = 5;
				
						var degrees = 360;
						var radians = (degrees/180)*Math.PI;
						
						ctx.beginPath();
						//arc(x, y, r, sA, eA, CW or CCW)
						ctx.arc(50, 50, 30, 0, radians);
						ctx.fill();
						ctx.stroke();
				}
				
		}


/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
	var theCanvas = document.getElementById("Canvas3");
					
		if(theCanvas){
						
			var ctx = theCanvas.getContext("2d");
				if(ctx){	
				
					ctx.strokeStyle = "green";
					ctx.fillStyle= "yellow";
					ctx.lineWidth = 5;
						
						//Draw an open path
					ctx.beginPath();
					ctx.moveTo(100,100);
					ctx.lineTo(150,25);
					ctx.lineTo(200,100);
					ctx.lineTo(275,125);
					ctx.lineTo(200,175);
					ctx.lineTo(200,250);
					ctx.lineTo(150,180);
					ctx.lineTo(100,250);
					ctx.lineTo(100,175);
					ctx.lineTo(50,125);

					
					ctx.closePath();
					ctx.fill();
					ctx.stroke();
						
				}
				
		}



/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
	var theCanvas = document.getElementById("Canvas4");
					
		if(theCanvas){
						
			var ctx = theCanvas.getContext("2d");
				if(ctx){
					ctx.strokeStyle = "purple";
					ctx.lineWidth = 5;
					
					//Half Circle
					ctx.beginPath();
					ctx.arc(300,150,100, 0, 1 * Math.PI, true);
					ctx.stroke();		
							
					
					//scalloped edges
					ctx.beginPath();
					ctx.moveTo(199,150);
					
					//quadraticCurveTo(cx, cy, x, y)
					ctx.quadraticCurveTo(250, 90, 270, 150);
					ctx.quadraticCurveTo(300, 90, 340, 150);
					ctx.quadraticCurveTo(350, 90, 400, 150);
					ctx.stroke();
				}
				
		};

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can say whatever you would like in any color.

********************************************/

//Draw text here
	var theCanvas = document.getElementById("Canvas5");
					
		if(theCanvas){
			var ctx = theCanvas.getContext("2d");
				if(ctx){
					var theString = "Hello World, I'm Emily.";			
											
					//Detail for the Text
					ctx.font="26pt Georgia";
					ctx.fillStyle = "rgb(44, 71, 98)";
						
					ctx.fillText(theString, 20, 160);
				}
		}
						
			

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
	var theCanvas = document.getElementById("Canvas6");
						
			if(theCanvas){
				var ctx = theCanvas.getContext("2d");
					if(ctx){
						
						var  srcImg = document.getElementById("img1");
						
							//Image as is.
							ctx.drawImage(srcImg, 0, 0);
							
							//Shrunk image by 50%
							//drawImage(srcImg, dx, dy, dw, dh)
							ctx.drawImage(srcImg, 0, 1250, 1650, 544);
							
							//Slice a section of the logo out and draw that onto the canvas.
							//drawImage(srcImg, sx, sy, sw, sh, dx, dy, dw, dh)
							ctx.drawImage(srcImg, 292, 156, 812, 364, 0, 2000, 500, 400 );
						
						}
			}


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

	var theCanvas = document.getElementById("Canvas7");
						
			if(theCanvas){
				var ctx = theCanvas.getContext("2d");
					if(ctx){
						
						ctx.save();
						
						ctx.strokeStyle = "green";
						ctx.fillStyle = "rgb(246, 129, 111)";
						ctx.lineWidth = 10;
						
						//Half Circle
						ctx.beginPath();
						ctx.arc(300,150,100, 0, 1 * Math.PI, false);
						ctx.stroke();
						
						//Line
						ctx.beginPath();
						ctx.moveTo(200,150);
						ctx.lineTo(220,150);
						ctx.closePath();
						ctx.stroke();
						
						//line
						ctx.beginPath();
						ctx.moveTo(380,150);
						ctx.lineTo(400,150);
						ctx.closePath();
						ctx.stroke();
						
						//half cirlce with fill
						ctx.beginPath();
						ctx.arc(300,150,80, 0, 1 * Math.PI, false);
						ctx.stroke();
						ctx.fill();
						
						ctx.restore();
						ctx.save();
						
						//Text
						var theString = "Watermelon Tastes Great!";			
											
						//Detail for the Text
						ctx.font="26pt Georgia";
						ctx.fillStyle = "rgb(255, 110, 0)";
						
							
						ctx.fillText(theString, 100, 110);
						
						ctx.restore();
						
						//little circles
						ctx.strokeStyle = "black";
						ctx.fillStyle = "black";
						ctx.lineWidth =5;
						
						var degrees = 360;
						var radians = (degrees/180)*Math.PI;
						
						ctx.beginPath();
						ctx.arc(275, 200, 5, 0, radians);
						ctx.fill();
						ctx.stroke();
						
						ctx.beginPath();
						ctx.arc(325, 200, 5, 0, radians);
						ctx.fill();
						ctx.stroke();
						
						ctx.beginPath();
						ctx.arc(350, 175, 5, 0, radians);
						ctx.fill();
						ctx.stroke();
						
						ctx.beginPath();
						ctx.arc(250, 175, 5, 0, radians);
						ctx.fill();
						ctx.stroke();
						
						}
			}
	