'use strict';
var canvas = document.getElementById('frisbee');
var context = canvas.getContext('2d');

function frisbee(name, score) {
  this.name = name;
  this.score = score;
  this.filePath = 'img/fris_4.png';
  this.state = {
    x: 0,
    y: 0
  };
  this.render();
  this.draw();
}

frisbee.prototype.render = function() {
  this.name = new Image(5, 5);
  this.name.src = this.filePath;
};

frisbee.prototype.draw = function(interval) {
  setInterval(()=>{
    context.clearRect(0,0,900,500);
    context.drawImage(this.name, this.state.x, this.state.y);
  },interval);
};
var fris = new frisbee('Frisbee', 100);
fris.render();
fris.draw(20);