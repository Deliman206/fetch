'use strict';
var canvas = document.getElementById('frisbee');
var context = canvas.getContext('2d');

var frisbee = function(name, score) {
  this.name = name;
  this.score = score;
  this.filePath = 'img/fris_4.png';
  this.state = {
    x: 0,
    y: 0
  };
  this.renderFrisbee();
  this.drawFrisbee();
};

frisbee.prototype.renderFrisbee = function() {
  this.name = new Image(5, 5);
  this.name.src = this.filePath;
};

frisbee.prototype.drawFrisbee = function() {

};
