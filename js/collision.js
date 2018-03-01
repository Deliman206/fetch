function checkCollisionWithObstacle(num){
  for (var i= obstacles[num].offScreen; i< obstacles[num].states.length; i++){
    var playerRight = playerState.x+player.width;
    var playerBottom = playerState.y+player.height;
    var playerTop = playerState.y;
    var playerLeft = playerState.x;
    var obstacleRight = obstacles[num].states[i].x+obstacles[num].name.width;
    var obstacleLeft = obstacles[num].states[i].x;
    var obstacleBottom = obstacles[num].states[i].y+obstacles[num].name.height;
    var obstacleTop = obstacles[num].states[i].y;
    var condition1 =false;
    var condition2 =false;
    if(playerRight >= obstacleLeft && playerRight <= obstacleRight ){   
      obstacles[num].states[i].hasCollided = true;
      condition2 = true;
    }
    if(obstacles[num].states[i].hasCollided === true) {
      if(playerBottom < obstacleTop) {
        condition1 = true;
      }
    }
    if (condition1){
      if(obstacles[num].states[i].scored===false){

      gameState.score+=obstacles[num].score;
      scoreUp(obstacles[num].score);
      console.log(Math.floor(gameState.score));
      condition1=false;
      condition2=false;
      obstacles[num].states[i].scored=true;}
    }
    if(!condition1 && condition2){
      console.log('you lose');
      loss();
    }
  }
}