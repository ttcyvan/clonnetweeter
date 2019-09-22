
function addItem(){

var teste = document.getElementById('text').value;
var color = document.getElementById('text');

if(teste == ""){
color.setAttribute('style', 'border-top:2px solid red;border-bottom:2px solid red;border-left:2px solid red;border-right:2px solid red;');
      return false;

}
else{

  var date = new Date();
  linebreak = document.createElement("br");

  var ul = document.getElementById("status");
  var candidate = document.getElementById("text");
  var li = document.createElement("div");
  li.classList.add("alert");
  li.classList.add("alert-info");
  li.setAttribute('id',candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  li.appendChild(linebreak);
  li.appendChild(document.createTextNode("Tweet posté à :"+ date.getHours()+":"+ date.getMinutes()+":"+ date.getSeconds()+" s"));
  ul.appendChild(li);
}

}

 
