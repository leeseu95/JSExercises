/*Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Go to the editor
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };*/
const student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

function removeProperty(objParam, keyParam) {
    console.log(objParam);

    delete objParam[keyParam];

    console.log(objParam);
}

removeProperty(student, "rollno");