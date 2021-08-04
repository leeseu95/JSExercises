/*Write a JavaScript program to sort a list of elements using Flash sort. Go to the editor
Flashsort is a distribution sorting algorithm showing linear computational complexity O(n) for 
uniformly distributed data sets and relatively little additional memory requirement. 
The original work was published in 1998 by Karl-Dietrich Neubert. The basic idea behind flashsort is 
that in a data set with a known distribution, it is easy to immediately estimate where an element should 
be placed after sorting when the range of the set is known.*/

function swapPositions(arrayParam, indexA, indexB) {
    if(!arrayParam.length) {
        console.log("Array Parameter is undefined or empty");
        return false;
    }

    let temp = arrayParam[indexA];
    arrayParam[indexA] = arrayParam[indexB];
    arrayParam[indexB] = temp;
}

function flashSort(arrayParam) {
    if(!arrayParam.length) {
        console.log("Array parameter is undefined or empty");
        return false;
    }

    let max = 0;
    let min = arrayParam[0];
    let arrLength = arrayParam.length;
    let m = Math.floor(0.45 * arrLength);
    let tempArray = new Array(m);

    for(let i = 0; i < arrLength; i ++) { // Find the min and max of the array
        if(arrayParam[i] < min) {
            min = arrayParam[i];
        }
        if(arrayParam[i] > max) {
            max = i;
        }
    }

    if(min == max) {
        return arrayParam; //If both the min and max are the same, then the array is only one element.
    }

    var class1 = (m - 1) / (arrayParam[max] - min);

    for (let j = 0; j < m; j ++) {
        tempArray[j] = 0;
    }
    for (let k = 0; k < arrLength; ++k) {
        let temp = Math.floor(class1  * (arrayParam[k] - min));
        ++tempArray[temp];
    }
    for (let p = 1; p < m; ++p) {
        tempArray[p] = tempArray[p] + tempArray[p - 1];
    }

    swapPositions(arrayParam, 0, max);

    //Permutation starts
    var move = 0, t, flash;
    j = 0;
    k = m - 1;

    while(move < (arrLength - 1)) {
        while(j > (tempArray[k] - 1)) {
            ++j;
            k = Math.floor(class1 * (arrayParam[j] - min));
        }
        if (k < 0) break;
        flash = arrayParam[j];
        while(j !== tempArray[k]) {
            k = Math.floor(class1 * (flash - min));
            let temp = arrayParam[t = --tempArray[k]];
            arrayParam[t] = flash;
            flash = temp;
            ++ move;
        }
    }

    for(let i = 1; i < arrLength; i ++) {
        hold = arrayParam[i];
        j = i - 1;
        while(j >= 0  && arrayParam[j] > hold) {
            arrayParam[j + 1] = arrayParam[j--];
        }
        arrayParam[j + 1] = hold;
    }

    return arrayParam;
}

myArray = [-5, 0, -3, 100, 25, 3, 2, 1, 80];
console.log(flashSort(myArray));
