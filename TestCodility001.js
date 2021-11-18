// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


//Seung Lee Codility
function solution(N) {
    //Initialize our variables
    let stringN = N.toString(10);
    let minNeeded = 0;

    //Function to return the sum of the digits
    var addDigits = function(stringParam) {
        let numSum = 0;
        //iterate through the string length
        for(let i = 0; i < stringParam.length; i ++) {
            numSum += parseInt(stringParam[i]);
        }

        return numSum;
    }

    //Get our doubleValue; (this is our minimum needed value (double of N digits added))
    minNeeded = 2 * addDigits(stringN);

    //Get our min Number
    //Keep iterating until finding the number, start at N
    for(let i = N; ; i ++) { 
        //Change our number i to a string to check if added digits are double N
        let tempString = i.toString(10);
        if(addDigits(tempString) >= minNeeded) {
            return i; //If it matches, return that number
        }
    }
}
