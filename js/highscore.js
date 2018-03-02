'usestrict';
//localStorage needs to be fed an array of objects with properties name and score.
var content= new Array;
var scoreSpace=document.getElementById('yourscore');

if(localStorage.getItem('currentuser')){
var newUser=JSON.parse(localStorage.getItem('currentuser'))
scoreSpace.textContent=newUser.score;
content.push(newUser);
}else
{newUser=new Object;}

if(localStorage.getItem('scores')){
var oldContent=JSON.parse(localStorage.getItem('scores'));
}else

{oldContent=new Array();}

for(var i=0; i<oldContent.length;i++)
{
  content.push(oldContent[i]);
}

JSON.parse(localStorage.getItem('scores'));
//converts score and name into the correct format for storage.

function storage(name,score,level)
{
  this.name=name;
  this.level=level;
  this.score=score;
}
var table=document.getElementById('Table');
for(var i=0; i<content.length&&i<10;i++)
{
  var tableRow=document.createElement('tr');
  var nameData=document.createElement('td');
  nameData.textContent=content[i].name;
  var scoreData=document.createElement('td');
  scoreData.textContent=content[i].level;
  var levelData=document.createElement('td');
  levelData.textContent=content[i].score;
  tableRow.appendChild(nameData);
  tableRow.appendChild(levelData);
  tableRow.appendChild(scoreData);
  table.appendChild(tableRow);
}
localStorage.setItem('scores',JSON.stringify(content));
localStorage.setItem('currentuser','');