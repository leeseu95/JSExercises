/*Write a JavaScript function that returns the longest palindrome in a given string. Go to the editor

Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
*/

var exampleString = "abracadabra";
var exampleString2 = "HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"

function checkIfPalindrome(stringPalinParam) {
    let tempString = stringPalinParam.split("").reverse().join("");
    if(tempString == stringPalinParam){
        return true;
    } else {
        return false;
    }
    
}

function findLongestPalindrome(stringParam) {
    let tempSubstring = ''
    let temptempSubstring = '';
    let biggestPalinSubstring = ''

    for(let i = 0; i < stringParam.length; i++) {
        tempSubstring = stringParam.substr(i, stringParam.length); //abracadabra
        
        for(let j = tempSubstring.length; j >= 0; j--) {
            temptempSubstring = tempSubstring.substr(0 , j);
            if(temptempSubstring.length <= 1) {
                continue
            }
            if(checkIfPalindrome(temptempSubstring) && (biggestPalinSubstring.length < temptempSubstring.length)) {
                biggestPalinSubstring = temptempSubstring;
                // console.log("aaa");
            }
        }
    }

    console.log("Biggest palindrome substring is " + biggestPalinSubstring)
}

findLongestPalindrome(exampleString2);
// console.log(checkIfPalindrom("acad"));