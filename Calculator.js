var readlineSync = require('readline-sync');

console.log("Welcome to FSW-105 Simple Calulator Program!")

var firstNum = readlineSync.questionInt("Please enter your first number: ");
var secondNum = readlineSync.questionInt("Please enter your second number: ");
var userOperation = readlineSync.question("Please enter the operation to perform (add, sub, mul, div): ");



//Write four mathematical functions
//A function that adds two numbers and returns the result
function mySubtraction(num1, num2){
    return num1 - num2;
}

//A function that multiplies two numbers and returns the result
function myMultiplying(num1, num2){
    return num1 * num2;
}

//A function that divides two numbers and returns the result
function myDividing(num1, num2){
    return num1 / num2;
}

//A function that subtracts two numbers and returns the result
function myAddition(num1, num2){
    return num1 + num2;
}

//Function Definition for the Calculator Program
function myCalculator(number1, number2, enteredOperation){
    switch (enteredOperation){
        case '+':
            result = number1 + number2;
        console.log("Adding Number-1: " + number1 + " with Number-2: " + number2 + " results in: " + myAddition(number1, number2));
        break;

        case '-':
            result = number1 - number2;  
        console.log("Subtracting Number-1: " + number1 + " with Number-2: " + number2 + " results in: " + mySubtraction(number1, number2));
        break;

        case '*':
            result = number1 * number2;
        console.log("Multiplying Number-1: " + number1 + " with Number-2: " + number2 + " results in: " + myMultiplying(number1, number2));
        break;

        case '/':
            result = number1 / number2;
        console.log("Dividing Number-1: " + number1 + " with Number-2: " + number2 + " results in: " + myDividing(number1, number2));
        break; 

        default:
        console.log("Unknown Operation. Please try again!");
        break;
    }    
    
}

//Function Call to execute the Calculator Program
myCalculator(firstNum, secondNum, userOperation);