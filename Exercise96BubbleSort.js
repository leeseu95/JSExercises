/*Write a Bubble Sort algorithm in JavaScript. Go to the editor
Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
Sample Data: [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6]*/

function bubbleSort(arrayParam) {
    let swapped = true;

    while(swapped == true) {
        swapped = false;
        for(let i = 0; i < arrayParam.length; i ++) {
            if(arrayParam[i] > arrayParam[i+1] && arrayParam[i+1] != undefined) {
                let temp = arrayParam[i];
                arrayParam[i] = arrayParam[i+1];
                arrayParam[i+1] = temp;
                swapped = true;
            }
        }
    }

    return arrayParam;
}

console.log([bubbleSort([6, 4, 0, 3, -2, 1, -1])]);