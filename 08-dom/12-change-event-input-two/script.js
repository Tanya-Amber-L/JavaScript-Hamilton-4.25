/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let password = document.getElementById("pass-one");
    let validation = document.getElementById("validity");

    password.addEventListener("input", function() {
        let passLength = password.value.length;
        let numbers = password.value.replace(/[^0-9]/g,"").length;

        if (passLength >= 8 && numbers >= 2) {
            validation.innerHTML = "Ok !";
        }
        else {
            validation.innerHTML = "Not ok";
        }
    })

})();
