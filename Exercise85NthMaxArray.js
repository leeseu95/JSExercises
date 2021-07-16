/*34. Write a JavaScript function to get nth largest element from an unsorted array. Go to the editor

Test Data :
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
89*/

function nthlargest(arrayParam, nthMax) {
    if(!arrayParam.length) {
        console.log("Array is empty, cannot find Nth Max. Exiting function");
        return false;
    }

    let tempMax = Math.max.apply(null, arrayParam);

    while(nthMax > 1) {
        for(let i = 0; i < arrayParam.length; i ++) {
            if(tempMax == arrayParam[i]) {
                arrayParam.splice(i, 1);
            }
        }

        tempMax = Math.max.apply(null, arrayParam);
        nthMax --;
    }

    return tempMax;
}

console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));