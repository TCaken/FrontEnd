var buttonColours = ["green","red","yellow","blue"]
var gamePattern = []
var gamePatternPointer = 0
var userClickedPattern = []
var gameStart= false;
var userButtonClick = false;
var wrongAnswer = false;
var level = 0;


function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColour = buttonColours[randomNumber];
    gamePattern.push(randomColour)

    $("#"+randomColour).fadeOut(70).fadeIn(70);
    playColourSound(randomColour)

    level += 1;
    $("#level-title").text("Level " + level);
    return gamePattern;
}

function playColourSound(colour){
    switch(colour){
        case "red":
            var audio = new Audio("sounds/red.mp3");
            audio.play();
            break;
        case "blue":
            var audio = new Audio("sounds/blue.mp3");
            audio.play();
            break;
        case "yellow":
            var audio = new Audio("sounds/yellow.mp3");
            audio.play();
            break; 
        case "green":
            var audio = new Audio("sounds/green.mp3");
            audio.play();
            break;
        default:
            console.log(colour)
    }
}

function alertWrong(){
    $("body").toggleClass("game-over")
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    setTimeout(() => {
        $("body").removeClass("game-over")
    }, 300)
}

function animatePress(colour){
    $("#" + colour).toggleClass("pressed")
    setTimeout(() => {
        $("#" + colour).removeClass("pressed")
    }, 100)
}

$(".btn").click(function(event) {
    if(userButtonClick){
        userButtonClick = false;
        var userChosenColour = event.target.id;
        playColourSound(userChosenColour)
        animatePress(userChosenColour)

        if(userChosenColour == gamePattern[userClickedPattern.length] && !wrongAnswer){
            userClickedPattern.push(userChosenColour)
            if(userClickedPattern.length == gamePattern.length){
                //Function for level started
                userClickedPattern = []
                setTimeout(() => {
                    nextSequence();
                }, 1000)
            }
        }
        else{
            // Wrong Answer Situation
            wrongAnswer = true;
            alertWrong();
            $("#level-title").text("Game over, Please press Any Key to Continue.")
            level = 0;
        }
        userButtonClick = true;
    }

    console.log(userClickedPattern)
});

$(document).on("keypress", function(event) {
    if(!gameStart){
        gameStart = true;
        nextSequence();
        userButtonClick = true;
    }
    else if(wrongAnswer){
        userClickedPattern = [];
        gamePattern = [];
        nextSequence();
        wrongAnswer = false;
        userButtonClick = true;
    }
});



