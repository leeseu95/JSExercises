/*Task description
A string S containing only the letters "A", "B" and "C" is given. The string can be transformed by removing one occurrence of "AA", "BB" or "CC".

Transformation of the string is the process of removing letters from it, based on the rules described above. As long as at least one rule can be applied, the process should be repeated. If more than one rule can be used, any one of them could be chosen.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns any string that can result from a sequence of transformations as described above.

For example, given string S = "ACCAABBC" the function may return "AC", because one of the possible sequences of transformations is as follows:



Also, given string S = "ABCBBCBA" the function may return "", because one possible sequence of transformations is:



Finally, for string S = "BABABA" the function must return "BABABA", because no rules can be applied to string S.

Write an efficient algorithm for the following assumptions:

the length of S is within the range [0..50,000];
string S consists only of the following characters: "A", "B" and/or "C".*/


function solution(S) {
    for(let i = 0; i < S.length; i ++) {
        if((S[i] == "A" && S[i+1] == "A") || (S[i] == "B" && S[i+1] == "B") || (S[i] == "C" && S[i+1] == "C")) {
            S = S.slice(0, i) + S.slice(i + 1);
            S = S.slice(0, i) + S.slice(i + 1);
            i = 0;
        }
    }

    if((S[0] == "A" && S[1] == "A") || (S[0] == "B" && S[1] == "B") || (S[0] == "C" && S[1] == "C")) {
        S = S.slice(0, 1)
        S = S.slice(0, 1)
        i = 0;
    }

    return S;
}

function solution(S) {
    let tempString = "";
    for(let i = 0; i < S.length; i ++) {
        let size = tempString.length;
        if(size > 0 && tempString[size - 1] == S[i]) {
            tempString = tempString.slice(0, size - 1) + tempString.slice(size);
        } else {
            tempString += S[i];
        }
    }
    return tempString;
}
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    for(let i = 0; i < S.length; i ++) {
        if((S[i] == "A" && S[i+1] == "A") || (S[i] == "B" && S[i+1] == "B") || (S[i] == "C" && S[i+1] == "C")) {
            S = S.slice(0, i) + S.slice(i + 1);
            S = S.slice(0, i) + S.slice(i + 1);
            i = 0;
        }
    }
    for(let i = 0; i < S.length; i ++) {
        if((S[i] == "A" && S[i+1] == "A") || (S[i] == "B" && S[i+1] == "B") || (S[i] == "C" && S[i+1] == "C")) {
            S = S.slice(0, i) + S.slice(i + 1);
            S = S.slice(0, i) + S.slice(i + 1);
            i = 0;
        }
    }

    return S;
}