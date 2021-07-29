/*rite a pattern that matches e-mail addresses. Go to the editor
The personal information part contains the following ASCII characters.

Uppercase (A-Z) and lowercase (a-z) English letters.
Digits (0-9).
Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.*/

function checkEmail(stringParam) {
    var regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(stringParam == undefined || !stringParam.length) {
        console.log("E-mail format is empty, exiting function");
        return;
    }

    if(regexp.test(stringParam)) {
        console.log("E-mail is in a valid format");
        return true;
    } else {
        console.log("Email is not on a valid foramt");
        return false;
    }

}

console.log(checkEmail("lala@hotmail.com"));
console.log(checkEmail("@gmail.com"));
console.log(checkEmail());