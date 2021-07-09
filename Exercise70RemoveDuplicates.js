/*Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity). Go to the editor*/

var arrayExample = [2, 2, 3, 4, 5, 1, 2, 3, 4, 7, 8, 9, 10, 'a', 'a', 'b']

function removeDuplicates(arrayParam) {
    if(!arrayParam.length) {
        console.log("Array is empty. Exiting function");
        return;
    }

    let tempArray = []

    for(let i = 0; i < arrayParam.length; i++) {
        if(!tempArray.includes(arrayParam[i])) {
            tempArray.push(arrayParam[i])
        }
    }

    return tempArray;
}

console.log(removeDuplicates(arrayExample));