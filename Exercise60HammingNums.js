/*Write a JavaScript function to show the first twenty Hamming numbers. Go to the editor
Hamming Numbers are numbers whose only prime factors are 2, 3 and 5.*/

function hammingNumbers(n) {
    let tempNum = 1;
    let tempArray = [];

    while(tempArray.length < n) {
        let numResult = tempNum
        while(numResult % 5 == 0) {
            numResult /= 5;
        }
        while(numResult % 3 == 0) {
            numResult /= 3;
        }
        while(numResult % 2 == 0) {
            numResult /= 2;
        }

        if(numResult == 1) {
            tempArray.push(tempNum);
        }
        tempNum ++;
    }

    return tempArray;
}

console.log(hammingNumbers(20));