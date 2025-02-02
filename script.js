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

let firstNum, operator, secondNumber;

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