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
      loss()}
    // playable=false;
  }
}

      // if(condition2 && condition3) {
      //   if(condition1) {
      //     console.log('All conditions true');
      //     obstacles[num].hasCollided = true;
      //     condition1 = false;
      //     condition2 = false;
      //     condition3 = false;
      //   } else {
      //     console.log('conditions 2 and 3 true');
      //     obstacles[num].hasCollided = true;
      //     condition1 = false;
      //     condition2 = false;
      //     condition3 = false;
      //   }
      
    


// if(playerState.x+player.width-obstacles[num].states[i].x>-2 && playerState.x+player.width-obstacles[num].states[i].x<2){
    //   // console.log('Collision x!');
    //   playerState.collided=true;
    //   setTimeout(function(){
    //     playerState.collided=false;
    //   },25);
    // }
    // if(playerState.y+player.height < obstacles[num].states[i].y && playerState.x+player.width === obstacles[num].states[i].x + obstacles[num].width){
    //   console.log('We hit! y')
    // }

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
  //   if(obstacles[num].states[i].x+obstacles[num].width<playerState.x+player.width&&obstacles[num].states[i].x+obstacles[num]>playerState.x+player)
  //   {condition1=true
  //   console.log('condition1');};
  //  if(obstacles[num].states[i].x<playerState.x+player.width&&obstacles[num].states[i].x>playerState.x+player.width)
  //  {condition2=true
  // console.log('condition2');};
  //  if((condition1===true)||(condition2===true))
  //   { console.log('cleared!')
  //     if((playerState.y-+height)<(obstacles[num].states[i].y))
  //       {
  //         gameState.score+=obstacles[num].score
  //         console.log(gameState.score);
  //       }
  //   }    