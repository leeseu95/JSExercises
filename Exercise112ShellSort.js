/*Write a JavaScript program to sort a list of elements using Shell sort. Go to the editor
According to Wikipedia "Shell sort or Shell's method, is an in-place comparison sort. 
It can be seen as either a generalization of sorting by exchange (bubble sort) or sorting by insertion
(insertion sort). The method starts by sorting pairs of elements far apart from each other,
then progressively reducing the gap between elements to be compared. Starting with far apart elements 
can move some out-of-place elements into position faster than a simple nearest neighbor exchange."*/

function swapPositions(arrayParam, firstIndex, swapIndex) {
    const temp = arrayParam[firstIndex];
    arrayParam[firstIndex] = arrayParam[swapIndex];
    arrayParam[swapIndex] = temp;
}

function shellSort(arrayParam) {
    if(!arrayParam.length || arrayParam.length == 1) {
        console.log("Array is undefined or is only 1 element. Nothing to sort.");
        return arrayParam;
    }

    let increment = Math.floor(arrayParam.length/2); // 9 -> 4
    while(increment > 0) {
        for(let i = increment; i < arrayParam.length; i ++) {
            let tempIndex = i;
            let temp = arrayParam[i];

            while(tempIndex >= increment && arrayParam[tempIndex - increment] > temp) {
                arrayParam[tempIndex] = arrayParam[tempIndex - increment];
                tempIndex -= increment;
            }
            arrayParam[tempIndex] = temp;
        }

        increment = Math.floor(increment/2); //Divide our increemnt by 2 until it reaches 0 increments
    }

    return arrayParam;
}

myArray = [-5, 0, -3, 100, 25, 3, 2, 1, 80];
console.log(shellSort(myArray));