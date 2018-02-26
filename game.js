'usestrict';
var falling=false;
var stage=document.getElementById('stage');
var ctx=stage.getContext('2d');
console.log('working');
ctx.fillStyle='#3e94ff';
ctx.fillRect(0,0,stage.width,stage.height*.6666);
ctx.fillStyle='#009e00';
ctx.fillRect(0,stage.height*.6666,stage.width,stage.height/3);

function screenUpdate(){
  ctx.clearRect(0,0,stage.width,stage.height);
  ctx.fillStyle='#3e94ff';
  ctx.fillRect(0,0,stage.width,stage.height*.6666);
  ctx.fillStyle='#009e00';
  ctx.fillRect(0,stage.height*.6666,stage.width,stage.height/3);
  ctx.fillStyle='#000000';
  playerCharacter.render();
  ctx.fillStyle='#000000';
  testObstacle.render();
}
function gridCreation(){
  console.log(stage.height);
  console.log(stage.width);
  this.gridWidth=stage.width/10;
  this.gridHeight=stage.height/10;
}

function Player(x,y,height,width){
  this.x=x;
  this.y=y;
  this.width=width;
  this.height=height;
  this.gridY=(this.y-80)/-10;
  this.gridX=this.x/10;
  this.gridwidth=width/10;
  this.gridheight=height/10;
  this.render=function(){
    ctx.fillRect(this.x,this.y,this.height,this.width);
    this.gridY=(this.y-80)/-10;
    this.gridX=this.x/10;
  };
}

function Obstacle(x,y,height,width){
  this.x=x;
  this.y=y;
  this.width=width;
  this.height=height;
  this.gridY=(this.y-80)/-10;
  this.gridX=this.x/10;
  this.gridwidth=width/10;
  this.gridheight=height/10;
  this.render=function(){
    this.x-=10;
    ctx.fillRect(this.x,this.y,this.height,this.width);
    this.gridY=(this.y-80)/-10;
    this.gridX=this.x/10;
    if(this.gridY===playerCharacter.gridY&&this.gridX===playerCharacter.gridX)
    {
      console.log('You Lose!');
    }
  };
}
var testObstacle=new Obstacle(900,80,40,40);
var playerCharacter=new Player(0,80,40,20);
window.onkeydown=function(event){
  if(falling===true){
    playerCharacter.y+=10;
    screenUpdate();
    if (playerCharacter.y===80)
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
    //Down arrow
    case 40:
      playerCharacter.y-=10;
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
window.onload=function()
{
  gridCreation();
};