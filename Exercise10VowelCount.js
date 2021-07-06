/*Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Go to the editor
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5*/

var stringExample = 'The Quick Brown Fox'

function vowelCounter(stringParam) {
    let vowelCount = 0;
    let stringTemp = [];
    let stringVowels = ['a','e','i','o','u'];

    stringTemp = stringParam.split('');
    // console.log(stringTemp);
    for(let i = 0; i < stringTemp.length; i ++) {
        if(stringVowels.includes(stringTemp[i])) { //If any of the vowels are included on the string at [i] then we increase the count
            vowelCount ++;
        }
    }
    console.log("The Number of vowels is : " + vowelCount);
}

vowelCounter(stringExample);