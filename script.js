const numberInput = document.getElementById('number-input');
const checkBtn = document.getElementById('check-btn');
const displayResult = document.querySelector('.display-result');

function checkNumber(num){
    let inputValue = numberInput.value.trim();
    numberInput.value = '';
    
    if(isNaN(num) || num <= 1){
        displayResult.textContent = `Please is not a valid number`;
        displayResult.style.color = 'red';
        return
    }
}

let isPrimeNumber = true;

for (let i = 2; i < num.length; i++) {

}