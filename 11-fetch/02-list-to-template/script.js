/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let name = document.querySelector(".name");
    let alterEgo = document.querySelector(".alter-ego");
    let powers = document.querySelector(".powers");
    let template = document.querySelector("#tpl-hero");
    let target = document.querySelector("#target");
    document.getElementById("run").addEventListener("click", () => {
        fetch('http://localhost:3000/heroes')
        .then(response => response.json())
        .then(dataXMen => forEach(dataXMen => {
            let clone =  document.importNode(template.content, true);
            name.textContent = dataXMen.name;
            alterEgo.textContent = dataXMen.alterEgo;
            powers.textContent = dataXMen.abilities;
            target.appendChild(clone);
        }));
    })
})();