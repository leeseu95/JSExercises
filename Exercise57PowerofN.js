/*Write a JavaScript function which will return values that are powers of two. Go to the editor
Test Data :
console.log(isPower_of_two(64));
true
console.log(isPower_of_two(94));
false*/


function isPower_of_n(num, n) {
    let tempResult = 1;

    while(tempResult < num) {
        tempResult *= n;
        if(tempResult == num) {
            return true;
        }
    }
    return false;
}

console.log(isPower_of_n(64, 2));
console.log(isPower_of_n(94, 2));