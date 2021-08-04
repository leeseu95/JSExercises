/*Write a JavaScript program to sort a list of elements using Gnome sort. Go to the editor
Gnome sort is a sorting algorithm originally proposed by Dr. Hamid Sarbazi-Azad 
(Professor of Computer Engineering at Sharif University of Technology) in 2000 and called 
"stupid sort"[1] (not to be confused with bogosort), and then later on described by Dick Grune 
and named "gnome sort".
The algorithm always finds the first place where two adjacent elements are in the wrong order, 
and swaps them. It takes advantage of the fact that performing a swap can introduce a new out-of-order 
adjacent pair only next to the two swapped elements.*/

function swapPositions(arrayParam, indexA, indexB) {
    if(!arrayParam.length) {
        console.log("No array passed or is undefined");
        return false;
    }

    let temp = arrayParam[indexA];
    arrayParam[indexA] = arrayParam[indexB];
    arrayParam[indexB] = temp;
}

function gnomeSort(arrayParam) {
    if(!arrayParam.length) {
        console.log("No array passed or is undefined");
        return false;
    }

    let arrayPos = 0;
    while(arrayPos < arrayParam.length) {
        if(arrayPos == 0 || arrayParam[arrayPos] >= arrayParam[arrayPos - 1]) {
            arrayPos ++;
        } else if (arrayParam[arrayPos] < arrayParam[arrayPos - 1]) {
            swapPositions(arrayParam, arrayPos, arrayPos - 1);
            arrayPos --;
        }
    }

    return arrayParam;
}

myArray = [-5, 0, -3, 100, 25, 3, 2, 1, 80];
console.log(gnomeSort(myArray));