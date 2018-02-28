'use strict';
var frisbeeObj = new Frisbee();
var canvas = document.getElementById('frisbee');
var context = canvas.getContext('2d');

function Frisbee() {
  this.state = {
    x: 250,
    y: 0
  };
  this.image = new Image();
  this.image.src = 'img/fris_4.png';
}

Frisbee.prototype.launch = function() {
  //Starting launch coords
  this.state.x = 0;
  this.state.y = 250;  
  //Ending launch coords
  var endX = 400;
  var endY = -50;
  var interval = setInterval(()=>{
    context.clearRect(0, 0, 900 ,500);
    context.drawImage(this.image, this.state.x, this.state.y, 60, 25);
    if(this.state.x < endX) { this.state.x += 5; }
    if(this.state.y > endY) { this.state.y -= 5; }
    if(this.state.x >= endX && this.state.y <= endY) {
      clearInterval(interval);
    }
  }, 5);



  
};

//Draws the frisbee at (x:400, y:0), slowly falls to ground
Frisbee.prototype.draw = function() {
  const ground = 400;
  this.state.x = 400;
  this.state.y = 0;

  var interval = setInterval(()=>{
    context.clearRect(0, 0, 900, 500);
    context.drawImage(this.image, this.state.x, this.state.y, 60, 25);
    this.state.y += 1;
    //If frisbee has hit the ground = stop execution
    if(this.state.y === ground) { clearInterval(interval); }
  }, 10);
};

frisbeeObj.launch();
//setTimeout(frisbeeObj.draw(), 5);
//frisbeeObj.draw();
