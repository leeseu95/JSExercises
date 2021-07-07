/*Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.*/
//80, 77, 88, 95,68
//David, Vinoth, Divya, Ishitha, Thomas

function averageGrades(davidMark, vinothMark, divyaMark, ishithaMark, thomasMark) {
    let tempAverage = (davidMark + vinothMark + divyaMark + ishithaMark + thomasMark) / 5;

    if(tempAverage < 60) {
        console.log("Average Grade F");
    } else if (tempAverage < 70) {
        console.log("Average Grade D");
    } else if (tempAverage < 80) {
        console.log("Average Grade C");
    } else if (tempAverage < 90) {
        console.log("Average Grade B");
    } else {
        console.log("Average Grade A");
    }
}

averageGrades(80, 77, 88, 95, 68);