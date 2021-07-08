/*
Write a JavaScript function to get all prime numbers from 0 to a specified number. Go to the editor
Test Data :
console.log(primeFactorsTo(5));
[2, 3, 5]
console.log(primeFactorsTo(15));
[2, 3, 5, 7, 11, 13]
*/

function checkPrime(numberParam) {
    let isPrime = true;

    if(numberParam == 0 || numberParam < 0) {
        console.log("Number is not prime");
        return;
    }

    if(numberParam == 1) {
        console.log("Number is prime");
        return;
    }

    for(let i = 2; i < numberParam; i ++) {
        if(numberParam % i === 0) {
            isPrime = false;
        }
    }
    // console.log("Number is Prime? " + isPrime);
    return isPrime;
}

function primeFactorsTo(num) {
    let resultArrayNum = [];

    for(let i = 1; i <= num; i ++) {
        if(checkPrime(i) == true) {
            resultArrayNum.push(i);
        }
    }

    return resultArrayNum;
}

console.log(primeFactorsTo(5));
console.log(primeFactorsTo(15));