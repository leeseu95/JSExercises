/*Write a JavaScript function to print all the methods in an JavaScript object. Go to the editor
Test Data :
console.log(all_properties(Array));
["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]*/

function findallMethods(objParam) {
    return Object.getOwnPropertyNames(objParam).filter(function(property) {
        return typeof objParam[property] == "function";
    });
}

function all_properties(objParam) {
    if(!objParam) {
        console.log("No Object or undefined object. Exiting function");
        return false;
    }

    return Object.getOwnPropertyNames(objParam);
}

console.log(all_properties(Array));
console.log(findallMethods(Array));