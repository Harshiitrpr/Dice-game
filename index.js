var firstNumber = Math.floor(Math.random() * 6) + 1; // Tried and tested!

var secondNumber = Math.floor(Math.random() * 6) + 1; // Tried and tested!

var firstDice = "images/dice" + firstNumber + ".png";
var secondDice = "images/dice" + secondNumber + ".png";

var images = document.querySelectorAll("img");

images[0].setAttribute("src", firstDice);

images[1].setAttribute("src", secondDice);


if( firstNumber > secondNumber){
  document.querySelector("h1").innerHTML = "✌Player 1 Wins!"
}

else if( firstNumber < secondNumber ){
  document.querySelector("h1").innerHTML = "Player 2✌ Wins!"
}

else {
  document.querySelector("h1").innerHTML = "Oops! Draw😅"
}
