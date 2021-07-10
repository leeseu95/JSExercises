/*Write a JavaScript program to compute the union of two arrays. Go to the editor
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]*/

function unionArrays(arrayParam, arrayParam2) {
    let tempArray = [];

    if(!arrayParam.length && !arrayParam2.length) {
        console.log("Array parameters are empty");
        return;
    }

    for(let i = 0; i < arrayParam.length; i++) {
        if(!tempArray.includes(arrayParam[i])) {
            tempArray.push(arrayParam[i]);
        }
    }

    for(let i = 0; i < arrayParam2.length; i++) {
        if(!tempArray.includes(arrayParam2[i])) {
            tempArray.push(arrayParam2[i]);
        }
    }

    return tempArray.sort(function(a, b) {return a - b});
}

console.log(unionArrays([1, 2, 3, 10], [100, 2, 1, 50]));
