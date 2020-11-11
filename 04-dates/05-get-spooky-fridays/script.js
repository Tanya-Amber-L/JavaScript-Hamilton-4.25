/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    
// your code here
    let nombreMois = [];
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
        "December"
    ];

    

    function MoisVendredi13(){
        let year = document.getElementById("year").value;
        for (let i=0; i<12; i++) {
           let date = new Date(year, i, 13);
           if (date.getDay() === 5 ) {
               nombreMois.push(monthlist[i]);
           } 
        }
        return nombreMois;
    }
    
    document.getElementById("run").addEventListener ("click", function() {
        MoisVendredi13();
        alert(nombreMois);
        nombreMois.length = 0;
    });

    
    
})();
