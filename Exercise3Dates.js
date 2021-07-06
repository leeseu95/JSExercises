//Exercise 3 print date in mm/dd/yyyy format
//Seung Lee

//Variables for our dates/time
var today;
var todaysMonth;
var todaysDay;
var todaysHour;
var todaysMinutes;
var todaysSeconds;

// const readline = require('readline');
const prompt = require('prompt-sync')();

function printDate() {
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    today = new Date();
    todaysMonth = today.getMonth();
    todaysDay = weekDays[today.getDay()];
    todaysHour = getHourFunc(today);
    todaysMinutes = today.getMinutes();
    todaysSeconds = today.getSeconds();
    console.log("Please input 1 for mm/dd/yyyy or input 2 for dd/mm/yyyy format\n");
    var option = prompt();
    
    // console.log("Today is: " + todaysDay + "\nCurrent Time is: " + todaysHour + ":" + todaysMinutes + ":" + todaysSeconds);

    while(option != 1 || option != 2) {
        switch(option) {
            case '1': //Option 1
                console.log(todaysMonth + "/" + today.getDate() + "/" + today.getFullYear());
                return;
            case '2':
                console.log(today.getDate() + "/" + todaysMonth + "/" +today.getFullYear());
                return;
            default:
                console.log("Please input the correct option. 1 for mm/dd/yyyy or 2 for dd/mm/yyyy\n");
                var option = prompt();
    
        }
    }
}

function getHourFunc(day) {
    if (day.getHours() > 12) {
        return (day.getHours() - 12) + " PM ";
    } else {
        return (day.getHours() + " AM ");
    }
}

printDate();