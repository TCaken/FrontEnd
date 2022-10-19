var buttonList = document.querySelectorAll("button.drum")

for(var i = 0; i < buttonList.length; i++){
    buttonList[i].addEventListener("click", handleClick);
}

function handleClick(){
    alert("I got click");
}

function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function divide(num1,num2){
    return num1 / num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function calculator(num1,num2, operator){
    return operator(num1, num2);
}