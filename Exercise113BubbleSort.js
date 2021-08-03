/*Write a JavaScript program to sort a list of elements using Bubble sort Go to the editor
According to Wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that 
repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are 
in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list
is sorted. The algorithm, which is a comparison sort, is named for the way smaller elements "bubble" to the top of
the list. Although the algorithm is simple, it is too slow and impractical for most problems even when compared 
to insertion sort. It can be practical if the input is usually in sort order but may occasionally have some
out-of-order elements nearly in position."*/

function swapPositions(arrayParam, indexA, indexB) {
    if(!arrayParam.length) {
        console.log("Array parameter is empty or undefined");
        return false;
    }

    let temp = arrayParam[indexA];
    arrayParam[indexA] = arrayParam[indexB];
    arrayParam[indexB] = temp;
}

function bubbleSort(arrayParam) {
    if(!arrayParam.length) {
        console.log("Array parameter is empty or undefined");
        return false;
    }

    let triggerSwap = true;
    let iterations = 0; //Iterations to compare Bubble Sort vs Cocktail Sort

    while(triggerSwap == true) {
        triggerSwap = false;
        iterations ++;
        for(let i = 1; i < arrayParam.length; i ++) {
            if(arrayParam[i] < arrayParam[i - 1]) {
                swapPositions(arrayParam, i, i-1);
                triggerSwap = true;
            }
        }
    }

    console.log(iterations);

    return arrayParam;
}


myArray = [-5, 0, -3, 100, 25, 3, 2, 1, 80];
console.log(bubbleSort(myArray));