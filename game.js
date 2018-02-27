'usestrict';
var obstacleTypes=new Array;
var contact=false;
var falling=false;
var stage=document.getElementById('stage');
var ctx=stage.getContext('2d');
console.log('working');
//Background Image (this becomes invisible)
ctx.fillStyle='#3e94ff';
ctx.fillRect(0,0,stage.width,stage.height*.6666);
ctx.fillStyle='#009e00';
ctx.fillRect(0,stage.height*.6666,stage.width,stage.height/3);

//State property to be added to Positioning State
var state=
{
  score:0,
};

//Refresh the screen
function screenUpdate(){
  ctx.clearRect(0,0,stage.width,stage.height);

  //Background Image (this becomes invisible)
  ctx.fillStyle='#3e94ff';
  ctx.fillRect(0,0,stage.width,stage.height*.6666);
  ctx.fillStyle='#009e00';
  ctx.fillRect(0,stage.height*.6666,stage.width,stage.height/3);
  ctx.fillStyle='#000000';

  //Draws the Dog (this will be the Dog Image)
  playerCharacter.render();
  ctx.fillStyle='#000000';

  //Test if Character hit an Obstacle
  testObstacle.collisionGridMaker;
  testObstacle.render();
}

//Create the grid and map the Canvas, will need for collision detection
//this could be State Based
function gridCreation(){
  this.gridWidth=stage.width/10;
  this.gridHeight=stage.height/10;
}

//Constructor for Character (this should be an Obj Literal)
function Player(x,y,height,width){
  this.x=x;
  this.y=y;
  this.width=width;
  this.height=height;
  this.gridY=(this.y-90)/10;
  this.gridX=this.x/10;
  this.collisionGrid=([coordinates(this.gridX,this.gridY),coordinates(this.gridX+1,this.gridY)]);
  this.render=function(){
    ctx.fillRect(this.x,this.y,this.height,this.width);
    this.gridY=(this.y-90)/10;
    this.gridX=this.x/10;
    this.collisionGrid=([coordinates(this.gridX,this.gridY),coordinates(this.gridX+1,this.gridY)]);
  };
}

//Obstacle constructor
//Grid properties could be State based
function Obstacle(x,y,obstacleType){
  this.x=x;
  this.y=y;
  this.pointValue=obstacleTypes[obstacleType].pointValue;
  this.width=obstacleTypes[obstacleType].width;
  this.height=obstacleTypes[obstacleType].height;
  this.gridY=(this.y-80)/10;
  this.gridX=this.x/10;
  this.movespeed=obstacleTypes[obstacleType].movespeed;
  this.obstacleGrid=new Array;
  this.render=function(){
    this.collisionGrid=obstacleTypes[obstacleType].obstacleGridConstructor(this.gridX-1,this.gridY);
    this.x-=this.movespeed;
    ctx.fillRect(this.x,this.y,this.height,this.width);
    this.gridY=(this.y-80)/-10;
    this.gridX=this.x/10;
    for (var i=0;i<this.collisionGrid.length;i++)
    {
      for (var j=0;j<playerCharacter.collisionGrid.length;j++)
      {
        if(this.collisionGrid[i][0]===playerCharacter.collisionGrid[j][0])
        {
          if(this.collisionGrid[i][1]===playerCharacter.collisionGrid[j][1])
          {
            console.log('you have lost, loser.');
            contact=true;
          }
        }
      }
    }
    if(contact===true){
      console.log('You\'ve still lost.');
    }

    else if(this.gridX===playerCharacter.gridX){
      // console.log(this.pointValue);
      state.score+=this.pointValue;
      // console.log(state.score);
    }
  };
}
//Function to take x & y and return them in array
function coordinates(x,y)
{
  return[x,y];
}
window.onkeydown=function(event){
  if(falling===true){
    playerCharacter.y+=10;
    screenUpdate();
    if (playerCharacter.y===90)
    {
      falling=false;
    }
  }
  else{
    var keyPressed=event.keyCode;
    switch(keyPressed){
    //Right arrow
    case 39:
      playerCharacter.x+=10;
      break;
    //Left arrow
    case 37:
      playerCharacter.x-=10;
      break;
    //Up arrow
    case 38:
      playerCharacter.y=40;
      falling=true;
      break;
    default:
      break;
    }}
  screenUpdate();
};
//running .obstacleObstacleGrid gives you an array of 2 integer arrays which are checked against other results from .obstacleGrid. There has to be a constructor which pulls from an array of these to assign them to each entity.
function gameBoot(){
  gridCreation();
  new ObstacleTypeConstructor('mailbox',30,30,0,10,500);
  new ObstacleTypeConstructor('cat',20,10,1,30,250);
  new ObstacleTypeConstructor('rat',10,10,2,20,100);
  new ObstacleTypeConstructor('bird',10,10,2,20,100);
  new ObstacleTypeConstructor('box',20,20,3,10,100);
  new ObstacleTypeConstructor('raccoon',10,20,4,20,300);
  gridAssignment();
}
function ObstacleTypeConstructor(name,width,height,collisiongrid,movespeed,pointValue){
  this.name=name;
  this.width=width;
  this.height=height;
  this.movespeed=movespeed;
  this.pointValue=pointValue;
  obstacleTypes.push(this);
}
//Identify Which Constructors Describe
function gridAssignment(){
  obstacleTypes[0].obstacleGridConstructor=function(gridX,gridY){
    return([coordinates(gridX,gridY),coordinates(gridX+1,gridY),coordinates(gridX+2,gridY),coordinates(gridX+1,gridY+1),coordinates(gridX+1,gridY+2)]);
  };
  obstacleTypes[1].obstacleGridConstructor=function(gridX,gridY){
    return([coordinates(gridX,gridY),coordinates(gridX+1,gridY)]);
  };
  obstacleTypes[2].obstacleGridConstructor=function(gridX,gridY){
    return([coordinates(gridX,gridY)]);
  };
  obstacleTypes[3].obstacleGridConstructor=function(gridX,gridY){
    return([coordinates(gridX,gridY)]);
  };
  obstacleTypes[4].obstacleGridConstructor=function(gridX,gridY){
    return([coordinates(gridX,gridY),coordinates(gridX+1,gridY+1),coordinates(gridX+1,gridY),coordinates(gridX,gridY+1)]);
  };
  obstacleTypes[5].obstacleGridConstructor=function(gridX,gridY){
    return([coordinates(gridX,gridY),coordinates(gridX,gridY+1)]);
  };
}
gameBoot();
var testObstacle=new Obstacle(400,80,4);
testObstacle.render;
var playerCharacter=new Player(0,90,20,10);
Player.render;
//Obstacle types not being pushed onto. obstacleTypeConstructor is returning undefined.