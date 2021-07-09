/*We have the following arrays : Go to the editor
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
- - - - - - - - - - - - -*/

colorArray = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function ordinal(n) {
    var suffixes = ["th", "st", "nd", "rd"];
    var v = n % 100;   
    
    return n + (suffixes[(v-20)%10] || suffixes[v] || suffixes[0]);
}

function colorOrder(arrayParam) {
    for(let i = 0; i < arrayParam.length; i++) {
        console.log(ordinal(i+1) + " color choice is " + arrayParam[i]);
    }
}

colorOrder(colorArray)
// console.log(ordinal(7));