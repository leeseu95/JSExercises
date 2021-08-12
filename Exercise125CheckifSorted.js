/*Write a JavaScript program to check if a numeric array is sorted or not*/

function checkIfsorted(arrayParam) {
    if(!arrayParam.length) {
        console.log("Array passed is undefined or empty");
        return false;
    }

    let direction = '';
    if(arrayParam[0] < arrayParam[1]) {
        direction = 'asc';
    } else {
        direction = 'desc';
    }

    if(direction == 'asc') {
        for(let i = 1; i < arrayParam.length; i ++) {
            if(arrayParam[i - 1] > arrayParam[i]) {
                return false;
            }
        }
    } else if (direction == 'desc') {
        for(let i = 1; i < arrayParam.length; i ++) {
            if(arrayParam[i] > arrayParam[i - 1]) {
                return false;
            }
        }
    }

    return true;
}
let myArray = [-100, -50, 0, 3, 5, 7, 10, 15];
let myArray2 = [50, 28, 25, 10, 7, 3, 0, -15, -85];
let myArray3 = [50, 28, 25, 17, 27, 10, -35];

console.log(checkIfsorted(myArray));
console.log(checkIfsorted(myArray2));
console.log(checkIfsorted(myArray3));