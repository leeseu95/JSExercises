/*1. Write a JavaScript program that accept two integers and display the larger*/

const prompt = require('prompt-sync')(); //Function for prompt to require an input

function checkLargerInt() {
    //Get two numbers from our User;
    console.log("Please input your first number");
    var num1 = prompt();
    console.log("Please input your second number");
    var num2 = prompt();

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(num1 > num2) {
        console.log("Larger number is : " + num1);
    } else if (num1 < num2) {
        console.log("Larger number is : " + num2);
    } else if (num1 == num2) {
        console.log("Both numbers are the same");
    } else {
        console.log("One of the numbers is null or unacceptable, cannot compare");
    }
}

checkLargerInt()