/*Write a JavaScript program to sort a list of elements using Heap sort. Go to the editor
In computer science, heapsort (invented by J. W. J. Williams in 1964) is a comparison-based 
sorting algorithm. Heapsort can be thought of as an improved selection sort: like that algorithm, 
it divides its input into a sorted and an unsorted region, and it interactively shrinks the unsorted 
region by extracting the largest element and moving that to the sorted region. The improvement consists
 of the use of a heap data structure rather than a linear-time search to find the maximum. 
 Although somewhat slower in practice on most machines than a well-implemented quicksort, 
 it has the advantage of a more favorable worst-case O(n log n) runtime. Heapsort is an in-place algorithm, 
 but it is not a stable sort.*/

function swapPositions(arrayParam, firstIndex, swapIndex) {
    const temp = arrayParam[firstIndex];
    arrayParam[firstIndex] = arrayParam[swapIndex];
    arrayParam[swapIndex] = temp;
}

function heapSortHelper(arrayParam, arrayMid, arraySize) {
    let index;
    let leftChild;
    let rightChild;

    while(arrayMid < arraySize) {
        index = arrayMid;
        leftChild = 2 * arrayMid + 1; //Formula to find the child of the nodes when index = i 
        rightChild = 2 * arrayMid + 2;

        if (leftChild < arraySize && arrayParam[leftChild] > arrayParam[index]) {
            index = leftChild;
        }
        if (rightChild < arraySize && arrayParam[rightChild] > arrayParam[index]) {
            index = rightChild;
        }

        if (index == arrayMid) {
            return;
        }

        swapPositions(arrayParam, index, arrayMid);
        arrayMid = index;

    }
}

function heapSort(arrayParam) {
    if(!arrayParam.length) {
        console.log("Array passed is empty or undefined, exiting function.");
        return false;
    }

    let arrayMid = Math.floor(arrayParam.length/2 - 1); //Middle of the array length

    while(arrayMid >= 0) {
        heapSortHelper(arrayParam, arrayMid, arrayParam.length);
        arrayMid --;
    }

    let lastElement = arrayParam.length - 1;
    while(lastElement > 0) {
        swapPositions(arrayParam, 0, lastElement);
        heapSortHelper(arrayParam, 0, lastElement);
        lastElement --;
    }
    
    return arrayParam;
}

console.log(heapSort([1, 3, 6, -2, -5, 0, 100, 85, 32]))

