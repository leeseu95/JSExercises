/*Write a JavaScript function to find the highest value in an array. Go to the editor
Test Data :
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));
56
0*/

function max(numArray) {
    // console.log(Math.max(numArray))
    if(!numArray) {
        console.log("Array is empty, exiting.");
        return
    }

    return Math.max.apply(null, numArray);
}

// exampleArray = [12, 34, 56, 1];
console.log(max([12, 34, 56, 1]));