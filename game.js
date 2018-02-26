'usestrict';
var falling=false;
var stage=document.getElementById('stage');
var ctx=stage.getContext('2d');
var dogX=0;
var dogY=80;
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
  ctx.fillRect(dogX,dogY,20,20);
  ctx.fillStyle='#000000';
  testObstacle.render();
}

function Obstacle(x,y){
  this.x=x;
  this.y=y;
  this.render=function(){
    this.x-=10;
    ctx.fillRect(this.x,this.y,40,40);
  };
}
var testObstacle=new Obstacle(900,80);

window.onkeydown=function(event){
  if(falling===true){
    dogY+=10;
    screenUpdate();
    if (dogY===80)
    {
      falling=false;
    }
  }
  else{
    var keyPressed=event.keyCode;
    switch(keyPressed){
    //Right arrow
    case 39:
      dogX+=5;
      break;
    //Left arrow
    case 37:
      dogX-=5;
      break;
    //Down arrow
    case 40:
      dogY-=5;
      break;
    //Up arrow
    case 38:
      dogY=40;
      falling=true;
      break;
    default:
      break;
    }}
  screenUpdate();
};
