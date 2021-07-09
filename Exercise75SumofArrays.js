/*There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]*/

var array1 = [1, 0, 2, 3, 4];
var array2 = [3, 5, 6, 7, 8, 13, 25];

function sumOfArrays(arrayParam1, arrayParam2) {
    if(!array1.length && !array2.length) {
        console.log("Both arrays are empty. Exiting function");
        return;
    }

    let tempLowestCounter = 0;
    arrayParam1.length >= arrayParam2.length ? tempLowestCounter = arrayParam2.length : tempLowestCounter = arrayParam1.length

    let resultArray = [];
    for(let i = 0; i < tempLowestCounter; i++) {
        resultArray[i] = arrayParam1[i] + arrayParam2[i];
    }

    if(tempLowestCounter < arrayParam1.length) {
        for(let i = tempLowestCounter; i < arrayParam1.length; i++) {
            resultArray[i] = arrayParam1[i];
        }
    } else if (tempLowestCounter < arrayParam2.length) {
        for(let i = tempLowestCounter; i < arrayParam2.length; i++) {
            resultArray[i] = arrayParam2[i];
        }
    }

    return resultArray;
}

console.log(sumOfArrays(array1, array2));