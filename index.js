
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage1="dice"+randomNumber1+".png";
var randomSource1="images/" + randomImage1;
var player1=document.querySelectorAll("img")[0];
player1.setAttribute("src",randomSource1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomSource2="images/dice"+ randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomSource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="player1 is winner";
}
else if(randomNumber2>random){
  document.querySelector("h1").innerHTML="player2 is wiiner";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
