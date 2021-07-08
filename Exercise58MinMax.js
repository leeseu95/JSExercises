/*Write a JavaScript function to limit a value inside a certain range. Go to the editor
Note : If the value is higher than max it will return max. and if the value is smaller than min it will return the min.
Test Data :
console.log(value_limit(7, 1, 12));
7
console.log(value_limit(-7, 0, 12));
0
console.log(value_limit(15, 0, 12));
12*/

function value_limit(num, min, max) {
    return num < min ? min : (num > max ? max : num);
}

console.log(value_limit(7, 1, 12));
7
console.log(value_limit(-7, 0, 12));
0
console.log(value_limit(15, 0, 12));