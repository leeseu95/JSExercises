//Exercise 1
//Seung Lee

//Variables for our dates/times
var today;
var todaysMonth;
var todaysDay;
var todaysHour;
var todaysMinutes;
var todaysSeconds;

function printDate() {
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    today = new Date();
    todaysMonth = today.getMonth();
    todaysDay = weekDays[today.getDay()];
    todaysHour = getHourFunc(today);
    todaysMinutes = today.getMinutes();
    todaysSeconds = today.getSeconds();
    

    console.log("Today is: " + todaysDay + "\nCurrent Time is: " + todaysHour + ":" + todaysMinutes + ":" + todaysSeconds);
}

function getHourFunc(day) {
    if (day.getHours() > 12) {
        return (day.getHours() - 12) + " PM ";
    } else {
        return (day.getHours() + " AM ");
    }
}

printDate();