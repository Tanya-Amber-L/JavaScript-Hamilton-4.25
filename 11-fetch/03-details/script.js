/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let template = document.getElementById("tpl-hero"); //import template to reproduce
    let target = document.getElementById("target"); //import target, where to reproduce
    let input = document.querySelector("#hero-id");
    document.getElementById("run").addEventListener("click", async () => {
        const id = +input.value;
        
        if (isNaN(id)) {
            console.error("invalid id");
            return
        }

        try {
            fetch('http://localhost:3000/heroes')
            .then(response => response.json())
            .then(dataXMen => console.log(dataXMen));
            
            const elt = template.cloneNode(true).content;

            elt.querySelector(".name").innerText = name;
            elt.querySelector(".alter-ego").innerText = alterEgo;
            elt.querySelector("powers").innerText = powers.join(", ");

            target.firstElementChild 
                ? target.replaceChild(elt...)
                : target.appendChild(elt);
        }
        catch {

        }
        
    })
})();
