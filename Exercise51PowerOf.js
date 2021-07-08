/*Write a JavaScript function to test if a number is a power of 2. Go to the editor
Test Data :
console.log(power_of_2(16));
console.log(power_of_2(18));
console.log(power_of_2(256));
Output :
true
false
true*/

function power_of_n(n, num) {
    if(typeof(n) != 'number' || typeof(num) != 'number') {
        console.log("Your inputs are not numbers");
        return;
    }

    let tempNum = 0;
    let tempCounter = 1;
    while(tempNum < num) {
        tempNum = Math.pow(n, tempCounter);
        if (tempNum == num) {
            return true;
        }
        tempCounter ++;
    }
    return false;
} 

console.log(power_of_n(3, 9));
console.log(power_of_n(3, 81));
console.log(power_of_n(3, 256));
console.log(parseInt(25.25, 10));