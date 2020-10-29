/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener ("click", function() {
        let jour = document.getElementById("dob-day").value;
        let mois = (document.getElementById("dob-month").value)-1;
        let annee = document.getElementById("dob-year").value;
        let anniversaire = new Date(annee, mois, jour);
        let maintenant = new Date();
        let difference = maintenant-anniversaire.getTime();
        let ageDifference = new Date (difference);
        let age = ageDifference.getFullYear()-1970;
        alert("You are " + age);
    })
    
    

})();
