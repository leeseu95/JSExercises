/*Write a JavaScript program to sort a list of elements using Bogosort. Go to the editor
In computer science, bogosort is a particularly ineffective sorting algorithm based on the generate 
and test paradigm. The algorithm successively generates permutations of its input until it finds one 
that is sorted. It is not useful for sorting, but may be used for educational purposes, to contrast 
it with other more realistic algorith*/

function swapPositions(arrayParam, indexA, indexB) {
    if(!arrayParam.length) {
        console.log("Array passed is empty or undefined");
        return false;
    }

    let temp = arrayParam[indexA];
    arrayParam[indexA] = arrayParam[indexB];
    arrayParam[indexB] = temp;
}

function checkSortedArray(arrayParam) {
    if(!arrayParam.length) {
        console.log("Array passed is empty or undefined");
        return false;
    }

    let trigger = true;
    for(let i = 1; i < arrayParam.length; i ++) {
        if(arrayParam[i - 1] > arrayParam[i]) {
            trigger = false;
        }
    }

    return trigger;
}

function bogoSort(arrayParam) {
    if(!arrayParam.length) {
        console.log("Array passed is empty or undefined");
        return false;
    }

    while(!checkSortedArray(arrayParam)) {
        for(let i = 0; i < arrayParam.length; i ++) {
            let tempIndex = Math.floor(Math.random() * arrayParam.length);
            swapPositions(arrayParam, tempIndex, i);
        }
    }

    return arrayParam;
}

myArray = [3, 5, 1, 0, 12, 2, 7, 100, 55, 80 ];
console.log(bogoSort(myArray));