/*Write a JavaScript program to compute the exponent of a number. Go to the editor
Note : The exponent of a number says how many times the base number is used as a factor.
82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.*/

var exponentExample = 3;
var baseExample = 8;

function recursionExponent(baseParam, expParam) {
    if(expParam == 1) {
        return baseParam;
    } else {
        return baseParam * recursionExponent(baseParam, expParam - 1);
    }
}

console.log(recursionExponent(baseExample, exponentExample));