/*Write a JavaScript program to sort the items of an array. Go to the editor
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8*/

var arrayExample = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];

function arraySort(arrayParam) {
    arrayParam.sort(function(a, b) {return a - b});
    return arrayParam;
}

console.log(arraySort(arrayExample));