/*Write a JavaScript program for binary search. Go to the editor
Sample array : [0,1,2,3,4,5,6]
console.log(l.br_search(5)) will return '5'*/

var exampleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var exampleWanted = 2;

function binarySearch(arrayParam, keyParam, leftIndex, rightIndex) {
    if(leftIndex > rightIndex) {
        return false;
    }
    var middle = Math.floor((leftIndex + rightIndex)/2);
    if(arrayParam[middle] == keyParam) {
        return middle;
    } else if(keyParam > arrayParam[middle]) {
        return binarySearch(arrayParam, keyParam, middle + 1, rightIndex);
    } else if(keyParam < arrayParam[middle]) {
        return binarySearch(arrayParam, keyParam, leftIndex, middle - 1)
    }
}

console.log(binarySearch(exampleArray, exampleWanted, 0, exampleArray.length))