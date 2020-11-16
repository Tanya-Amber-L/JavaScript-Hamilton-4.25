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
    //METHODE LENY
    let template = document.getElementById("tpl-hero"); //import template to reproduce
    let target = document.getElementById("target"); //import target, where to reproduce
    document.getElementById("run").addEventListener("click", async () => {
        fetch('http://localhost:3000/heroes')
        .then(response => response.json())
        .then(dataXMen => console.log(dataXMen));

        dataXMen.forEach((hero) => {
            const elt = template.cloneNode(true).content;
            elt.querySelector(".name").innerText = name;
            elt.querySelector(".alter-ego").innerText = alterEgo;
            elt.querySelector("powers").innerText = powers.join(", ");

            target.appendChild(elt);
        })
    })

    //MA METHODE
    // displayHeroes = heroes => {
    //     let template = document.getElementById("tpl-hero"); //import template to reproduce
    //     let target = document.getElementById("target"); //import target, where to reproduce
    //     heroes.forEach(hero => {
    //         const clone = document.importNode(template.content, true);
    //         clone.querySelector(".name").textContent = hero.name
    //         clone.querySelector(".alter-ego").textContent = hero.alterEgo
    //         clone.querySelector(".powers").textContent = hero.abilities.join(", ")
    //         target.appendChild(clone);
    //     }); // for each hero, get his name, alter ego & powers, and clone it in the target
    // }

    // document.getElementById("run").addEventListener("click", () => {
    //     fetch('http://localhost:3000/heroes') //get the info with fetch
    //     .then(response => response.json())
    //     .then(heroesData => {
    //         displayHeroes(heroesData)
    //     }) //display my heroes data with the function displayHeroes above
    //     .catch(error => console.log(error));
    // })
})();

