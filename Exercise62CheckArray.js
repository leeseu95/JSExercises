/*rite a JavaScript function to check whether an `input` is an array or not. Go to the editor
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true*/

function is_array(param) {
    return Array.isArray(param);
}

function is_array2(param) {
    return toString.call(param) == "[object Array]" ? true : false;
}

console.log(is_array('w3resource'));
console.log(is_array2('w3resource'));
console.log(is_array([1, 2, 4, 3]));
console.log(is_array2([2, 3, 4, 0]));
console.log(is_array([]));

// console.log(toString.call('w3resource'));
// console.log(toString.call([]));
// console.log(toString.call(5));