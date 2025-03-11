var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var p1 = document.querySelector(".img1");
var p2 = document.querySelector(".img2");
var pic;
var pic2;
switch(randomNumber1){
    case 1: pic = "./images/dice1.png"
    break;


    case 2: pic = "./images/dice2.png"
    break;

    
    case 3: pic = "./images/dice3.png"
    break;

    case 4: pic = "./images/dice4.png"
    break;

    case 5: pic = "./images/dice5.png"
    break;

    case 6: pic = "./images/dice6.png"
    break;
}

switch(randomNumber2){
    case 1: pic2 = "./images/dice1.png"
    break;


    case 2: pic2 = "./images/dice2.png"
    break;

    
    case 3: pic2 = "./images/dice3.png"
    break;

    case 4: pic2 = "./images/dice4.png"
    break;

    case 5: pic2 = "./images/dice5.png"
    break;

    case 6: pic2 = "./images/dice6.png"
    break;
}
p1.setAttribute("src", pic);
p2.setAttribute("src", pic2);

if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 1 Wins 🚩";
} 
else if (randomNumber2 > randomNumber1) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins 🚩";
} 
else {
    document.querySelector(".container h1").innerHTML = "It's a Draw! 🤝";
}
