/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let newText = "Bon je pense que j'ai réussi à changer le texte. Génial !!! "

    let target = document.getElementById("target");
    
    target.innerHTML = newText;

    let text = [...target.innerText].map(x => `<span>${x}</span>`).join("");

    target.innerHTML = text;

    target.style.visibility = "hidden";

    let i = 0;

    const interval = setInterval(revealLetter, 100);
    
    function revealLetter(){

        target.childNodes[i++].style.visibility = "visible";

        if (i >= target.childNodes.length) {
            clearInterval(interval);
        }
    }
    
})();
