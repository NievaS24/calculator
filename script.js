function add (a, b) {
    return a + b;
}

function subtract (a, b) {
	return a - b;
};

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

let firstNum, op, secondNum;

function operate (op, num1, num2) {
    let result
    switch (op) {
        case "+":
            result = add(num1, num2);
            break;
    
        case "-":
            result = subtract(num1, num2);
            break;
    
        case "*":
            result = multiply(num1, num2);
            break;
    
        case "/":
            result = divide(num1, num2);
            break;
    }
    return result;
}

function populateDisplay (num) {
    if (display.textContent == "ERROR") display.textContent = "";
    display.textContent += num;
}

let result = 0;
const display = document.querySelector("#display");
const btns = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

btns.forEach(btn => btn.addEventListener("click", () => populateDisplay(btn.textContent)));

operator.forEach(btn => btn.addEventListener("click", () => {
    op = btn.textContent;
    firstNum = parseFloat(display.textContent);
    display.textContent = "";
}));

clear.addEventListener("click", () => {
    display.textContent = "";
    firstNum = null;
    op = null;
    secondNum = null;
    result = null
});
equal.addEventListener("click", () => {
    secondNum = parseFloat(display.textContent);
    if (op != null && firstNum != null && secondNum != null){
        result = operate(op, firstNum, secondNum);
        if (isNaN(result)) {
            display.textContent = "ERROR";
        } else {
            if (Number.isInteger(result)) {
                display.textContent = result;
            } else {
                display.textContent = result.toFixed(2);
            }
        }
    } else {
        display.textContent = "ERROR";
    }
});
