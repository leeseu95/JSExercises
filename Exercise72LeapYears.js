/*JavaScript: Find the leap years from a given range of years*/
//Year Range 2000 - 2012 example
//Leap year = divisible by 4 -> 100 -> 400

var rangeStart = 2000
var rangeEnd = 2012

function findLeapYears(startParam, endParam) {
    let tempYearsArray = [];

    for(let i = startParam; i <= endParam; i++) {
        if(((i % 4) == 0 && (i % 100) != 0) || ((i % 4) == 0 && (i % 400) == 0 && (i % 100) == 0)) {
            tempYearsArray.push(i);
        }
    }

    return tempYearsArray;
}

console.log(findLeapYears(rangeStart, rangeEnd));