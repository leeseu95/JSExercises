/*Write a JavaScript program to check whether a number is even or not.*/

var numExample = -151;

function isEven(numParam) {
    if(numParam == 0) {
        return true;
    } else if (numParam < 0) {
        return isEven(Math.abs(numParam));
    } else if (numParam == 1) {
        return false;
    } else {
        return isEven(numParam - 2);
    }
}

console.log(isEven(numExample));