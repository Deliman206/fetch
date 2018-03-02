'usestrict';
//localStorage needs to be fed an array of objects with properties name and score.
var content=JSON.parse(localStorage.getItem('scores'));
var newUser=JSON.parse(localStorage.getItem('currentUser'));
var scoreSpace=document.getElementById('yourscore');
//converts score and name into the correct format for storage.
scoreSpace.textContent=newUser.score;

function storage(name,score,level)
{
  this.name=name;
  this.level=level;
  this.score=score;
}
scoreData.textContent=newUser.score;
var table=document.getElementById('Table');
for(var i=0; i<content.length&&i<10;i++)
{
  var tableRow=document.createElement('tr');
  console.log(tableRow);
  var nameData=document.createElement('td');
  nameData.textContent=content[i].name;
  console.log(tableRow);
  var scoreData=document.createElement('td');
  scoreData.textContent=content[i].score;
  var levelData=document.createElement('td');
  levelData.textContent=content[i].level;
  console.log(tableRow);
  tableRow.appendChild(nameData);
  console.log(tableRow);
  tableRow.appendChild(levelData);
  tableRow.appendChild(scoreData);
  table.appendChild(tableRow);
}
content.push(storage(newUser.name,newUser.level,newUser.score));
localStorage.setItem('scores',JSON.stringify(content));