/*Write a JavaScript function to extract unique characters from a string. Go to the editor
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"*/

var exampleString = "thequickbrownfoxjumpsoverthelazydog";

function findUniqueChars(stringParam) {
    let uniqueChars = [];
    let stringArrayExample = [];
    
    stringArrayExample = stringParam.split("");
    // console.log(stringArrayExample);
    for(let i = 0; i < stringArrayExample.length; i++) {
        if(!uniqueChars.includes(stringArrayExample[i])) {
            uniqueChars.push(stringArrayExample[i]);
        }
    }
    uniqueChars = uniqueChars.join("");
    console.log(uniqueChars);
}

findUniqueChars(exampleString);