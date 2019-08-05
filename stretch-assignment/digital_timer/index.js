let secondTens = document.getElementById("secondTens");
let secondOnes = document.getElementById("secondOnes");
let msHundreds = document.getElementById("msHundreds");
let msTens = document.getElementById("msTens");
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");

let times = [secondTens,secondOnes,msHundreds,msTens]; // To set timer to 0 
let digits = document.getElementsByClassName("digit"); // Each character in the Timer
let timerID; // TimerID for setInterval later. Will need global scope for later use
resetText();

// click on startbutton activates timer
startBtn.addEventListener("click", function(){
    resetText();
    timerID = setInterval(changeTime,10);
    this.disabled = true;
    resetBtn.disabled = false;
});

// sets timer to 0
resetBtn.addEventListener("click", function(){
    clearInterval(timerID)
    resetText();
    resetBtn.disabled = true;
    startBtn.disabled = false;
});

// The method that changes the timer. It is called every 10 ms, and adds 1 to the last digit (hundredths of ms)
// When it reaches 10, it will carry the 1 over to the next digit
// Once it reaches 10 seconds, the timer will stop and the text will go red.
function changeTime() {
    msTens.innerText = Number(msTens.innerText) + 1;
    checkCarry(msTens,msHundreds);
    checkCarry(msHundreds,secondOnes);
    checkCarry(secondOnes,secondTens);
    if (secondTens.innerText == 1) {
        clearInterval(timerID);
        for (let i = 0; i < digits.length; i++){
            digits[i].classList.toggle("redDigit");
        }
        startBtn.disabled = false;
    }
}

// Checks the INIT character to see if it 10. if it is, then it will carry the one into the next digit, the CARRY param.
function checkCarry(init,carry) {
    if (init.innerText == 10) { 
        init.innerText = "0";
        carry.innerText = Number(carry.innerText) + 1;
    }
}

// Resets text to 0's and black color.
function resetText(){
    for (let i = 0; i < times.length; i++){
        times[i].innerText = "0";
    }
    for (let i = 0; i < digits.length; i++){
        digits[i].classList.remove("redDigit");
    }
}