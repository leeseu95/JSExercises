/* Write a JavaScript program to sum the multiples of 3 and 5 under 1000.*/

function findMultiples() {
    let sumNum = 0;
    for(let i = 0; i < 1000; i++) {
        if((i % 3 == 0) || (i % 5 == 0)) {
            sumNum += i;
        }
    }
    console.log("Sum of Multiples of 3 and 5 under 1000 : " + sumNum);
}

findMultiples();
