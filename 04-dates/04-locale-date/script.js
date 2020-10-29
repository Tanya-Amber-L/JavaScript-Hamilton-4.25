/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let maintenant = new Date();
    let dayOfWeek = maintenant.getDay();
    let day = maintenant.getDate();
    let month = maintenant.getMonth();
    let year = maintenant.getFullYear();
    let hour = maintenant.getHours();
    let minutes = maintenant.getMinutes();

    let dayList = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Satuday"
    ]

    let monthlist = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]


    document.getElementById("target").innerHTML = dayList[dayOfWeek] + " " + day + " " + monthlist[month] + " " + year + ", " + hour + ":" + minutes;



})();
