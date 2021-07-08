/*Write a JavaScript function to format a number up to specified decimal places. Go to the editor
Test Data :
console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));
"2.10"
"2.100"
"2100.00"*/

function decimals(numFloat, decimalPlaces) {
    console.log(numFloat.toFixed(decimalPlaces));
}

decimals(2.100212, 2);
decimals(2.100212, 3);
decimals(2100, 2);