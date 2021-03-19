/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let template = document.querySelector("#tpl-hero"); //import template to reproduce
let target = document.querySelector("#target"); //import target, where to reproduce
let input = document.querySelector("#hero-id");

(() => {
    document.querySelector("#run").addEventListener("click", async () => {
        const id = +input.value;
        if (isNaN(id)) {
            console.error("invalid id");
            return;
        }
        try {
            const response = await fetch(`http://localhost:3000/heroes/${id}`)
            const {name, alterEgo, abilities} = await response.json();
            const elt = template.cloneNode(true).content;
            elt.querySelector(".name").innerText = name;
            elt.querySelector(".alter-ego").innerText = alterEgo;
            elt.querySelector(".powers").innerText = abilities.join(", ");

            target.firstElementChild 
                ? target.replaceChild(elt, target.firstElementChild)
                : target.appendChild(elt);
        }
        catch (error) {
            console.error("unknown hero");
        }
    });
})();
