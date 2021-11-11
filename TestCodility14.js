/*
A rectangular map consisting of N rows and M columns of square areas is given. Each area is painted with a certain color.

Two areas on the map belong to the same country if the following conditions are met:

they have the same color;
it is possible to travel from one area to the other orthogonally (that is, by moving only north, south, west or east) without moving over areas of a different color.
The map can be described by a zero-indexed matrix A consisting of N rows and M columns of integers. The color of each area is described by the corresponding element of the matrix. Two areas have the same color if and only if their corresponding matrix elements have the same value.

For example, consider the following matrix A consisting of seven rows and three columns:

A[0][0] = 5    A[0][1] = 4    A[0][2] = 4
A[1][0] = 4    A[1][1] = 3    A[1][2] = 4
A[2][0] = 3    A[2][1] = 2    A[2][2] = 4
A[3][0] = 2    A[3][1] = 2    A[3][2] = 2
A[4][0] = 3    A[4][1] = 3    A[4][2] = 4
A[5][0] = 1    A[5][1] = 4    A[5][2] = 4
A[6][0] = 4    A[6][1] = 1    A[6][2] = 1
Matrix A describes a map that is colored with five colors. The areas on the map belong to eleven different countries (C1−C11), as shown in the following figure:
*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    var visitedCoordinates = [];
    var countriesNumber = 0;

    var checkInclude = function(arr, item) {
        var item_as_string = JSON.stringify(item);

        var contains = arr.some(function(ele){
            return JSON.stringify(ele) === item_as_string;
        });
        return contains;
    }

    var checkSides = function(xcoord, ycoord, aParam, visitedCoordinatesParam) {
        // console.log(checkInclude(visitedCoordinatesParam, [2, 2]));
        console.log(visitedCoordinatesParam);
        //Check down
        if(xcoord + 1 < aParam.length && aParam[xcoord+1][ycoord] == aParam[xcoord][ycoord] && !checkInclude(visitedCoordinatesParam, [xcoord+1, ycoord])) {
            visitedCoordinatesParam.push([xcoord + 1, ycoord]);
            checkSides(xcoord + 1, ycoord, aParam, visitedCoordinatesParam);
        }
        //Check up
        if(xcoord - 1 >= 0 && aParam[xcoord - 1][ycoord] == aParam[xcoord][ycoord] && !checkInclude(visitedCoordinatesParam, [xcoord-1, ycoord])) {
            visitedCoordinatesParam.push([xcoord - 1, ycoord]);
            checkSides(xcoord - 1, ycoord, aParam, visitedCoordinatesParam);
        }
        //Check left
        if(ycoord  - 1 >= 0 && aParam[xcoord][ycoord -1] == aParam[xcoord][ycoord] && !checkInclude(visitedCoordinatesParam, [xcoord, ycoord - 1])) {
            visitedCoordinatesParam.push([xcoord, ycoord - 1]);
            checkSides(xcoord, ycoord -1, aParam, visitedCoordinatesParam);
        }
        //Check right
        if(ycoord + 1 < aParam[0].length && aParam[xcoord][ycoord + 1] == aParam[xcoord][ycoord] && !checkInclude(visitedCoordinatesParam, [xcoord, ycoord + 1])) {
            visitedCoordinatesParam.push([xcoord, ycoord + 1]);
            checkSides(xcoord, ycoord + 1, aParam, visitedCoordinatesParam);
        }
    }

    for(let i = 0; i < A.length; i ++) {
        for(let j = 0; j < A[0].length; j ++) {
            if(!checkInclude(visitedCoordinates, [i, j])) {
                countriesNumber ++; //Increment as this is a new region/country
                visitedCoordinates.push([i, j]); //push this coord
                checkSides(i, j, A, visitedCoordinates)
            }
        }
    }

    console.log(visitedCoordinates);
    return countriesNumber;
}

console.log(solution([[5, 4, 4], [4, 3, 4], [3, 2, 4], [2, 2, 2], [3, 3, 4], [1, 4, 4], [4, 1, 1]]))