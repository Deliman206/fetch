'use strict';
var object = document.getElementById('obstacles');
var ctx3 = object.getContext('2d');

var obstacles = [];
function Obstacle(name, filePath, score){
    var obstacleState = {
        x : 1000,
        y : 350,
        // Hard code width by looking at image dimentions 
    };
    this.name = name;
    this.filePath = filePath;
    this.score = score
    // this.renderImage();
    obstacles.push(this);
}
// Obstacle.prototype.renderImage = function(){
//     var tempImg = this.name;
//     tempImg = new Image(10,5);
//     tempImg.src = this.filePath;  
// }
Obstacle.prototype.drawObstacle= function(){
    var tempImg = this.name;
    tempImg = new Image(10,5);
    tempImg.src = this.filePath;  
    tempImg.onload = function(){
        setInterval(function(){
            ctx3.clearRect(0,0,900,500);
            ctx3.drawImage(tempImg, this.obstacleState.x, this.obstacleState.y);
            this.obstacleState.x--;    
        },10)
    }
}
var fireH = new Obstacle (fireH, 'img/fireHydrant.png', 15);
//create rand num
//render obj on screen at rand num 

console.log(obstacles[0]);
obstacles[0].drawObstacle();