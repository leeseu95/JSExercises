/*Write a JavaScript program to compute the sum of an array of integers. Go to the editor
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21*/

var exampleArray = [1, 2, 3, 4, 5, 6];

function recursionSum(arrayParam) {
    if (arrayParam.length == 1) {
        return arrayParam[0];
    } else {
        return arrayParam.pop() + recursionSum(arrayParam);
    }
}

console.log(recursionSum(exampleArray));