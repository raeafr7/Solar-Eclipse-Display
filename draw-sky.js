function setup() { "use strict";
  var canvas = document.getElementById('myCanvas');
  var slider1 = document.getElementById('slider1');
  slider1.value = 50; //slider start at 1/4
  var slider2 = document.getElementById('slider2');
  slider2.value = 50; //slider start at 1/4
	
	function draw() {
		var context = canvas.getContext('2d');
		canvas.width = canvas.width;
		var dx = slider1.value;
		var dy = slider2.value;
		
		function DrawAxes(color) {
			  context.strokeStyle=color;
			  context.beginPath();
			  // Axes in middle of canvas
			  context.moveTo(200,0);context.lineTo(200,400);
			  context.moveTo(0,200);context.lineTo(400,200);
			  context.stroke();
		}
		
		function DrawSun() {
				context.beginPath();
				context.fillStyle='#ff4500'; //orangered
				context.arc(200, 0, 20, 0, 2 * Math.PI);
				context.stroke();
				context.fill();
		}	
	  
		function DrawMoon() {
				context.beginPath(); //moon shape
				context.fillStyle='#c0c0c0';
				context.arc(0, 200, 20, 0, 2 * Math.PI);
				context.stroke();
				context.fill();

				context.beginPath(); //big crater
				context.fillStyle='#778899';
				context.arc(7, 206, 4, 0, 2 * Math.PI);
				context.stroke();
				context.fill();
				
				context.beginPath(); //little crater
				context.fillStyle='#778899';
				context.arc(11, 199, 1.75, 0, 2 * Math.PI);
				context.stroke();
				context.fill();
		}
		
		function DrawCloud(x, y, color) {
			context.beginPath();
			context.strokeStyle = '#797874';
			context.fillStyle = color;
			context.arc(x, y, 5, 0, 2 * Math.PI);
			context.arc(x+5, y, 5, 0, 2 * Math.PI);
			context.arc(x+10, y, 5, 0, 2 * Math.PI);
			context.arc(x+5, y-5, 5, 0, 2 * Math.PI);
			context.stroke();
			context.fill()
		}
		
		function DrawStars(x, y) {
			context.beginPath();
			context.strokeStyle = 'gold';
			context.moveTo(x,y);
			context.lineTo(x+5,y+10);
			context.lineTo(x+7,y);
			context.lineTo(x,y+7);
			context.lineTo(x+10,y+7);
			context.lineTo(x,y);
			context.stroke();
		}
		
		function CheckIntersect() {
			if (dx == 200 && dy == 200) {
				return true;
			} else {
				return false;
			}
		}
		
		function CheckIsClose() {
			if ((170 < dx) && (dx < 220)) {
				if ((170 < dy) && (dy < 220)) {
					return true;
				}
			} else {
				return false;
			}
		}
		
		if (CheckIntersect()) {
			context.fillStyle='#191970'; //midnight blue
			context.fillRect(0,0,canvas.width,canvas.height);
			
			for (let i = 0; i < 20; i++) {
				DrawStars(Math.floor(Math.random()*390), Math.floor(Math.random()*390))
			}
			
		} else if (CheckIsClose()) {
			context.fillStyle='#daa520'; //goldenrod
			context.fillRect(0,0,canvas.width,canvas.height);
			
			for (let i = 0; i < 10; i++) {
				DrawCloud(Math.floor(Math.random()*390), Math.floor(Math.random()*390),'#ffe4b5')
			}
			
			for (let i = 0; i < 20; i++) {
				DrawStars(Math.floor(Math.random()*390), Math.floor(Math.random()*390))
			}
			
			
		} else {
			context.fillStyle='DeepSkyBlue';
			context.fillRect(0,0,canvas.width,canvas.height);
			
			for (let i = 0; i < 10; i++) {
				DrawCloud(Math.floor(Math.random()*390), Math.floor(Math.random()*390),'#f5fffa')
			}
			
		}
		
		DrawAxes("black");
		
		context.save();
		context.translate(0, dy);
		DrawSun();
		context.restore();
		context.translate(dx, 0);
		DrawMoon();
		context.restore();
		contetxt.restore();
		
	}
	
	slider1.addEventListener("input",draw);
	slider2.addEventListener("input",draw); // elements defined above
	draw();
}

window.onload = setup;