/*Write a JavaScript program to pass a 'JavaScript function' as parameter*/

function addNums() {
    return 3+3;
}

function subtractNums() {
    return 4-2;
}

function calculate(idParam, functionParam, functionParam2) {
    switch(idParam) {
        case 1:
            console.log(functionParam());
            break;
        case 2:
            console.log(functionParam2());
            break;
        default:
            break;
    }
}

calculate(2, addNums, subtractNums);