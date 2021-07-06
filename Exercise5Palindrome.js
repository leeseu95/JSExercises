var stringExample = "";

function checkPalindrome(stringParam) {
    stringParamReversed = stringParam.split("").reverse().join("");
    // console.log(stringParamReversed);

    if(stringParam == "") {
        console.log("String is not palindrome, it's empty");
        return;
    }
    if(stringParam.length == 1) {
        console.log("String is a palindrome");
        return;
    }
    
    let isPalindrome = true;

    for (let i = 0; i < stringParam.length; i ++) {
        if(stringParam[i] != stringParamReversed[i]) {
            isPalindrome = false;
        }
    }

    if (isPalindrome == true) {
        console.log("String is a palindrome");
    } else {
        console.log("String is not a palindrome");
    }
}

checkPalindrome("a");