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
    let age = prompt ("How old are you?");

    let gender = prompt ("Ok. Male or female?");

    let town = prompt ("Where do you live?");

    alert ("So, you are " + age + ", You're a " + gender + " and you live in " + town);

    let confirm = prompt ("Correct? Yes or no?")

    if (confirm === "yes") {
        break
    }
} 

// ou: créer une fonction qui va s'auto rappeler, tant que non confirmé
})();
