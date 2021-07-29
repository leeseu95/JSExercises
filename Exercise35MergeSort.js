/*Write a  sort program in JavaScript. Go to the editor
Sample array : [34,7,23,32,5,62]
Sample output : [5, 7, 23, 32, 34, 62]*/

var exampleArray = [34, 7, 23, 32, 5, 62, 77];

function Arrays(arrayA, arrayB) {
    const tempArray = [];

    while(arrayA.length && arrayB.length){
        tempArray.push(arrayA[0] < arrayB[0] ? arrayA.shift() : arrayB.shift());
    }

    while(arrayA.length) {
        tempArray.push(arrayA.shift());
    }

    while(arrayB.length) {
        tempArray.push(arrayB.shift());
    }

    return tempArray;
}

function Sort(arrayParam) {
    if(arrayParam.length <= 1) {
        return arrayParam;
    }

    var middle = Math.floor(arrayParam.length/2);

    var arrayLeftHalf = arrayParam.slice(0, middle);
    var arrayRightHalf = arrayParam.slice(middle, arrayParam.length)

    var sortedLeftHalf = Sort(arrayLeftHalf);
    var sortedRightHalf = Sort(arrayRightHalf);

    return Arrays(sortedLeftHalf, sortedRightHalf);
}

console.log(Sort(exampleArray));