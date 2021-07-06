/*Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. Go to the editor
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"*/

var arrayExample = ["Australia", "Germany", "United States of America"];

function findLongestString(arrayParam) {
    let longestString = '';

    for(let i = 0; i < arrayParam.length; i++) {
        if(arrayParam[i].length > longestString.length) {
            longestString = arrayParam[i];
        }
    }
    console.log("Longest String in the array is " + longestString);
}

function findSmallestString(arrayParam) {
    let shortestString = 'sdfjkjfashdkfjahskfjhafkjhasdkfjhaskfjhafkjha';

    for(let i = 0; i < arrayParam.length; i++) {
        if(arrayParam[i].length < shortestString.length) {
            shortestString = arrayParam[i];
        }
    }
    console.log("Longest String in the array is " + shortestString);
}

findLongestString(arrayExample);
findSmallestString(arrayExample);