/*Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. Go to the editor
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.*/

var numberToCheck = 229;

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
    console.log("Number is Prime? " + isPrime);
}

checkPrime(numberToCheck);