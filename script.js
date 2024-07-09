let display = document.getElementById('display');
let currentInput = '';
let currentOperation = null;
let previousInput = '';

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = null;
    display.value = '';
}

function remove() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function chooseOperation(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        computeResult();
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
}

function computeResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    currentOperation = undefined;
    previousInput = '';
    display.value = result;
}
function computeRoot() {
    if (currentInput === '') return;
    const current = parseFloat(currentInput);
    if (isNaN(current)) return;
    const result = Math.sqrt(current);
    currentInput = result.toString();
    display.value = currentInput;
}