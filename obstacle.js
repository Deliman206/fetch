'use strict';
var object = document.getElementById('obstacles');
var ctx3 = object.getContext('2d');

var obstacles = [];
function Obstacle(name, filePath, score){
    this.name = name;
    this.filePath = filePath;
    this.score = score
    this.states= [];
    this.offScreen = 0;
    // this.resetState();
    this.renderImage();
    obstacles.push(this);
}
Obstacle.prototype.initialState = function(){
   return {
        x : 1000,
        y : 350,
        // Hard code width by looking at image dimentions 
    };
}
Obstacle.prototype.renderImage = function(){
    this.name = new Image();
    this.name.src = this.filePath;  
}
Obstacle.prototype.drawObstacle= function(time){
    var i = this.states.length;
    this.states.push(this.initialState());
    var interval = 
        setInterval(()=>{
        ctx3.clearRect(this.states[i].x,this.states[i].y,this.name.width+1,this.name.height);
        ctx3.drawImage(this.name, this.states[i].x, this.states[i].y);
        this.states[i].x--;    
    },time)
    return interval;
}
var fireH = new Obstacle ('fireH', 'img/sprites/hydrant.png', 15);
var mailbox = new Obstacle('mailbox', 'img/sprites/mailbox.png', 10);
//create rand num
//render obj on screen at rand num 

// function that does  this ===> obstacles[0].drawObstacle(5);
//     but makes it random and shows up with space inbetween, so many obstacles on the screenLeft

function renderRandomObstacle(){
    var randomNum = Math.floor(Math.random()*obstacles.length);
    console.log(randomNum);
    var tempNum = randomNum;
    var interval = obstacles[tempNum].drawObstacle(5);
    setTimeout(function(){
        clearInterval(interval);
        obstacles[tempNum].offScreen++;
    }, 8000);// How long it takes Obstacle to cross screen
}
(function(){
    setInterval(renderRandomObstacle,2000)//How frequently Obstacle is generated
})();


//collision detector will use iffScreen as index pointer
//this is first index to check for collisions and then check to the end or length