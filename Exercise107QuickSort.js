/*Write a JavaScript program to sort a list of elements using Quick sort. Go to the editor
Quick sort is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation (formally, a total order) is defined.
Click me to see the solution*/

function quickSort(arrayParam) {
    // if(arrayParam == undefined || !arrayParam.length) {
    //     console.log("Array is either empty or no array was passed. Exiting function");
    //     return;
    // }
    if(arrayParam.length <= 1) {
        return arrayParam;
    } else {
        var newArray = [];
        var lessThanPivot = [];
        var moreThanPivot = [];
        var pivotVal = arrayParam.pop();

        for(let i = 0; i < arrayParam.length; i ++) {
            if(arrayParam[i] <= pivotVal) {
                lessThanPivot.push(arrayParam[i]);
            } else {
                moreThanPivot.push(arrayParam[i]);
            }
        }

        return newArray.concat(quickSort(lessThanPivot), pivotVal, quickSort(moreThanPivot));
    }
}
// console.log(partitionQuickSort([1, -2, 5, 100, -3, -7, 53, 8, 10], 0, 8))
console.log(quickSort([1, -2, 5, 100, -3, -7, 53, 8, 10]))