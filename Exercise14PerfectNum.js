var numberGiven = 28;

function checkPerfectNumber(numberParam) {
    if(numberParam <= 0) {
        console.log("Negative numbers or 0 cannot be perfect numbers");
        return;
    }

    let tempNum = 0;

    for(let i = 0; i <= numberParam/2; i++) {
        if(numberParam%i === 0){
            tempNum += i;
        }
    }

    if(tempNum === numberParam) {
        console.log("Your number " + numberParam + " is a perfect number");
    } else {
        console.log("Your number " + numberParam + " is not a perfect number");
    }
}

checkPerfectNumber(numberGiven);