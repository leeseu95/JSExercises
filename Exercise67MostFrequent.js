/*Write a JavaScript program to find the most frequent item of an array. Go to the editor
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )*/

var arrayExample = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mostFrequent(arrayParam) {
    let tempCounter = 0;
    let highestCounter = 0;
    let mostFrequentItem;

    for(let i = 0; i < arrayParam.length; i ++) {
        for(let j = 0; j < arrayParam.length; j ++) {
            if(arrayParam[i] == arrayParam[j]) {
                tempCounter ++
            }
        }
        if(tempCounter > highestCounter) {
            highestCounter = tempCounter;
            mostFrequentItem = arrayParam[i];
        }
        tempCounter = 0;
    }
    
    console.log(mostFrequentItem + " appeared " + highestCounter + " times");
}

mostFrequent(arrayExample);