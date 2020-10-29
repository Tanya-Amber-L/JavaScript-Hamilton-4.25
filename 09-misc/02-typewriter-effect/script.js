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
    let newText = "Nananère j'ai changé le texte HAHAHAHA !!! " + 
                "J'ai réussi à faire l'effet TypeWriter Waooow";
    let oldText = document.getElementById("target");
    
    oldText.innerHTML = newText;

    let i = 0;
    function TypeWriter() {

        if (i < newText.length) {
            newText.innerHTML = newText.charAt(i);
            i++;
            setTimeout(TypeWriter, 30);
        }

    }
   
    

})();
