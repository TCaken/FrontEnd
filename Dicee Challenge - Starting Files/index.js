function dicee(){
    var randomVar1 = Math.floor(Math.random() * 6) + 1;
    var randomVar2 = Math.floor(Math.random() * 6) + 1;

    var filename1 = "images/dice" + randomVar1 + ".png";
    var filename2 = "images/dice" + randomVar2 + ".png";

    var listItem =  document.getElementsByTagName("img");
    listItem[0].setAttribute("src", filename1);
    listItem[1].setAttribute("src", filename2);

    var result = document.querySelector(".container h1");
    if(randomVar1 === randomVar2){
        result.textContent = "🚩 Draw! 🚩";
    }
    else if(randomVar1 > randomVar2){
        result.textContent = "🚩 Player 1 Wins!";
    }
    else{
        result.textContent = "Player 2 Wins! 🚩";
    }
}