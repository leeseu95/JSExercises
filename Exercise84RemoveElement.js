/*Write a JavaScript function to remove a specific element from an array. Go to the editor

Test data :
console.log(remove_array_element([2, 5, 9, 6], 5));
[2, 9, 6]*/

function remove_array_element(arrayParam, keyParam) {
    if(!arrayParam.length) {
        console.log("Array is empty, cannot find target Param");
        return false;
    }

    let removedAlert = false;

    for(let i = 0; i < arrayParam.length; i ++) {
        if(arrayParam[i] == keyParam) {
            arrayParam.splice(i, 1);
            removedAlert = true;
        }
    }

    if(removedAlert == false) {
        console.log("Element was not found in array");
    }

    return arrayParam;
}

console.log(remove_array_element([2, 5, 9, 6] , 5));
console.log(remove_array_element([2, 5, 6, 9] , 3));
