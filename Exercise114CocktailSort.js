/*Write a JavaScript program to sort a list of elements using Cocktail shaker sort. Go to the editor
Cocktail shaker sort (also known as bidirectional bubble sort, cocktail sort, shaker sort, ripple sort, 
shuffle sort, or shuttle sort ) is a variation of bubble sort that is both a stable sorting algorithm
and a comparison sort. The algorithm differs from a bubble sort in that it sorts in both directions on 
each pass through the list. This sorting algorithm is only marginally more difficult to implement than a 
bubble sort, and solves the problem of turtles in bubble sorts. It provides only marginal performance improvements, 
and does not improve asymptotic performance; like the bubble sort, it is not of practical interest,, 
though it finds some use in education.*/

function swapPositions(arrayParam, indexA, indexB) {
    if(!arrayParam.length) {
        console.log("Array parameter is empty or undefined");
        return false;
    }

    let temp = arrayParam[indexA];
    arrayParam[indexA] = arrayParam[indexB];
    arrayParam[indexB] = temp;
}

function cocktailSort(arrayParam) {
    if(!arrayParam.length) {
        console.log("Array parameter is empty or undefined");
        return false;
    }

    let swapTrigger = true;
    while(swapTrigger == true) {
        swapTrigger = false;
        for(let i = 1; i < arrayParam.length; i ++) { //First iteration forward (bubble sort forward)
            if(arrayParam[i] < arrayParam[i - 1]) {
                swapPositions(arrayParam, i, i - 1);
                swapTrigger = true;
            }
        }

        if(swapTrigger == false) {
            // console.log("Break");
            break;
        }

        for(let i = arrayParam.length - 1; i > 0; i --) {
            if(arrayParam[i] < arrayParam[i - 1]) {
                swapPositions(arrayParam, i, i - 1);
                swapTrigger = true;
            }
        }
    }

    return arrayParam;
}

myArray = [-5, 0, -3, 100, 25, 3, 2, 1, 80];
console.log(cocktailSort(myArray));