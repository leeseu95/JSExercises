/*rite a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. Go to the editor
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]*/

function first(arrayParam, numParam) {
    if(!arrayParam.length) {
        return arrayParam;
    }
    
    if(numParam == undefined) {
        return arrayParam[0]
    } else if (numParam < 0) {
        return [];
    } else if (numParam > arrayParam.length) {
        numParam = arrayParam.length;
    }

    let tempArray = [];
    for(let i = 0; i < numParam; i ++) {
        tempArray.push(arrayParam[i]);
    }
    return tempArray
}

function last(arrayParam, numParam) {
    if(!arrayParam.length) {
        return arrayParam;
    }
    
    if(numParam == undefined) {
        return arrayParam[arrayParam.length-1]
    } else if (numParam < 0) {
        return [];
    } else if (numParam > arrayParam.length) {
        numParam = arrayParam.length;
    }

    let tempArray = [];
    for(let i = arrayParam.length - numParam; i < arrayParam.length; i ++) {
        tempArray.push(arrayParam[i]);
    }
    return tempArray
}

// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));