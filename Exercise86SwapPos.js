/*Write a JavaScript function to move an array element from one position to another.

Test Data:
console.log(move([10, 20, 30, 40, 50], 0, 2));
[20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2));
[10, 20, 30, 50, 40]*/

function swapPos(arrayParam, indexStart, indexEnd) {
    if(!arrayParam.length) {
        console.log("Array is empty, exiting function");
        return false;
    }

    if(indexStart < 0) {
        indexStart += arrayParam.length;
    }
    if(indexEnd < 0) {
        indexEnd += arrayParam.length;
    }

    let tempValue = arrayParam[indexStart];
    arrayParam[indexStart] = arrayParam[indexEnd];
    arrayParam[indexEnd] = tempValue;

    return arrayParam;
}

console.log(swapPos([10, 20, 30, 40, 50], 0, 2))

console.log(swapPos([10, 20, 30, 40, 50], -1, -2))
