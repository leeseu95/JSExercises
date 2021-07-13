/*Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number. Go to the editor

Input: numbers= [10,20,10,40,50,60,70], target=50
Output: 2, 3*/

function twoSums(arrayParam, targetParam) {
    if(!arrayParam.length) {
        console.log("Array is empty, target cannot be reached. Exiting function");
        return 0;
    }

    let index = Math.floor(Math.random() * arrayParam.length);
    let index2 = -1;
    let indexArray = [];

    while(index2 == -1) {
        let startNum = 50;

        while(startNum >= targetParam) {
            index = Math.floor(Math.random() * arrayParam.length);
            startNum = arrayParam[index];
        }

        for(let i = 0; i < arrayParam.length; i++) {
            if((arrayParam[index] + arrayParam[i]) == targetParam) {
                index2 = i;
            }
        }
    }

    indexArray.push(index);
    indexArray.push(index2);

    return indexArray;
}

console.log(twoSums([10,20,10,40,50,60,70], 50))