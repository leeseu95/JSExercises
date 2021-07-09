/*Write a JavaScript program which prints the elements of the following array. Go to the editor
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
*/

var arrayExample = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

function printElementsArray(arrayExample) {
    if(!arrayExample.length) {
        console.log("Array is empty, exiting printElementsArray function");
        return;
    }

    for(let i = 0; i < arrayExample.length; i++) {
        console.log("Row " + i);
        for(let j = 0; j < arrayExample[i].length; j++) {
            console.log(arrayExample[i][j]);
        }
    }
}

printElementsArray(arrayExample);