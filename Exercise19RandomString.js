/*Write a JavaScript function that generates a string id (specified length) of random characters. Go to the editor
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
Click me to see the solution.*/

var myString = "";
var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
var numberChars = 10;

function generateRandomString(stringParam, charListParam, numberParam) {
    for(let i = 0; i < numberParam; i ++) {
        stringParam += charListParam.charAt(Math.floor(Math.random() * charListParam.length));
    }
    // console.log(Math.floor(Math.random()) * 100)
    // console.log(stringParam)
    return stringParam
}

myString = generateRandomString(myString, charList, numberChars)

console.log(myString);