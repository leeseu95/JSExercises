/*Write a JavaScript program to sort an array of numbers, using the bucket sort algorithm.*/

//Assuming the range of the array is between 0 - 100;
function bucketSort(arrayParam) {
    if(!arrayParam.length) {
        console.log("Array passed is undefined or empty");
        return false;
    }

    //Create an array of arrays (this will be our buckets to range for every 10. I.E : 0 - 10, 11 -  20)
    let bucketArray = new Array(10)
    for(let i = 0; i < bucketArray.length; i++) {
        bucketArray[i] = new Array();
    }

    let minVal = Math.min(...arrayParam);
    let maxVal = Math.max(...arrayParam);
    let differenceValues = maxVal - minVal;

    let counter = differenceValues / 10;
    let oldCounter = 0;
    let bucketCount = 0;

    while(counter <= differenceValues) { //Value to modify if we want the range to be bigger or smaller
        for(let i = 0; i < arrayParam.length; i ++) {
            if(arrayParam[i] < counter && arrayParam[i] >= oldCounter) {
                bucketArray[bucketCount].push(arrayParam[i]);
            }
        }
        counter += (differenceValues / 10);
        oldCounter += (differenceValues / 10);
        bucketCount ++;
    }

    return bucketArray.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
}

myArray = [3, 5, 1, 0, 12, 2, 7, 100, 55, 80 ];
console.log(bucketSort(myArray));
