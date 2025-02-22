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
                if (operator === '') {
                    ans = null;
                    num1 += btn.textContent;
                    display.textContent = num1;
                } else {
                    num2 += btn.textContent;
                    display.textContent = num2;
                }
                break;

            case 'op':
                if (num1 !== '' && num2 !== '') {
                    ans = operate(num1, num2, operator);
                    display.textContent = ans;
                    resetInput();
                } 
                if (ans && num1 === '') {
                    num1 = ans;
                }
                operator = btn.textContent;
                break;

            case 'equals':
                ans = operate(num1, num2, operator);
                display.textContent = ans;
                resetInput();
                break;
            
            case 'clear':
                resetInput();
                display.textContent = '';
        }
    }
});

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
    return a / b;
}