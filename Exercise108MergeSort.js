/*Write a JavaScript program to sort a list of elements using Merge sort.

According to Wikipedia "Merge sort (also commonly spelled mergesort) is an O (n log n) comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output."

*/

function mergeSortHelper(arrayLeft, arrayRight) {
    var tempArray = [];

    while(arrayLeft.length && arrayRight.length) {
        if(arrayLeft[0] <= arrayRight[0]) {
            tempArray.push(arrayLeft.shift());
        } else {
            tempArray.push(arrayRight.shift());
        }
    }

    while(arrayLeft.length) { //If any leftover on left array
        tempArray.push(arrayLeft.shift());
    }

    while(arrayRight.length) { //If any leftover on right array instead
        tempArray.push(arrayRight.shift());
    }

    return tempArray;
}

function mergeSort(arrayParam) {
    if(arrayParam.length == 1) {
        return arrayParam; //If the length is 1, we know that it is "sorted" so we return it
    }

    var middleIndex = Math.floor(arrayParam.length/2); //Middle index declaration
    var leftArray = arrayParam.slice(0, middleIndex); //Divide into two arrays
    var rightArray = arrayParam.slice(middleIndex, arrayParam.length);

    var sortedLeftArray = mergeSort(leftArray);
    var sortedRightArray = mergeSort(rightArray);

    return mergeSortHelper(sortedLeftArray, sortedRightArray);
}

console.log(mergeSort([1, 3, 3, 6, -2, -5, 0, 100, 85, 32]))