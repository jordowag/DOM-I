let secondTens = document.getElementById("secondTens");
let secondOnes = document.getElementById("secondOnes");
let msHundreds = document.getElementById("msHundreds");
let msTens = document.getElementById("msTens");
let times = [secondTens,secondOnes,msHundreds,msTens];
let digits = document.getElementsByClassName("digit");
let timerID;
resetText();


let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");

startBtn.addEventListener("click", function(){
    resetText();
    timerID = setInterval(changeTime,10);
    this.disabled = true;
    resetBtn.disabled = false;
});

resetBtn.addEventListener("click", function(){
    clearInterval(timerID)
    resetText();
    resetBtn.disabled = true;
    startBtn.disabled = false;
});


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

function checkCarry(init,carry) {
    if (init.innerText == 10) { 
        init.innerText = "0";
        carry.innerText = Number(carry.innerText) + 1;
    }
}

function resetText(){
    for (let i = 0; i < times.length; i++){
        times[i].innerText = "0";
    }
    for (let i = 0; i < digits.length; i++){
        digits[i].classList.remove("redDigit");
    }
}