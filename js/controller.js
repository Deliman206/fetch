var stopBackground = false;
var stopPlayer = false;
var stopObstacles = false;
function loadGame(){
  stopBackground= true;
  stopPlayer= true;
  setInterval(renderRandomObstacle,spawnRate)//How frequently Obstacle is generated
  //Draw Cannon
  
  projectile.drawDisk();
  //When to start the game
  console.log(frisbeeTimer);
  var interval = setInterval(function(){
  if (frisbeeTimer > 100){
    stopBackground = false;
    drawScene1(startState.x,startState.y);
    drawScene2(startState2.x,startState2.y);
    stopPlayer = false;
    //When to activate Player
    window.addEventListener('keyup',keyUp);
    window.addEventListener('keydown',keyDown);
    playerState.jumping=playerState.jumptime;
    refreshPlayer();
    play();
    playerState.jumptime=149;
    //Start scoring!
    // renderScore();
    clearInterval(interval);
  }
},5)
}

