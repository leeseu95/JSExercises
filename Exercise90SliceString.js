/*Write a JavaScript function to extract a specified number of characters from a string.
*/

function truncate_string(stringParam, lengthParam) {
    return stringParam.slice(0 , lengthParam);
}

console.log(truncate_string("Robin Singh", 4))