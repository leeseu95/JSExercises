/*Write a function solution that, given two integers A and B, returns a string containing exactly A letters 'a' and exactly B letters 'b' with no three consecutive letters being the same (in other words, neither "aaa" nor "bbb" may occur in the returned string).

Examples:

1. Given A = 5 and B = 3, your function may return "aabaabab". Note that "abaabbaa" would also be a correct answer. Your function may return any correct answer.

2. Given A = 3 and B = 3, your function should return "ababab", "aababb", "abaabb" or any of several other strings.

3. Given A = 1 and B = 4, your function should return "bbabb", which is the only correct answer in this case.

Assume that:

A and B are integers within the range [0..100];
at least one solution exists for the given A and B.*/

function solution(A, B) {
    //Base cases where A and B are 0 or its only 1 on either
    if(A == 0 && B == 0) {
        return "";
    } else if(A == 1 && B == 0) {
        return "a";
    } else if(A == 0 && B == 1) {
        return "b";
    }

    //our values
    let stringSol = "";
    let allLettersUsed = false;
    let maxLettersReached = false;
    let tempSize = stringSol.length;

    if(A > B) {
        stringSol = "a";
        A -= 1;

        while(allLettersUsed == false) {
            maxLettersReached = false;
            while(maxLettersReached == false && A > 0) {
                stringSol += "a";
                tempSize = stringSol.length;
                A -= 1;
                if(stringSol[tempSize - 1] == "a" && stringSol[tempSize - 2] == "a"){
                    maxLettersReached = true;
                }
            }
            maxLettersReached = false;
            while(maxLettersReached == false && B > 0) {
                stringSol += "b";
                tempSize = stringSol.length;
                if(B * 2 <= A) {
                    maxLettersReached = true;
                }
                B -= 1;
                if(stringSol[tempSize - 1] == "b" && stringSol[tempSize - 2] == "b"){
                    maxLettersReached = true;
                }
            }
            
            if(A == 0 && B == 0) {
                allLettersUsed = true;
            }
        }
    } else if (B > A) {
        stringSol = "b";
        B -= 1;

        while(allLettersUsed == false) {
            maxLettersReached = false;
            while(maxLettersReached == false && B > 0) {
                stringSol += "b";
                tempSize = stringSol.length;
                B -= 1;
                if(stringSol[tempSize - 1] == "b" && stringSol[tempSize - 2] == "b"){
                    maxLettersReached = true;
                }
            }
            maxLettersReached = false;
            while(maxLettersReached == false && A > 0) {
                stringSol += "a";
                tempSize = stringSol.length;
                if(A * 2 <= B) {
                    maxLettersReached = true;
                }
                A -= 1;
                if(stringSol[tempSize - 1] == "a" && stringSol[tempSize - 2] == "a"){
                    maxLettersReached = true;
                }
            }
            
            if(A == 0 && B == 0) {
                allLettersUsed = true;
            }
        }
    } else if (A == B) {
        stringSol += "a";
        A -= 1;

        while(allLettersUsed == false) {
            maxLettersReached = false;
            while(maxLettersReached == false && A > 0) {
                stringSol += "a";
                tempSize = stringSol.length;
                A -= 1;
                if(stringSol[tempSize - 1] == "a" && stringSol[tempSize - 2] == "a"){
                    maxLettersReached = true;
                }
            }
            maxLettersReached = false;
            while(maxLettersReached == false && B > 0) {
                stringSol += "b";
                tempSize = stringSol.length;
                B -= 1;
                if(stringSol[tempSize - 1] == "b" && stringSol[tempSize - 2] == "b"){
                    maxLettersReached = true;
                }
            }
            
            if(A == 0 && B == 0) {
                allLettersUsed = true;
            }
        }
    }

    return stringSol;
}