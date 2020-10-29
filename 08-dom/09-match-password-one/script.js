/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    

    document.getElementById("run").addEventListener("click", function() {
        let password1 = document.getElementById("pass-one").value;
        let password2 = document.getElementById("pass-two").value;
        let input1 = document.getElementById("pass-one");
        let input2 = document.getElementById("pass-two");

        if (password1 != password2) {
            input1.style.borderColor = "red";
            input2.style.borderColor = "red";
        }
    })

})();
