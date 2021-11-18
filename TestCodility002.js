// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(cars) {
    //Variable declaration
    let solutionsArray = new Array(cars.length);
    let carCount = 0;

    //Debugging
    // tempString = cars[0];
    // tempString2 = "100"
    // console.log(tempString == tempString2);
    // console.log(tempString[0] == "1")
    // console.log(tempString[0] == tempString2[0])
    
    var compareFeatures = function (firstCar, secondCar) {
        //Initialize the counter of features differences at 0
        let counter = 0;

        //Since both cars have the same length (or assumed), we'll take the length of whichever
        for(let i = 0; i < firstCar.length; i ++) {
            //If the features are different
            if(firstCar[i] != secondCar[i]) {
                counter ++
            }
        }

        //Return counter difference
        return counter;
    }


    // Iterate through the number of cars we'll have to configure
    for(let i = 0; i < cars.length; i ++) {
        //Reinitialize carCount
        carCount = 0;
        //Taking i as our base car and comparing to each of the cars in the array
        for(let j = 0; j < cars.length; j ++){
            if(compareFeatures(cars[i], cars[j]) <= 1){
                carCount ++;
            }
        }
        solutionsArray[i] = carCount - 1; //-1 to take off the duplicate
    }

    //Return our solution array
    return solutionsArray;
}