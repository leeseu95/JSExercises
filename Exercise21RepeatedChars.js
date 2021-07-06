/*Write a JavaScript function to find the first not repeated character. Go to the editor
Sample arguments : 'abacddbec'
Expected output : 'e'*/

var stringExample = 'abacddbec'

function nonRepeatedChar(stringParam) {
    let counterLetter = 0;

    for(let i = 0; i < stringParam.length; i++) {
        for(let j = 0; j < stringParam.length; j++) {
            if(stringParam[i] == stringParam[j]) {
                counterLetter ++;
            }
        }
        if(counterLetter < 2) {
            console.log("First non repeated letter is " + stringParam[i]);
            break;
        } else {
            counterLetter = 0;
        }
    }
}

nonRepeatedChar(stringExample);