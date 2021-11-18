/*
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

*/

function solution(A) {
    A = A.sort(function (a, b) {return a - b});

    let tempCounter = 1;
    let startPos = 0;
    let allNegative = true;

    for(let i = 0; i < A.length; i ++) {
        if(A[i] >= tempCounter) {
            allNegative = false;
            startPos = i;
            break;
        }
    }

    if(allNegative == false) {
        tempCounter = A[startPos]
        if(A[startPos] != 1) {
                return 1;
        }
        for(let i = startPos; i < A.length; i ++) {
            if(tempCounter != A[i]) {
                break;
            }
            if(tempCounter != A[i + 1]) {
                tempCounter ++;
            }
        }
    }

    if(allNegative == true) {
        return 1;
    } else {
        return tempCounter;
    }
}
