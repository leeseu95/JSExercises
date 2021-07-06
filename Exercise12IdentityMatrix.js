/*10. Write a JavaScript function which returns the n rows by n columns identity matrix. Go to the editor*/

var n = 4;
var m = 5;
var matrixExample;
var matrixExampleIdentity;

function printMatrix(matrixParam) {
    if(matrixParam == undefined) {
        console.log("Matrix is empty");
        return;
    }

    for(let i = 0; i < matrixParam.length; i ++) {
        console.log(matrixParam[i]);
    }
}

function createMatrix(matrixRowPar, matrixColPar) {
    if(matrixRowPar == 0 || matrixColPar == 0) {
        console.log("Param cannot be 0");
        return;
    }

    const tempMat = new Array(matrixRowPar).fill(0).map(() => new Array(matrixColPar).fill(0));

    return tempMat;
    // for(let i = 0; i < tempMat.length; i ++) {
    //     for(let j = 0; j < tempMat[i].length; j++) {
    //         if(i == j) {
    //             tempMat[i][j] = 1;
    //         }
    //     }
    // }
    
    // printMatrix(tempMat)
}

function turnIntoIdentityMatrix(matrixParam) {
    if(matrixParam.length != matrixParam[0].length) {
        console.log("Matrix cannot be identity matrix as it is not n x n");
        return;
    }

    for(let i = 0; i < matrixParam.length; i ++) {
        for(let j = 0; j < matrixParam[i].length; j++) {
            if(i == j) {
                matrixParam[i][j] = 1;
            }
        }
    }
}

function createIdentityMatrix(matrixParamRowCol) {
    if(matrixParamRowCol == 0) {
        console.log("Param cannot be 0");
        return;
    }

    const tempMat = new Array(matrixParamRowCol).fill(0).map(() => new Array(matrixParamRowCol).fill(0));

    for(let i = 0; i < tempMat.length; i ++) {
        for(let j = 0; j < tempMat[i].length; j++) {
            if(i == j) {
                tempMat[i][j] = 1;
            }
        }
    }

    return tempMat;
}

// matrixExample = createMatrix(n, m);
// printMatrix(matrixExample);
// turnIntoIdentityMatrix(matrixExample);
// printMatrix(matrixExample);
matrixExampleIdentity = createIdentityMatrix(0);
printMatrix(matrixExampleIdentity);