/*An integer K and a non-empty array A consisting of N integers are given.

A pair of integers (P, Q), such that 0 ≤ P ≤ Q < N, is called a slice of array A.

A bounded slice is a slice in which the difference between the maximum and minimum values in the slice is less than or equal to K. More precisely it is a slice, such that max(A[P], A[P + 1], ..., A[Q]) − min(A[P], A[P + 1], ..., A[Q]) ≤ K.

The goal is to calculate the number of bounded slices.

For example, consider K = 2 and array A such that:

    A[0] = 3
    A[1] = 5
    A[2] = 7
    A[3] = 6
    A[4] = 3
There are exactly nine bounded slices: (0, 0), (0, 1), (1, 1), (1, 2), (1, 3), (2, 2), (2, 3), (3, 3), (4, 4).

Write a function:

function solution(K, A);

that, given an integer K and a non-empty array A of N integers, returns the number of bounded slices of array A.

If the number of bounded slices is greater than 1,000,000,000, the function should return 1,000,000,000.

For example, given:

    A[0] = 3
    A[1] = 5
    A[2] = 7
    A[3] = 6
    A[4] = 3
the function should return 9, as explained above. */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var arrLength = A.length;
    var tempMin = 0;
    var tempMax = 0;
    var arrSlices = [];

    for(let i = 0; i < arrLength; i ++) {
        for(let j = i + 1; j <= arrLength; j ++) {
            tempMin = Math.min(...A.slice(i, j));
            tempMax = Math.max(...A.slice(i, j));
            // console.log(tempMin, tempMax);
            if((tempMax - tempMin) <= K) {
                arrSlices.push([i , j-1]);
            }
        }
    }

    return arrSlices.length;

}


//Codility Practice Test 2
//Clear Time: 22 minutes, Time given: 2 Hours
//Difficulty: Medium
console.log(solution(2, [3, 5, 7, 6, 3]));