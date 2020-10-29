/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

while (true) {   
    
    var age = prompt ("How old are you?");

    var gender = prompt ("Ok. Male or female?");

    var town = prompt ("Where do you live?");

    alert ("So, you are " + age + ", You're a " + gender + " and you live in " + town);

    var confirm = prompt ("Correct? Yes or no?")

    if (confirm === "yes") {
        break
    }

} 
})();
