// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    //Declare our variables
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let tempArray = new Array(alphabet.length);
    let deletedLettersCount = 0;

    //Check each of the letters in the alphabet in our string
    for(let i = 0; i < alphabet.length; i ++) {
        //Check for letters in the string given and add the count to our array, Initialize temparray[i] at 0 to add later
        tempArray[i] = 0;
        for(let j = 0; j < S.length; j ++) {
            //If we have that letter, we'll push it into the respective alphabet array and add a count
            if(alphabet[i] == S[j]) {
                tempArray[i] += 1
            }
        }
    }

    //iterate through our newly ceated array
    for(let i = 0; i < tempArray.length; i ++) {
        //If the letter is odd (we need to delete)
        if(tempArray[i] % 2) {
            //Increase the counter on deleted letters and subtract temparray alphabet (in case we would need to check and validate)
            deletedLettersCount ++;
            tempArray[i] --;
        }
    }

    //Return deleted letters Count
    return deletedLettersCount;
}
