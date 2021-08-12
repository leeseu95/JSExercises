/*
Write a JavaScript program to sort the characters in a string alphabetically.
*/

function sortChars(stringParam) {
    if(!stringParam) {
        console.log("String Parameter is undefined or empty");
        return false;
    }

    // stringParam = stringParam.split('');
    // stringParam.sort((a, b) => a.localeCompare(b)).join;
    // stringParam = stringParam.join('');

    return stringParam.split('').sort((a, b) => a.localeCompare(b)).join('');;
}

console.log(sortChars('Cabbage'));