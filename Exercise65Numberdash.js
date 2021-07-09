/*rite a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. Go to the editor
Click me to see the solution*/

var numExample = 225468;

function dashNumber(numParam) {
    let tempString = numExample.toString().split("");
    // console.log(tempString);
    for(let i = 0; i < tempString.length; i++) {
        if((tempString[i] % 2) == 0 && ((tempString[i + 1] % 2) == 0)) {
            tempString.splice(i + 1, 0, "-");
        }
    }
    // console.log(tempString);
    tempString = tempString.join("");
    return tempString;
}

console.log(dashNumber(numExample))