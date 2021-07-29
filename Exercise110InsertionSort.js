/*Write a JavaScript program to sort a list of elements using Insertion sort. Go to the editor
Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. 
It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.*/

function insertionSort(arrayParam) {
    if(!arrayParam.length || arrayParam.length == 1) {
        return arrayParam;
    }

    for(let i = 1; i <= arrayParam.length; i ++) {
        let index = i - 1;

        while(index >= 0 && arrayParam[index - 1] > arrayParam[index]) {
            let temp = arrayParam[index - 1];
            arrayParam[index - 1] = arrayParam[index];
            arrayParam[index] = temp;

            index --;
        }
    }

    return arrayParam;
}

myArray = [-5, 0, -3, 100, 25, 3, 2, 1, 80];
console.log(insertionSort(myArray));