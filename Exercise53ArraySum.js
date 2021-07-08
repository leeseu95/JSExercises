/*Write a JavaScript function to calculate the sum of values in an array. Go to the editor
Test Data :
console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));
Output :
6
-97
6*/

function sumArray(param) {
    if(!param.length) {
        console.log("Array is Empty");
        return;
    }

    let resultSum = 0;
    for(let i = 0; i < param.length; i++) {
        if(isNaN(param[i])) {
            continue;
        } else {
            resultSum += param[i];
        }
    }
    return resultSum;
}

console.log(sumArray([1,2,3]));
console.log(sumArray([100,-200,3]));
console.log(sumArray([1,2,'a',3]));
console.log(sumArray([]));