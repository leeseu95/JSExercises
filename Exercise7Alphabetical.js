var stringExample = ""

function alphabeticalPrint(stringParam) {
    let sortedAlphaString = stringParam.split("").sort().join("");
    console.log(sortedAlphaString);
}

stringExample = "31272135";
alphabeticalPrint(stringExample);