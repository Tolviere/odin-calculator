let num1 = '';
let operator = '';
let num2 = '';
let ans = null;

const display = document.querySelector('.display');
const buttonContainer = document.querySelector('.button-container');
buttonContainer.addEventListener('click', e => {
    if (e.target.parentNode.className === 'button-row') {
        let btn = e.target;

        switch(btn.className) {
            case 'num':
                ans = null;
                if (operator === '') {
                    if (btn.textContent === '.' && num1.includes('.')) return;
                    num1 += btn.textContent;
                    display.textContent = num1;
                } else {
                    if (btn.textContent === '.' && num2.includes('.')) return;
                    num2 += btn.textContent;
                    display.textContent = num2;
                }
                break;

            case 'op':
                if (num2 !== '') {
                    displayAnswer();
                    num1 = ans;
                } 

                operator = btn.textContent;
                break;

            case 'equals':
                displayAnswer();
                break;
            
            case 'clear':
                resetInput();
                ans = null;
                display.textContent = '';
        }
    }
});

function displayAnswer() {
    const decimalPlaces = 7;
    if (num2 !== '') {
        ans = operate(num1, num2, operator);
        if (typeof ans === 'number') ans = Math.round(ans * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
        display.textContent = ans;
        resetInput();
    }
}

function resetInput() {
    operator = '';
    num1 = '';
    num2 = '';
}

function operate(a, b, op) {
    a = +a;
    b = +b;

    switch(op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "mmm no thanks";
    }
    return a / b;
}