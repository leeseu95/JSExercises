/*Write a JavaScript function to check to check whether a variable is numeric or not. Go to the editor
Test Data :
console.log(is_Numeric(12));
console.log(is_Numeric('abcd'));
console.log(is_Numeric('12'));
console.log(is_Numeric(' '));
console.log(is_Numeric(1.20));
console.log(is_Numeric(-200));
Output :
true
false
true
false
true
true*/

function is_Numeric(param) {
    if(!param) {
        console.log("Input is either empty or invalid")
        return;
    } 

    return (!isNaN(parseFloat(param)) && isFinite(param));
}

console.log(is_Numeric(12));
console.log(is_Numeric('abcd'));
console.log(is_Numeric('12'));
console.log(is_Numeric(' '));
console.log(is_Numeric(1.20));
console.log(is_Numeric(-200));

// console.log(Number(' '));