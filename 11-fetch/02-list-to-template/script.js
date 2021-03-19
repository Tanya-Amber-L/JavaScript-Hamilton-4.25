/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let template = document.getElementById("tpl-hero"); //import template to reproduce
let target = document.getElementById("target"); //import target, where to reproduce

(() => {
    document.getElementById("run").addEventListener("click", async () => {
        const response = await fetch('http://localhost:3000/heroes')
        const dataXMen = await response.json();

        dataXMen.forEach(({name, alterEgo, abilities}) => {
            const elt = template.cloneNode(true).content;
            elt.querySelector(".name").innerText = name;
            elt.querySelector(".alter-ego").innerText = alterEgo;
            elt.querySelector(".powers").innerText = abilities.join(", ");

            target.appendChild(elt);
        })
    })
})();

