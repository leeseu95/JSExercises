/*
Find the maximum height of a binary tree
*/
function solution(T) {
    if(T == null) {
        return -1;
    } else if (T.l == null && T.r == null) {
        return 0;
    } else {
        leftDepth = solution(T.l);
        rightDepth = solution(T.r);

        if(leftDepth > rightDepth) {
            return leftDepth + 1;
        } else {
            return rightDepth + 1;
        }
    }

}