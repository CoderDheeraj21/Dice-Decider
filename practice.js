var randomImageNumber1 = Math.floor(Math.random()*6)+1;

var randomImageNumber2 = Math.floor(Math.random()*6)+1;

var randomImage1 = "./images/dice"+randomImageNumber1+".png";

var randomImage2 = "./images/dice"+randomImageNumber2+".png";

document.querySelector(".img1").setAttribute("src", randomImage1);

document.querySelector(".img2").setAttribute("src", randomImage2);

if(randomImage1>randomImage2){
    document.querySelector("h1").innerHTML = "Player1 Wins";
}
else if(randomImage1<randomImage2){
    document.querySelector("h1").innerHTML = "Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "It's a tie";
}