/*Write a JavaScript program to perform a binary search.

Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.


Sample array:
var items = [1, 2, 3, 4, 5, 7, 8, 9];
Expected Output:
console.log(binary_Search(items, 1)); //0
console.log(binary_Search(items, 5)); //4*/

items = [1, 2, 3, 4, 5, 7, 8, 9];

function binarySearchKey(arrayParam, key) {
    let startIndex = 0;
    let endIndex = arrayParam.length - 1;
    let middleIndex = Math.floor(endIndex/2);
    
    while(arrayParam[middleIndex] != key && startIndex < endIndex) {
        if(arrayParam[middleIndex] > key) {
            endIndex = middleIndex - 1;
        } else if (arrayParam[middleIndex] < key) {
            startIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((startIndex + endIndex) / 2);
    }

    return((arrayParam[middleIndex] != key) ? false : middleIndex);
}

console.log(binarySearchKey(items, 5));
console.log(binarySearchKey(items, 6));