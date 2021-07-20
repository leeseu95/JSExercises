/*Write a JavaScript function to convert a string in abbreviated form*/

function abbreviate_string(stringParam) {
    stringParam = stringParam.trim().split(" ");
    stringTemp = stringParam[0];
    if(stringParam.length > 1) {
        for(let i = 1; i < stringParam.length; i ++) {
            stringTemp += (" " + stringParam[i].charAt(0) + ".");
        }
    }

    return stringTemp;
}

console.log(abbreviate_string("Robin Singh Test"));