/*Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
Example string : 'Web Development Tutorial'
Expected Output : 'Development'*/

let stringExample = 'Web Development World'

function longestWordFinder(stringParam) {
    if(stringParam == ''){
        console.log("String is Empty");
        return;
    }
    
    let arrayString = [];
    arrayString = stringParam.split(' ');

    let longestWordPos = 0;
    for(let i = 0; i < arrayString.length; i++) {
        if(arrayString[longestWordPos].length < arrayString[i].length) {
            longestWordPos = i;
        }
    }
    console.log("Longest word is: " + arrayString[longestWordPos]);
}

longestWordFinder(stringExample);