/*Write a JavaScript program to calculate the factorial of a number. Go to the editor
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120*/

var exampleNum = 10;

function recursiveNum(numParam) {
    if(numParam == 1){
        return numParam;
    }

    return numParam * recursiveNum(numParam - 1);
}

console.log(recursiveNum(exampleNum));