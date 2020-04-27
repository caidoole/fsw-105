// //#1 addition
function addTwoNumbers(num1, num2) {

    var total = num1 + num2;

    console.log(total)
}
addTwoNumbers(2, 3)



// //#2 return the largest of three

function getLargestValue(num1, num2, num3) {
    return (Math.max(num1, num2, num3));
}

var largest = getLargestValue(4, 1, 2);

console.log(largest)



// //#3 one number odd or even
// var num1 = readlineSync.questionInt('Please enter first number: ');
function oddsOrEven(num1) {
    if (num1 % 2 === 0) {
        result = "even"
    } else {
        result = "odd"
    }

    console.log(result)
}
oddsOrEven(7)

//#4 string acceptance => 20 charaters, return the string connected to itself - if its over 20 return 1st half

function stringReturn(str) {

    var tempStr = '';

    if(str.length <= 20)
    {
        tempStr = str + str;
        console.log("Here's the new string doubled: " + tempStr)
    } else {
        tempStr =  str.substr(0, (str.length/2) );
        console.log("Here's the new string halved: " + tempStr)
    }
}

stringReturn("Hello, my name is Em")
