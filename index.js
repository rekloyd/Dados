

// DADO 1

var randomNumber1 = Math.floor(Math.random()*6) + 1; // NÚMERO RANDOM DEL 1 AL 6

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImgSource = "images/" + randomDiceImage; // RUTA PARA LA IMAGEN RANDOM

var image1 = document.querySelectorAll("img")[0];



image1.setAttribute("src", randomImgSource);


//DADO 2

var randomNumber2 = Math.floor(Math.random()*6) + 1; // NÚMERO RANDOM DEL 1 AL 6

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImgSource2 = "images/" + randomDiceImage2; // RUTA PARA LA IMAGEN RANDOM

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImgSource2);



//LÓGICA DEL JUEGO

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 has won!";
}else if(randomNumber2>randomNumber1){
 	document.querySelector("h1").innerHTML = "Player 2 has won!";
}else{
 	document.querySelector("h1").innerHTML = "It'a Draw!";
}