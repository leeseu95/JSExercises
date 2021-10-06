/** Test 
 * A non-empty array A consisting of N integers is given.

Array A represents a linked list. A list is constructed from this array as follows:

the first node (the head) is located at index 0;
the value of a node located at index K is A[K];
if the value of a node is −1 then it is the last node of the list;
otherwise, the successor of a node located at index K is located at index A[K] (you can assume that A[K] is a valid index, that is 0 ≤ A[K] < N).
For example, for array A such that:

  A[0] =  1
  A[1] =  4
  A[2] = -1
  A[3] =  3
  A[4] =  2
*/


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var arrLength = 0;
    var currentNode = 0;
    var temp = 0;

    while(currentNode >= 0) { //If currentNode becomes -1, then we break out of the loop
        temp = A[currentNode];
        currentNode = temp;
        arrLength += 1; //Increment the arrLength by 1 after each iteration
    }

    return arrLength;
}

//Clear time 13 mins, given time 2 hours
//Difficulty : Easy
console.log(solution([1, 4, -1, 3, 2]));