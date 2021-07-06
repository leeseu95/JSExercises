/*Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. Go to the editor
Sample array : [1,2,3,4,5]
Expected Output : 2,4*/

var arrayExample = [6,6,6,1,3,5,2,2,3,4,5,-5]
var arrayLowestAndGreatest = [];

function findGreatestAndLowest(arrayParam) {
    let secondGreatestNum = 0;
    let secondGreatestCounter = 0;
    let secondLowestNum = 0;
    let secondLowestCounter = 0;
    let tempResultArray = [];

    let arrayLowestToGreatest = arrayExample.sort();
    // console.log(arrayLowestToGreatest);
    while(secondLowestCounter == 0) {
        for(let i = 0; i < arrayLowestToGreatest.length; i++) {
            secondLowestNum = arrayLowestToGreatest[i]
            if(secondLowestNum != arrayLowestToGreatest[i+1]) {
                secondLowestNum = arrayLowestToGreatest[i+1];
                secondLowestCounter ++;
                break;
            }
        }
    }
    // console.log(secondLowestNum);

    let arrayGreatestToLowest = arrayExample.sort().reverse();
    // console.log(arrayGreatestToLowest[0]);
    while(secondGreatestCounter == 0) {
        for(let i = 0; i < arrayGreatestToLowest.length; i ++) {
            secondGreatestNum = arrayGreatestToLowest[i];
            if(secondGreatestNum != arrayGreatestToLowest[i+1]) {
                secondGreatestNum = arrayGreatestToLowest[i+1];
                secondGreatestCounter ++;
                break;
            }
        }
    }
    // console.log(secondGreatestNum);

    tempResultArray.push(secondLowestNum);
    tempResultArray.push(secondGreatestNum);
    return tempResultArray;

}

arrayLowestAndGreatest = findGreatestAndLowest(arrayExample);
console.log(arrayLowestAndGreatest);