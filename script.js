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
    if (display.textContent === "ERROR" || display.textContent === "Go Back to School") display.textContent = "";
    display.textContent += num;
}

function errase () {
    let array = display.textContent.split("");
    array.pop();
    display.textContent = array.join("");
}
function clearAll () {
    display.textContent = "";
    firstNum = null;
    op = null;
    secondNum = null;
    result = null
}
function setOperator (btn) {
    op = btn;
    if (display.textContent != "") firstNum = parseFloat(display.textContent);
    display.textContent = "";
}
function getResult () {
    secondNum = parseFloat(display.textContent);
    if (op != null && firstNum != null && secondNum != null){
        result = operate(op, firstNum, secondNum);
        if (isNaN(result)) {
            display.textContent = "ERROR";
        } else if (result == Infinity) {
            display.textContent = "Go Back to School";
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
}

let result = 0;
const display = document.querySelector("#display");
const btns = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");

btns.forEach(btn => btn.addEventListener("click", () => populateDisplay(btn.textContent)));

operator.forEach(btn => btn.addEventListener("click", () => setOperator(btn.textContent)));

clear.addEventListener("click", clearAll);

equal.addEventListener("click", getResult);

backspace.addEventListener("click", errase);

window.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) populateDisplay(e.key);
    if (e.key === "Backspace") errase();
    if (e.key === "Escape" || e.key === "Delete") clearAll();
    if (e.key === "+" ||e.key === "-" || e.key === "*" || e.key === "/") setOperator(e.key);
    if (e.key === "Enter" || e.key === "=") getResult();
});