console.log('calculator js is loaded')

var displayNumber = 0;
var rememberedNumber = 0;
var currentFunc = '';

function pressButton(number){
    console.log('button ' + number)
    displayNumber = displayNumber * 10 + number;

    console.log('display number is now ', displayNumber)
    showDisplayNumber();
}

function showDisplayNumber(){
    var display = document.getElementById('displayNumberBox')

    display.innerHTML = displayNumber;
}

function clearDisplay(){
    displayNumber = 0;
    rememberedNumber = 0;
    showDisplayNumber();
}

function addPressed(){
    rememberedNumber = displayNumber;
    displayNumber = 0;
    currentFunc = '+'
    showDisplayNumber();
}

function subPressed(){
    rememberedNumber = displayNumber;
    displayNumber = 0;
    currentFunc = '-';
    showDisplayNumber();
}

function mulPressed(){
    rememberedNumber = displayNumber;
    displayNumber = 0;
    currentFunc = '*';
    showDisplayNumber();
}

function divPressed(){
    rememberedNumber = displayNumber;
    displayNumber = 0;
    currentFunc = '/';
    showDisplayNumber();
}

function equalsPressed(){
    if (currentFunc == ''){

    }
    else if (currentFunc == '+'){
        displayNumber = rememberedNumber + displayNumber;
    }

    else if (currentFunc == '-'){
        displayNumber = rememberedNumber - displayNumber;
    }
    else if (currentFunc == '*'){
        displayNumber = rememberedNumber * displayNumber;
    }
    else if (currentFunc == '/'){
        displayNumber = rememberedNumber / displayNumber;
    }

    showDisplayNumber();
}