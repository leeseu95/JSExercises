/*Write a JavaScript program which accept a string as input and swap the case of each character. 
For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.*/

var stringExample = "The Quick Brown Fox"

function changeStringCases(stringParam) { 
    stringParam = stringParam.split("");

    for(let i = 0; i < stringParam.length; i++) {
        stringParam[i] == stringParam[i].toUpperCase() ? stringParam[i] = stringParam[i].toLowerCase() : stringParam[i] = stringParam[i].toUpperCase();
    }

    return stringParam.join("");
}

console.log(changeStringCases(stringExample));