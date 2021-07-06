/*Write a function for searching JavaScript arrays with a binary search. Go to the editor
Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.*/

var arrayNum = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23]
var numberExample = 6

function findPositionBinary(arrayParam, numberNeeded) {
    var halfPosition = Math.floor(arrayParam.length/2);
    // console.log(halfPosition);

    if(arrayParam[halfPosition] == numberNeeded) {
        return halfPosition;
    } else if(arrayParam.length === 1) {
        return null;
    }

    if(arrayParam[halfPosition] < numberNeeded) {
        var arrayTemp = arrayParam.slice(halfPosition + 1);
        var numberRes = findPositionBinary(arrayTemp, numberNeeded);
        if(numberRes == null) {
            return null;
        } else {
            return halfPosition + 1 + numberRes
        }
    } else {
        var arrayTemp = arrayParam.slice(0, halfPosition);
        return findPositionBinary(arrayTemp, numberNeeded);

    }
}

console.log(findPositionBinary(arrayNum, numberExample));