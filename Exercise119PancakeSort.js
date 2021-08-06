/*Write a JavaScript program to sort a list of elements using Pancake sort. Go to the editor
Pancake sorting is the colloquial term for the mathematical problem of sorting a disordered 
stack of pancakes in order of size when a spatula can be inserted at any point in the stack 
and used to flip all pancakes above it. A pancake number is the minimum number of flips required 
for a given number of pancakes. The problem was first discussed by American geometer Jacob E. Goodman. 
It is a variation of the sorting problem in which the only allowed operation is to reverse the elements 
of some prefix of the sequence.*/

function swapPositions(arrayParam, indexA, indexB) {
    if(!arrayParam.length) {
        console.log("Array parameter is undefined or empty");
        return false;
    }

    let temp = arrayParam[indexA];
    arrayParam[indexA] = arrayParam[indexB];
    arrayParam[indexB] = temp;
}

function flipArray(arrayParam, indexParam) {
    if(!arrayParam.length) {
        console.log("Array parameter is undefined or empty");
        return false;
    }

    let start = 0;
    while(start < indexParam) {
        swapPositions(arrayParam, start, indexParam);
        start ++;
        indexParam --;
    }
}
//[3, 2, 5, 10, 1, 7]
//[10, 5, 2, 3, 1, 7]
// let myArray = [3, 2, 5, 10, 1, 7]
// flipArray(myArray, 1);
// console.log(myArray)

function findMaxIndex(arrayParam, indexParam) {
    if(!arrayParam.length) {
        console.log("Array passed is undefined or empty");
        return false;
    }

    let tempMax = 0;
    for(let i = 1; i < indexParam; i ++) {
        if(arrayParam[i] > arrayParam[tempMax]) {
            tempMax = i;
        }
    }

    return tempMax;
}

function pancakeSort(arrayParam) {
    if(!arrayParam.length) {
        console.log("Array passed is undefined or empty");
        return false;
    }

    for(let i = arrayParam.length; i > 1; i --) {
        let tempMaxIndex = findMaxIndex(arrayParam, i); //Find the temp max index
        if(tempMaxIndex != (i - 1)) { //If the max of size -1 in the array is not already sorted at the end
            flipArray(arrayParam, tempMaxIndex); //Flip first to get it to the beginning
            flipArray(arrayParam, i - 1); //Flip it once more to get it to its place
        }
    }

    return arrayParam;
}

myArray = [-5, 0, -3, 100, 25, 3, 2, 1, 80];
// myArray = [3, 5, 1, 0, 12, 2, 7, 100, 55, 80 ];
console.log(pancakeSort(myArray));
