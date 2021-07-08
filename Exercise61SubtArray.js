/*Write a JavaScript function to subtract elements from one another in an array. 
[7, 3, 2, -1]
3
*/

function subtArray(paramArray) {
    if(!paramArray.length) {
        console.log("Array Param is empty");
        return;
    } else if (paramArray.length == 1) {
        return paramArray[0];
    }

    let numRes = paramArray[0];

    for(let i = 1; i < paramArray.length; i++) {
        numRes -= paramArray[i];
    }

    return numRes;
}


console.log(subtArray([7, 3, 2, -1]));
console.log(subtArray([7]));
console.log(subtArray([]));