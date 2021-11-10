/*A non-empty array A consisting of N integers is given. The unique number is the number that occurs exactly once in array A.

For example, the following array A:

  A[0] = 4
  A[1] = 10
  A[2] = 5
  A[3] = 4
  A[4] = 2
  A[5] = 10
contains two unique numbers (5 and 2).

You should find the first unique number in A. In other words, find the unique number with the lowest position in A.

For above example, 5 is in second position (because A[2] = 5) and 2 is in fourth position (because A[4] = 2). So, the first unique number is 5.

Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the first unique number in A. The function should return −1 if there are no unique numbers in A.*/


function solution(A) {
    var tempArray = new Array();

    for(let i = 0; i < A.length; i ++) {
        var tempIndex = A[i];
        if(tempArray[tempIndex] === undefined) {
            tempArray[tempIndex] = 1;
        } else {
            tempArray[tempIndex] += 1;
        }
    }

    for(let i = 0; i < A.length; i ++) {
        if(tempArray[A[i]] == 1) {
            return A[i];
        }
    }
    
    return -1;
}
