var stopBackground = false;
var stopPlayer = false;
var stopObstacles = false;

var playerRight = playerState.x+player.width;
var playerBottom = playerState.y+player.height;
var playerTop = playerState.y;
var playerLeft = playerState.x;

function loadGame(){
  stopBackground= true;
  stopPlayer= true;
  setInterval(renderRandomObstacle,spawnRate)//How frequently Obstacle is generated
  cannonLaunch();
  //Define Projectile Box
var projectileRight = projectile.startState.x+projectile.width;
var projectileBottom = projectile.startState.y+projectile.height;
var projectileTop = projectile.startState.y;
var projectileLeft = projectile.startState.x;
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
    console.log(projectileBottom);
    if(playerTop <= projectileBottom ){ //|| playerBottom >= projectileTop
      console.log('you win');
    }
    clearInterval(interval);
  }
},5)
}

