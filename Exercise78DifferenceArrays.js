/*Write a JavaScript function to find the difference of two arrays. Go to the editor
Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]*/

var array1 = [1, 2, 3, 4, 5]
var array2 = [1, [2], [3, [[4]]],[5,6]]

function differenceArrays(arrayparam, arrayparam2) {
    let tempArray = [];

    if(!arrayparam.length && !arrayparam2.length) {
        console.log("Array parameters are empty");
        return;
    }

    arrayparam = arrayparam.toString().split(',').map(Number);
    arrayparam2 = arrayparam2.toString().split(',').map(Number);
    
    for(let i = 0; i < arrayparam.length; i++) {
        if(!arrayparam2.includes(arrayparam[i])) {
            tempArray.push(arrayparam[i]);
        }
    }

    for(let i = 0; i < arrayparam2.length; i++) {
        if(!arrayparam.includes(arrayparam2[i])) {
            tempArray.push(arrayparam2[i])
        }
    }

    tempArray = tempArray.sort(function(a, b) {return a - b});

    return tempArray;
}

// console.log(differenceArrays([1, 2, 3], [100, 2, 1, 10]));
// console.log(differenceArrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]))

// console.log([1, [2], [3, [[4]]],[5,6]].toString().split(',').map(Number));

// console.log(array1.toString().split('').map(Number));
// console.log(array2.toString().split('').map(Number));
