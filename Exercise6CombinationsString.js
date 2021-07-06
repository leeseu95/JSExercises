let stringExample = "";

function printCombinations(stringParam) {
    let stringCombination = [];
    let stringTemp = "";
    for (let i = 0; i < stringParam.length; i++) {
        for (let j = i+1; j < stringParam.length + 1; j++) {
            stringCombination.push(stringParam.slice(i,j));
            console.log(stringParam.slice(i,j));
        }
    }
    console.log(stringCombination);
}

stringExample = "dog";
printCombinations(stringExample);