/*Write a JavaScript program to get the first n Fibonacci numbers. Go to the editor
Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.*/

var arrayExample = [0, 1];
var numExample = 6;

function fibonacciSeq(numParam, arrayParam) {
    if(numParam == arrayParam.length) {
        return arrayParam;
    } else {
        arrayParam.push(arrayParam[arrayParam.length - 1] + arrayParam[arrayParam.length - 2]);
        // console.log(arrayParam);
        return fibonacciSeq(numParam, arrayParam);
    }
}

console.log(fibonacciSeq(numExample, arrayExample));