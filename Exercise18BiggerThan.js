/*Write a JavaScript function that returns array elements larger than a number. Go to the editor
Click me to see the solution.*/

var arrayExample = [45, 33, 12, 1, -3, 4564];
var numExample = 41;

function biggerThanElem(arrayParam, numParam) {
    let arrayTemp = arrayParam.sort();
    let arrayCounterStarter = 0;
    let arraySolution = [];
    // console.log(arrayTemp);

    for(let i = 0; i < arrayTemp.length; i++) {
        if(numParam < arrayTemp[i]) {
            arrayCounterStarter = i;
            break;
        }
    }

    // console.log(arrayCounterStarter);
    for(let i = arrayCounterStarter; i < arrayTemp.length; i ++) {
        arraySolution.push(arrayTemp[i]);
    }

    console.log(arraySolution);
}

biggerThanElem(arrayExample, numExample);