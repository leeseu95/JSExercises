/*Write a JavaScript program to sort a list of elements using Heap sort. Go to the editor
In computer science, heapsort (invented by J. W. J. Williams in 1964) is a comparison-based 
sorting algorithm. Heapsort can be thought of as an improved selection sort: like that algorithm, 
it divides its input into a sorted and an unsorted region, and it interactively shrinks the unsorted 
region by extracting the largest element and moving that to the sorted region. The improvement consists
 of the use of a heap data structure rather than a linear-time search to find the maximum. 
 Although somewhat slower in practice on most machines than a well-implemented quicksort, 
 it has the advantage of a more favorable worst-case O(n log n) runtime. Heapsort is an in-place algorithm, 
 but it is not a stable sort.*/

 var arrayLength;

function swapPositions(arrayParam, firstIndex, swapIndex) {
    let temp = arrayParam[firstIndex];
    arrayParam[firstIndex] = arrayParam[swapIndex];
    arrayParam[swapIndex] = temp;
}

function heapSortHelper(arrayParam, index) {
    var leftIndex = (index * 2) + 1;
    var rightIndex = (index * 2) + 2;
    var rootMax = index;

    if(leftIndex < arrayLength && arrayParam[leftIndex] > arrayParam[rootMax]) {
        rootMax = leftIndex;
    } else if (rightIndex < arrayLength && arrayParam[rightIndex] > arrayParam[rootMax]) {
        rootMax = rightIndex;
    }

    if(rootMax != index) {
        swapPositions(arrayParam, index, rootMax);
        heapSortHelper(arrayParam, rootMax);
    }
}

function heapSort(arrayParam) {
    arrayLength = arrayParam.length;
    
    for(let i = Math.floor(arrayLength/2); i >= 0; i --) {
        heapSortHelper(arrayParam, i);
    }

    for(let i = arrayParam.length - 1; i > 0; i --) {
        swapPositions(arrayParam, 0, i);
        arrayLength --;
        heapSortHelper(arrayParam, 0)
    }
    
    return arrayParam;
}

console.log(heapSort([1, 3, 6, -2, -5, 0, 100, 85, 32]))

