const numberInput = document.getElementById('number-input');
const checkBtn = document.getElementById('check-btn');
const displayResult = document.querySelector('.display-result');

function checkNumber(){
    let num =  parseInt(numberInput.value.trim())
    
    numberInput.value = '';

    if(isNaN(num) || num <= 1){
        displayResult.textContent = `Please is not a valid number  greater than 1`;
        displayResult.style.color = 'red';
        return
    }

    let isPrimeNumber = true;

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            isPrimeNumber = false;
            break
        }
    }

       if(isPrimeNumber){
        displayResult.textContent = `${num} is a prime number`;
        displayResult.style.color = '#008000';
        return
    } 
    else{
        displayResult.textContent = `${num} is not a prime number`;
          displayResult.style.color = '#2f27ce';
          return
    } 
    
 }
    
checkBtn.addEventListener('click', checkNumber);

