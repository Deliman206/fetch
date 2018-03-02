'usestrict';
//localStorage needs to be fed an array of objects with properties name and score.
var content= new Array;
var scoreSpace=document.getElementById('yourscore');
var newUser=JSON.parse(localStorage.getItem('currentuser'));
var oldContent=JSON.parse(localStorage.getItem('scores'))
console.log(oldContent);
if(oldContent )
content.push(newUser);
for(var i=0; i<oldContent.length;i++)
{
  content.push(oldContent[i]);
}
JSON.parse(localStorage.getItem('scores'));
//converts score and name into the correct format for storage.
scoreSpace.textContent=newUser.score;

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
  console.log(tableRow);
  var nameData=document.createElement('td');
  nameData.textContent=content[i].name;
  console.log(tableRow);
  var scoreData=document.createElement('td');
  scoreData.textContent=content[i].level;
  var levelData=document.createElement('td');
  levelData.textContent=content[i].score;
  console.log(tableRow);
  tableRow.appendChild(nameData);
  console.log(tableRow);
  tableRow.appendChild(levelData);
  tableRow.appendChild(scoreData);
  table.appendChild(tableRow);
}
localStorage.setItem('scores',JSON.stringify(content));
localStorage.setItem('currentuser','');