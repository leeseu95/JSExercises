/*Write a JavaScript program to sort a list of elements using Comb sort. Go to the editor
The Comb Sort is a variant of the Bubble Sort. Like the Shell sort, the Comb Sort increases the gap 
used in comparisons and exchanges. Some implementations use the insertion sort once the gap is less 
than a certain amount. The basic idea is to eliminate turtles, or small values near the end of the list, 
since in a bubble sort these slow the sorting down tremendously. Rabbits, large values around the beginning 
of the list, do not pose a problem in bubble sort.
In bubble sort, when any two elements are compared, they always have a gap of 1. T
he basic idea of comb sort is that the gap can be much more than 1.*/

function swapPositions(arrayParam, indexA, indexB) {
    if(!arrayParam.length) {
        console.log("Array Parameter is empty or undefined");
        return false;
    }

    let temp = arrayParam[indexA];
    arrayParam[indexA] = arrayParam[indexB];
    arrayParam[indexB] = temp;
}

function combSort(arrayParam) {
    if(!arrayParam.length) {
        console.log("Array Parameter is empty or undefined");
        return false;
    }

    let gapValue = arrayParam.length;
    let swapTrigger = true;

    while(swapTrigger == true) {
        gapValue = Math.floor(gapValue / 1.25);

        if(gapValue <= 1) {
            gapValue = 1;
            swapTrigger = false;
        }

        let i = 0;
        while ((i + gapValue) < (arrayParam.length)) {
            if(arrayParam[i] > arrayParam[i + gapValue]) {
                swapPositions(arrayParam, i, i + gapValue);
                swapTrigger = true;
            }
            i ++;
        }
    }

    return arrayParam;
}

myArray = [-5, 0, -3, 100, 25, 3, 2, 1, 80];
console.log(combSort(myArray));