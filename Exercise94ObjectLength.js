/*Write a JavaScript program to get the length of a JavaScript object.

Sample object:*/

var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 
};

function objSize(objParam) {
    var size = 0;

    for (var key in objParam) {
        if(objParam.hasOwnProperty(key)) {
            size ++;
        }
    }
    
    return size;
}

console.log(objSize(student));