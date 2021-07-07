/*Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor
Sample numbers : 3, -7, 2*/

const prompt = require('prompt-sync')();

function findSignProduct() {
    console.log("Please input your first number\n");
    var xParam = prompt();
    xParam = parseFloat(xParam);

    console.log("Please input your second number\n");
    var yParam = prompt();
    yParam = parseFloat(yParam);

    console.log("Please input your third number\n");
    var zParam = prompt();
    zParam = parseFloat(zParam);

    let tempNum = xParam * yParam * zParam;

    if(tempNum > 0) {
        console.log("Sign is +\n");
    } else if (tempNum < 0) {
        console.log("Sign is -\n");
    } else {
        console.log("Number is 0, no sign");
    }
}

findSignProduct();