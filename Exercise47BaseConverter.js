/*Write a JavaScript function to convert a number from one base to another. Go to the editor
Note : Both bases must be between 2 and 36.
Test Data :
console.log(base_convert('E164',16,8));
console.log(base_convert(1000,2,8));
"160544"
"10"*/


function base_convert(num, initialBase, changeBase) {
    if(initialBase < 2 || initialBase > 36 || changeBase < 2 || changeBase > 36) {
        console.log("One of the bases is too big or small, exiting function");
        return;
    }

    num = parseInt(num, initialBase);
    return num.toString(changeBase);
}

console.log(base_convert('E164', 16, 8));
console.log(base_convert(100, 2, 8));

// num = 'E164';

// num = parseInt(num, 16);
// console.log(num);
// console.log(num.toString(8));