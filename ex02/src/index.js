const workDays = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

function myWeek(days) {
    // Only change code below this line
    let week = [...workDays, 'SAT', 'SUN']; // Change this line
    // Only change code above this line
    return week;
}
console.log(myWeek(workDays));
module.exports = myWeek;