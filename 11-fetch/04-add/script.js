/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let inputs = Array.from(document.querySelectorAll("input"));

(() => {
    document.querySelector("#run").addEventListener("click", async () => {
        const values = inputs.map(({value}) => value.trim());

        if (values.some(val => val === "")) {
            console.error("Empty input!");
            return;
        }

        const [name, alterEgo, powers] = values;

        const response = await fetch(`//localhost:3000/heroes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                alterEgo,
                abilities: powers.split(",").map(str => str.trim()),
            }),
        });

        const reponseAllHeroes = await fetch ("//localhost:3000/heroes")
        const allHeroes = await reponseAllHeroes.json();

        console.log("All heroes:", allHeroes);
    });
})();
