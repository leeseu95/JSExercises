/*Write a JavaScript function to round up an integer value to the next multiple of 5. Go to the editor
Test Data :
console.log(int_round5(32));
35
console.log(int_round5(137));
140*/

function int_round5(num) {
    let tempNum = num/5;

    let resNum = Math.ceil(tempNum) * 5;

    return resNum;
}

console.log(int_round5(32))
console.log(int_round5(137))