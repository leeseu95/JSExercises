var num;

function reverseNumber(numParam) {
    let tempNum = numParam.toString(); //Turn our number into a string
    let reversedNum = ""; //Declare our reversed num at the end
    // console.log(tempNum); //Debug to check string.

    for (let i = tempNum.length - 1; i >= 0; i--) {
        reversedNum = reversedNum + tempNum[i];
    }
    parseInt(reversedNum);
    return reversedNum;
}

function reverseNumberExample(numParam) {
    numParam = numParam.toString();
    numParam = numParam.split("").reverse().join("");
    // console.log(numParam);
    return numParam;
}

num = 31245;
// console.log(reverseNumber(num));
console.log(reverseNumberExample(num));