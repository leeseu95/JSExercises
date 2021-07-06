/*Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers*/

var numberExample1 = 2154;
var numberExample2 = 458;

function findGCD(exampleNum1, exampleNum2) {
    if(exampleNum2 == 0) {
        return exampleNum1;
    }

    return findGCD(exampleNum2, exampleNum1 % exampleNum2);
}

console.log(findGCD(numberExample1, numberExample2));

