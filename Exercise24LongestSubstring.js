/*Write a JavaScript function to find longest substring in a given a string without repeating characters.*/

var exampleString = "example.com";

function findLongestSubstring (stringParam) {
    let longSubstring = '';
    let counterLetter = 0;

    for(let i = 0; i < stringParam.length; i++) {
        if(!longSubstring.includes(stringParam[i])) {
            longSubstring += stringParam[i];
        }
    }

    console.log(longSubstring);
}

findLongestSubstring(exampleString)