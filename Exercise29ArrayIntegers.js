/*Write a JavaScript program to get the integers in range (x, y). Go to the editor
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8]*/

var startNum = 2
var endNum = 9

function getRange(startParam, endParam) {
    if(startParam == (endParam - 2)) {
        return [endParam - 1];
    } else {
        var resultRange = getRange(startParam, endParam - 1);
        resultRange.push(endParam - 1);
        return resultRange;
    }
}

console.log(getRange(startNum, endNum))