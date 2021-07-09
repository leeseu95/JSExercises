/* Write a JavaScript program to shuffle an array.*/

arrayExample = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function shuffleArray(arrayParam) {
    let tempCounter = arrayParam.length;
    
    while(tempCounter > 0) {
        let tempNum = 0;
        let tempNum2 = 0;
        let tempVar;

        tempNum = Math.floor(Math.random() * arrayParam.length);
        tempNum2 = Math.floor(Math.random() * arrayParam.length);

        tempVar = arrayParam[tempNum];
        arrayParam[tempNum] = arrayParam[tempNum2];
        arrayParam[tempNum2] = tempVar;

        tempCounter --;
    }

    return arrayParam;
}

console.log(shuffleArray(arrayExample));