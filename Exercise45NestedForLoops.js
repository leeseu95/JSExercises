/* Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor

*  
* *  
* * *  
* * * *  
* * * * *  */

function printStars() {
    for(let i = 1; i <= 5; i++) {
        for(let j = 1; j <= i; j++) {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
}

printStars();