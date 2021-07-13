/*Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. Go to the editor
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]*/

function intArray(arrayParam) {
    if(!arrayParam.length) {
        console.log("Array paremeter is empty. Exiting function");
        return;
    }

    return arrayParam.filter(value => value); //'null', 0, 'false', undefined, NaN, '' are all falsy values
}

console.log(intArray([NaN, 0, 15, false, -22, '',undefined, 47, null]))


// console.log(typeof(15))