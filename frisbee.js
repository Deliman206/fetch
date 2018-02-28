'use strict';
var canvas = document.getElementById('frisbee');
var ctx = canvas.getContext('2d');

var frisbee = function(name, filePath, score) {
  this.name = name;
  this.filePath = filePath;
  this.score = score;
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