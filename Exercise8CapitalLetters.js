//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

var stringExample = 'hello my name is world';

function capitalLetterString(stringParam) {
    let arrayString = [];

    arrayString = stringParam.split(' ');
    
    for(let i = 0; i < arrayString.length; i ++) {
        arrayString[i] = arrayString[i].charAt(0).toUpperCase() + arrayString[i].slice(1);
    }
    // console.log(arrayString);
    stringParam = arrayString.join(' ');
    console.log(stringParam);
}

capitalLetterString(stringExample)