/*Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.

Sample Data:
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
[1, 2, 3, [[4]], 5, 6]*/

var array1 = [1, [2], [3, [[4]]],[5,6]];
    array2 = [];

function flattenArray(arrayParam, shallow, array2) {
    if(!array2) {
        array2 = [];
    }

    if(shallow) {
        return [].concat.apply(array2, arrayParam);
    }

    for(let i = 0; i < arrayParam.length; i++) {
        if(arrayParam[i].constructor == Array) {
            flattenArray(arrayParam[i], shallow, array2)
        } else {
            array2.push(arrayParam[i])
        }
    }

    return array2;
}

console.log(flattenArray([1, [2], [3, [[4]]],[5,6]]));
console.log(flattenArray([1, [2], [3, [[4]]],[5,6]], true));

// console.log([].concat.apply([], array1));
// console.log(array2.concat(array1));
// console.log(array2.concat.apply(array2, array1))
// console.log(array2.concat.apply(array2, array1));