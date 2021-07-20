/*. Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno*/

const student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

const studentTest = {};

function outputProperties(objParam) {
    return Object.keys(objParam);
}

console.log(outputProperties(student));
console.log(outputProperties(studentTest));