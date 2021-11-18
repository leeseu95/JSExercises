// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, C, D) {
    //Declare vairables
    let cleanArray = [];
    let dirtyArray = [];
    let cleanPairs = 0;

    //Create two arrays that have the amount of pairs possible
    for(let i = 0; i < C.length; i ++) {
        var tempIndex = C[i];
        if(cleanArray[tempIndex] == undefined) {
            cleanArray[tempIndex] = 1;
        } else {
            cleanArray[tempIndex] += 1;
        }
    }
    for(let i = 0; i < D.length; i ++) {
        var tempIndex = D[i];
        if(dirtyArray[tempIndex] == undefined) {
            dirtyArray[tempIndex] = 1;
        } else {
            dirtyArray[tempIndex] += 1;
        }
    }

    //Clean odd clean pairs first 
    for(let i = 0; i < cleanArray.length; i ++) {
        if(cleanArray[i] == undefined) {
            continue;
        } else if (cleanArray[i] % 2 != 0 && dirtyArray[i] > 0 && K > 0) {
            cleanArray[i] ++;
            dirtyArray[i] --;
            K --;
        }
    }

    let tempMult = 2;
    //Check for dirty socks that can be cleaned as pairs
    if(K > 1) {
        for(let i = 0; i < dirtyArray.length; i ++) {
            if(cleanArray[i] == undefined && dirtyArray[i] > 1 && K > 1) {
                K -= 2;
                dirtyArray[i] -= 2;
                cleanArray[i] = 0;
                while(K > 1 && dirtyArray[i] > 1) {
                    tempMult += 2;
                    K -= 2;
                    dirtyArray[i] -= 2;
                }
                cleanArray[i] += tempMult;
                tempMult = 2;
            }
        }
    }

    //Check for clean socks that already exist that have dirty pairs as well
    if (K > 1) {
        for(let i = 0; i < cleanArray.length; i ++) {
            if(cleanArray[i] != undefined && dirtyArray[i] != undefined && K > 1 && dirtyArray[i] > 1) {
                K -= 2;
                dirtyArray[i] -= 2;
                while(K > 1 && dirtyArray[i] > 1) {
                    tempMult += 2;
                    K -= 2;
                    dirtyArray[i] -= 2;
                }
                cleanArray[i] += tempMult;
                tempMult = 2;
            }
        }
    }
    
    //Calculate the amount of pairs
    for(let i = 0; i < cleanArray.length; i ++) {
        if(cleanArray[i] == undefined) {
            continue;
        } else {
            if(cleanArray[i] % 2 == 0) {
                cleanPairs += (cleanArray[i] / 2);
            }
        }
    }

    return cleanPairs

}