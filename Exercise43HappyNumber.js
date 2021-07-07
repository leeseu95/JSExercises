/*According to Wikipedia a happy number is defined by the following process :
"Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers*/

function findHappyNumbers(numParam) {
    let arrayHappyNums = [];
    let arrayCount = 0;

    let num, numResultTemp, numTemp, numSecondTemp, numTempCounter;
    
    num = 1;

    while( arrayCount != numParam) {
        numTemp = num;
        numResultTemp = 0;
        numTempCounter = 0;
        while(numTempCounter < 15) {
            while(numTemp > 0) {
                numSecondTemp = numTemp % 10;
                numResultTemp += (numSecondTemp * numSecondTemp);
                numTemp = (numTemp - numSecondTemp) / 10;
                // console.log(numTemp);
            }
            if(numResultTemp == 1) {
                arrayCount ++;
                arrayHappyNums.push(num);
                break;
            }
            numTempCounter ++;
            numTemp = numResultTemp;
            numResultTemp = 0;
        }
        num ++;
    }
    console.log(arrayHappyNums);
}

findHappyNumbers(5);