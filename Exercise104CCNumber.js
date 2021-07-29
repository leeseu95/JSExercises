/*Write a JavaScript program to check a credit card number. Go to the editor
Click me to see the solution*/

function checkCCNumber(numberParam) {
    var regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
    return regexp.test(numberParam);
}

console.log(checkCCNumber("378282246310006"));