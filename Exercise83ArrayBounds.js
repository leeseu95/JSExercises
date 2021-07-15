/*Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

Test Data:
console.log(num_string_range('a', "z", 2));
["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]*/

var string1 = 'a';
var string2 = 'z';

function num_string_range(startRange, endRange, jumpParam) {
    var tempArrayRange = [];

    if(typeof startRange == "undefined" || typeof endRange == "undefined" || jumpParam == 0) { //If any of these are met
        console.log("Start range or end range are undefined, only numbers or string allowed. Exiting")
        return false;
    }

    if(typeof startRange == "string" && (startRange.length != 1 || endRange.length != 1)) {
        console.log("Only strings of 1 characters are allowed. Exiting")
        return false;
    }

    if(endRange < startRange) {
        jumpParam = -jumpParam; //If the end range is lower, we need to turn the jump param into a negative so it goes the other way
    }

    if(typeof startRange == "number") {
        while(jumpParam > 0 ? endRange >= startRange : endRange <= startRange) {
            tempArrayRange.push(startRange);
            startRange += jumpParam;
        }
    }

    if(typeof startRange == "string") {
        startRange = startRange.charCodeAt(0); //Returns unicode value for string
        endRange = endRange.charCodeAt(0);

        while(jumpParam > 0 ? endRange >= startRange : endRange <= startRange) {
            tempArrayRange.push(String.fromCharCode(startRange));
            startRange += jumpParam;
        }
    }

    return tempArrayRange;
}

console.log(num_string_range('z', 'a', 2));
console.log(num_string_range('A', 'Z', 2));
console.log(num_string_range(0, 25, 5));

