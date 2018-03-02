'use strict';
var ctx3 = document.getElementById('obstacles').getContext('2d');
var ctxP = document.getElementById('projectile').getContext('2d');
var spawnRate = 6000;
var frisbeeTimer = 0;
var obstacles = [];
function Obstacle(name, filePath, score){
    this.name = name;
    this.filePath = filePath;
    this.score = score;
    this.states= [];
    this.offScreen = 0;
    this.hasCollided = false;
    // this.resetState();
    this.renderImage();
    obstacles.push(this);
}
function Frisbee() {
    this.startState = {
      x : 55,
      y : 340
    }; 
    this.endState = {
      x : 800,
      y : 110
    };
    //  this.slowState = {
    //    x : 400,
    //    y : 30
    //  };
   this.image = new Image();
   this.image.src = 'img/fris_4.png';
}
Obstacle.prototype.initialState = function(){
   return {
        x : 1000,
        y : 333,
        scored:false, 
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
        ctx3.clearRect(this.states[i].x,this.states[i].y,this.name.width+2,this.name.height);
        ctx3.drawImage(this.name, this.states[i].x, this.states[i].y);
        if(stopObstacles === false){
            this.states[i].x-=1.5;
        }
    },time)
    return interval;
}
Frisbee.prototype.draw = function() {
    const ground = 350;
    var intervalDrop = setInterval(()=>{
      ctxP.clearRect(this.startState.x, this.startState.y, this.image.width ,this.image.height);
      ctxP.drawImage(this.image, this.startState.x, this.startState.y);
      this.startState.y += 1;
      //If frisbee has hit the ground = stop execution
      if(this.startState.y >= ground) { clearInterval(intervalDrop); }
      if(stopProjectile === true){
        clearInterval(intervalDrop);
      }
    }, 10);
   };
Frisbee.prototype.drawDisk = function() {
 var interval = setInterval(()=>{
    frisbeeTimer++;
    
   ctxP.clearRect(this.startState.x, this.startState.y, this.image.width ,this.image.height);
   ctxP.drawImage(this.image, this.startState.x, this.startState.y);
   if(this.startState.x < this.endState.x) { this.startState.x += 1;}
   if(this.startState.y > this.endState.y) { this.startState.y -= 5/16; }
   if(this.startState.x >= this.endState.x && this.startState.y <= this.endState.y) { clearInterval(interval); this.draw(); }
   if(stopProjectile === true){
    clearInterval(interval);
  }
}, 5);
};
var projectile = new Frisbee();
var fireH = new Obstacle ('fireH', 'img/sprites/hydrant.png', 15);
var mailbox = new Obstacle('mailbox', 'img/sprites/mailbox.png', 10);
var cat = new Obstacle('cat','img/sprites/cat.png', 5);
var rat = new Obstacle('rat', 'img/sprites/rat.png', 5);
var bird = new Obstacle('bird', 'img/sprites/bird.png', 10);

function renderRandomObstacle(){
    var randomNum = Math.floor(Math.random()*obstacles.length);
    var tempNum = randomNum;
    var interval = obstacles[tempNum].drawObstacle(5);
    setTimeout(function(){
        clearInterval(interval);
        obstacles[tempNum].offScreen++;
    }, 8000);// How long it takes Obstacle to cross screen
}
//operations
// (function(){
//     setInterval(renderRandomObstacle,spawnRate)//How frequently Obstacle is generated
// })();
// projectile.drawDisk();