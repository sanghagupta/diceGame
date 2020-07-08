function generateRandomNumber(){
  var n=Math.random();
  n=(n*6)+1;
  n=Math.floor(n);
  var image="images/dice"+n+".png";
  return image;
}

function changeImage(){

  console.log("changing image1");
  var image1=generateRandomNumber();
  document.querySelector(".img1").setAttribute("src",image1);

  console.log("changing image2");
  var image2=generateRandomNumber();
  document.querySelector(".img2").setAttribute("src",image2);
}


// on page refresh the result will change. 
//You can also put a Button on HTML and keep the below piece of code in a
//function that will be call on the button click

var n1=Math.floor(Math.random()*6+1);
var image1="images/dice"+n1+".png";
document.querySelector(".img1").setAttribute("src",image1);

var n2=Math.floor(Math.random()*6+1);
var image1="images/dice"+n2+".png";
document.querySelector(".img2").setAttribute("src",image1);

if(n1>n2)
  document.querySelector("h1").textContent="Player 1 Won !";
else if(n2>n1)
  document.querySelector("h1").textContent="Player 2 Won !";
else
  document.querySelector("h1").textContent="Hey it's a TIE !!";
