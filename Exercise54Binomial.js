/*Write a JavaScript program to evaluate binomial coefficients. Go to the editor
Note :
Binomial coefficient : According to Wikipedia - In mathematics, binomial coefficients are a family of positive integers that occur as coefficients in the binomial theorem. They are indexed by two nonnegative integers; the binomial coefficient indexed by n and k. Under suitable circumstances the value of the coefficient is given by the expression :
binomial coefficients
Arranging binomial coefficients into rows for successive values of n, and in which k ranges from 0 to n, gives a triangular array called Pascal's triangle. 
Test Data :
console.log(binomial(8,3));
console.log(binomial(10,2));
Output :
56
45*/

function factorial(num) {
    if(num > 0) {
        if(num == 0) {
            return 1
        } else {
            let temp = 1;
            for(let i = num; i > 0; i --) {
                temp *= i;
            }
            return temp;
        }
    }
}

function binomial(n, m) {
    if(typeof(n) != 'number' || typeof(m) != 'number') {
        console.log("Inputs are not numbers");
    } else {
        return (factorial(n) / (factorial(m) * (factorial(n-m))));
    }
}

console.log(binomial(8,3));
console.log(binomial(10,2));