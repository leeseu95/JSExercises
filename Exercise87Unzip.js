/*3. Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip. Go to the editor

Test Data :
unzip([['a', 1, true], ['b', 2, false]])
unzip([['a', 1, true], ['b', 2]])
Expected Output:
[["a","b"],[1,2],[true,false]]
[["a","b"],[1,2],[true]]*/


function unzip(arrayParam) {
    if(!arrayParam.length) {
        console.log("array is empty, exiting function.");
        return false;
    }

    let tempArray = [];
    let maxSize = 0;

    for(let i = 0; i < arrayParam.length; i ++) {
        if(arrayParam[i].length > maxSize) {
            maxSize = arrayParam[i].length;
        }
    }

    for(let i = 0; i < maxSize; i ++) {
        let tempSmallArray = [];
        for(let j = 0; j < arrayParam.length; j ++) {
            if(arrayParam[j][0] != undefined) {
                tempSmallArray.push(arrayParam[j].shift())
            }
        }
        tempArray.push(tempSmallArray);
    }

    return tempArray
}


console.log(unzip([['a', 1, true], ['b', 2, false], ['c', 3, false]]));
console.log(unzip([['a', 1, true], ['b', 2, false]]))
console.log(unzip([['a', 1, true], ['b', 2]]))