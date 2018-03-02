var birdsLoop = new Audio('sounds/birds.mp3');
birdsLoop.loop = true;
birdsLoop.play();
var stopBackground = false;
var stopPlayer = false;
var stopObstacles = false;
var continuePlay;
var stopProjectile = false;
var currentUser=JSON.parse(localStorage.getItem('currentuser'));
localStorage.removeItem('currentuser');
console.log(currentUser);
if(currentUser.level==='')
{currentUser.level='1';
console.log('numchump');}
if(currentUser.name==='')
{currentUser.name='chump';}
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
  var projectileRight = projectile.startState.x+projectile.image.width;
  var projectileBottom = projectile.startState.y+projectile.image.height;
  var projectileTop = projectile.startState.y;
  var projectileLeft = projectile.startState.x;
  //When to start the game
  var interval = setInterval(function(){
  if (frisbeeTimer > 100){
    stopBackground = false;
    drawScene1(startState.x,startState.y);
    drawScene2(startState2.x,startState2.y);
    stopPlayer = false;
    //When to activate Player
    window.addEventListener('keyup',keyUp);
    window.addEventListener('keydown',keyDown);
    playerState.jumptime=149;
    playerState.jumping=playerState.jumptime;
    refreshPlayer();
    renderScore();
    play();
    clearInterval(interval);
    allowScoring();
  }},5)
}
function win(){gameState.score+=50;
  clearInterval(timerFunctionID);
  playable=false;
  console.log('you win')
  clearInterval(continuePlay);
  stopBackground = true;
  stopPlayer = true;
  stopObstacles = true;
  stopProjectile = true;
  currentUser.score=gameState.score;
  console.log(currentUser);
  localStorage.setItem('currentuser',JSON.stringify(currentUser))
  setTimeout(function(){window.location.href = 'highscore.html'},1000);
}
function allowScoring(){
  continuePlay=setInterval(function(){
    projectileRight = projectile.startState.x+projectile.image.width;
    projectileBottom = projectile.startState.y+projectile.image.height;
    projectileTop = projectile.startState.y;
    projectileLeft = projectile.startState.x;
    playerRight = playerState.x+player.width;
    playerBottom = playerState.y+player.height;
    playerTop = playerState.y;
    playerLeft = playerState.x;
    if(playerTop <= projectileBottom && playerBottom >= projectileTop){
      console.log('got 1 condition')
      if(projectileLeft >= playerLeft && projectileLeft <= playerRight){win();}
      if(projectileRight>playerLeft && projectileRight<playerRight){win();}
    }
  },5);
}
