/*Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.*/

const prompt = require('prompt-sync')();

function sortNumbers() {
    console.log("Please input your first number\n");
    var xParam = prompt();
    xParam = parseFloat(xParam);

    console.log("Please input your second number\n");
    var yParam = prompt();
    yParam = parseFloat(yParam);

    console.log("Please input your third number\n");
    var zParam = prompt();
    zParam = parseFloat(zParam);

    let tempArray = [];
    tempArray.push(xParam);
    tempArray.push(yParam);
    tempArray.push(zParam);

    tempArray.sort().reverse();
    console.log(tempArray);
}

sortNumbers();