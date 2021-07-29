/*Write a JavaScript program to test the first character of a string is uppercase or not. Go to the editor
Click me to see the solution*/

function isUpper(stringParam) {
    if(!stringParam.length) {
        console.log("String is empty, exiting function");
        return;
    }

    let tempString = stringParam.split("");

    if(tempString[0] == tempString[0].toUpperCase()) {
        return true;
    } else {
        return false;
    }
}

let myString = 'Hello';
console.log(isUpper(myString));