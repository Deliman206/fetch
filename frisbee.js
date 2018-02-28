'use strict';
var frisbeeObj = new Frisbee();
var canvas = document.getElementById('frisbee');
var context = canvas.getContext('2d');

function Frisbee() {
  this.state = {
    x: 250,
    y: 0
  };
  this.score = 0;
  this.image = new Image();
  this.image.src = 'img/fris_4.png';
}

Frisbee.prototype.launch = function(interval) {
  setInterval(()=>{
    //Starting launch coords
    var xPos = 0;
    var yPos = 250;

    context.clearRect(0, 0, 900 ,500);
    context.drawImage(this.image, this.state.x, this.state.y, 60, 25);
  }, interval);
};

Frisbee.prototype.draw = function(interval) {
  setInterval(()=>{
    context.clearRect(0, 0, 900 ,500);
    context.drawImage(this.image, this.state.x, this.state.y, 60, 25);
    this.state.y += 1;
  }, interval);
};

frisbeeObj.draw(50);

