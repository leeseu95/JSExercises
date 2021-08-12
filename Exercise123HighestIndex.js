/*Write a JavaScript program to find the highest index at which a value should be 
inserted into an array in order to maintain its sort order, based on a provided iterator function*/

function indexToInsert(arrayParam, numberParam, iteratorParam) {
    if(!arrayParam.length) {
        console.log("Array parameter is undefined or empty");
        return false;
    }

    let index = 0;
    let triggerVal = false;

    if(iteratorParam == 'asc') {
        for(let i = 0; i < arrayParam.length; i ++) {
            if(numberParam <= arrayParam[i]) {
                index = i;
                triggerVal = true;
                break;
            }
        }
        if(triggerVal == false) {
            index = arrayParam.length;
        }
    } else if (iteratorParam == 'desc') {
        for(let i = 0; i < arrayParam.length; i ++) {
            if(numberParam >= arrayParam[i]) {
                index = i;
                triggerVal = true;
                break;
            }
        }
        if(triggerVal == false) {
            index = arrayParam.length;
        }
    }

    return index;
}

var myArrayAsc = [-1, 0, 1, 2, 3, 5, 7, 10, 25, 38, 50, 57, 88, 100];
var myArrayDesc = [150, 88, 50, 35, 22, 10, 5, 1, 0, -25, -50, -88];

console.log(indexToInsert(myArrayAsc, 15, 'asc'));
console.log(indexToInsert(myArrayDesc, 7, 'desc'));