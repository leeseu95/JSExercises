/*Write a JavaScript program to sort a list of elements using the Selection sort algorithm. Go to the editor
The selection sort improves on the bubble sort by making only one exchange for every pass through the list.*/

function swapPositions(arrayParam, firstIndex, swapIndex) {
    const temp = arrayParam[firstIndex];
    arrayParam[firstIndex] = arrayParam[swapIndex];
    arrayParam[swapIndex] = temp;
}

function selectionSort(arrayParam) {
    if(!arrayParam.length || arrayParam.length == 1) {
        console.log("Array is undefined or is only 1 element. Nothing to sort.");
        return arrayParam;
    }

    let tempIndex;
    let swapTrigger;
    for(let i = 0; i < arrayParam.length; i ++) {
        swapTrigger = false;
        tempIndex = i;

        for(let j = i + 1; j < arrayParam.length; j ++) {
            if(arrayParam[j] < arrayParam[tempIndex]) {
                tempIndex = j;
                swapTrigger = true;
            }
        }

        if(swapTrigger == true) {
            swapPositions(arrayParam, tempIndex, i);
        }
    }

    return arrayParam;
}

myArray = [-5, 0, -3, 100, 25, 3, 2, 1, 80];
console.log(selectionSort(myArray));