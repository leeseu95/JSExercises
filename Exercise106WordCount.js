/*Write a JavaScript program to count number of words in string. Go to the editor
Note :
- Remove white-space from start and end position.
- Convert 2 or more spaces to 1.
- Exclude newline with a start spacing.*/

function wordCount(stringParam) {
    if(stringParam == undefined || !stringParam.length) {
        console.log("String is empty or undefined parameter. Exiting");
        return;
    }

    let wordCount = 0;
    stringParam = stringParam.trim().split(" ");
    let stringTemp = [];

    console.log(stringParam);

    for(let i = 0; i < stringParam.length; i ++) {
        if(stringParam[i] == '') {
            // console.log("a");
            continue;
        } else {
            stringTemp.push(stringParam[i]);
        }
    }

    for(let i = 0; i < stringTemp.length; i++) {
        wordCount ++;
    }

    return wordCount;
}

console.log(wordCount("The quick brown  fox jumps over the bridge"));