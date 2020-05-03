const readlineSync = require('readline-sync');
var firstNum = readlineSync.questionInt(" Please enter first number: ")
var secondNum = readlineSync.questionInt(" Please enter second number: ")
var selectedOperator = readlineSync.question(" What operation would you like to perform: add, sub, mul, div, quit: ")

function addTwoNumbers(num1 , num2){
return " Adding first number " + num1 + " with second number " + num2 + " equals: " + (num1 + num2);
}

function subTwoNumbers( num1 , num2){
    return " Subtracting first number " + num1 + " from second number " + num2 + " equals: " + (num1 - num2);
}
function mulTwoNumbers( num1 , num2){
    return " Multiplying first number " + num1 + " with second number " + num2 + " equals: " + (num1 * num2);
}

function divTwoNumbers(num1, num2){
    return " Dividing first number " + num1 + " with second number " + num2 + " equals: " + (num1 / num2);
}
function quitCalc(){
    return  "Thank you for using this Calculator"
}

if(selectedOperator == "add" ){
console.log(addTwoNumbers(firstNum , secondNum))
}else if(selectedOperator == "sub"){
console.log(subTwoNumbers(firstNum , secondNum))
}else if(selectedOperator == "mul"){
console.log(mulTwoNumbers(firstNum , secondNum))
}else if(selectedOperator == "div"){
console.log(divTwoNumbers(firstNum , secondNum))
}else if(selectedOperator == "quit"){
    console.log(quitCalc())
}

