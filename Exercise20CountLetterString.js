/*Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Go to the editor
Sample arguments : 'w3resource.com', 'o'
Expected output : 2*/

var myString = "Hello Darkness my Old Friend"
var myLetter = "l"

function numOfOcurrences(stringParam, letterParam) {
    let tempArrayChars = [];
    let counterNum = 0;
    
    tempArrayChars.push(letterParam);
    tempArrayChars.push(letterParam.toUpperCase());
    // console.log(tempArrayChars);
    for(let i = 0; i < stringParam.length; i ++) {
        if (tempArrayChars.includes(stringParam.charAt(i))) {
            counterNum ++;
        }
    }
    console.log(counterNum);
}

numOfOcurrences(myString, myLetter);