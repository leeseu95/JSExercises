/*Write a JavaScript program to sort a list of elements using Counting sort. Go to the editor
According to Wikipedia "In computer science, counting sort is an algorithm for sorting a collection of 
objects according to keys that are small integers; that is, it is an integer sorting algorithm. 
It operates by counting the number of objects that have each distinct key value, and using arithmetic 
on those counts to determine the positions of each key value in the output sequence. 
Its running time is linear in the number of items and the difference between the maximum and minimum key 
values, so it is only suitable for direct use in situations where the variation in keys is not significantly 
greater than the number of items. However, it is often used as a subroutine in another sorting algorithm, 
radix sort, that can handle larger keys more efficiently".*/

function swapPositions(arrayParam, indexA, indexB) {
    if(!arrayParam.length) {
        console.log("No array as parameter or is undefined");
        return false;
    }

    let temp = arrayParam[indexA];
    arrayParam[indexA] = arrayParam[indexB];
    arrayParam[indexB] = temp;
}

function countingSort(arrayParam) {
    let countArray = new Array(11).fill(0);
    let sortedArray = [];

    for(let i = 0; i < arrayParam.length; i ++) { //Assuming we KNOW the array parameter is between 0 and 10 inclusive
        countArray[arrayParam[i]] += 1;
    }

    for(let i = 0; i < countArray.length; i ++) {//Iterate through the array and push out the numbers into our new array
        while(countArray[i] != 0) {
            sortedArray.push(i);
            countArray[i] -= 1;
        }
    }

    return sortedArray;
}

myArray = [4, 8, 4, 2, 9, 9, 6, 2, 9];
// myArray = [5, 3, 7, 1, 2, 10, 4]
console.log(countingSort(myArray));