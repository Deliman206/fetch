'use strict';
var object = document.getElementById('obstacles');
var ctx3 = object.getContext('2d');

var obstacles = [];
function Obstacle(name, filePath, score){
    this.obstacleState = {
        x : 1000,
        y : 350,
        // Hard code width by looking at image dimentions 
    };
    this.name = name;
    this.filePath = filePath;
    this.score = score
    this.renderImage();
    obstacles.push(this);
}
Obstacle.prototype.renderImage = function(){
    
    this.name = new Image(10,5);
    this.name.src = this.filePath;  
}
Obstacle.prototype.drawObstacle= function(interval){
    // this.name.onload = function(){
            setInterval(()=>{
            ctx3.clearRect(0,0,900,500);
            ctx3.drawImage(this.name, this.obstacleState.x, this.obstacleState.y);
            this.obstacleState.x--;    
        },interval)
    // }
}
var fireH = new Obstacle ('fireH', 'img/fireHydrant.png', 15);
//create rand num
//render obj on screen at rand num 
// var randomNum = //
// function that does  this ===> obstacles[0].drawObstacle(5);
//     but makes it random and shows up with space inbetween, so many obstacles on the screenLeft



// console.log(obstacles[0]);
obstacles[0].drawObstacle(50);