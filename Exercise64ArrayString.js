/*Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"*/

myColor = ["Red", "Green", "White", "Black"];

function arraytoString(arrayParam) {
    if (!arrayParam.length) {
        console.log("Array is Empty, exiting function");
        return;
    }

    let stringRes = "";
    for(let i = 0; i < arrayParam.length; i++) {
        i == arrayParam.length-1 ? stringRes += arrayParam[i] : stringRes += (arrayParam[i] + ", ");
    }

    return stringRes;
}

console.log(arraytoString(myColor));