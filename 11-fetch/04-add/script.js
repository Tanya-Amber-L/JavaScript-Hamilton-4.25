/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let inputs = Array.from(
        document.querySelectorAll("input")
    )
    let template = document.getElementById("tpl-hero"); //import template to reproduce
    let target = document.getElementById("target"); //import target, where to reproduce
    let input = document.querySelector("#hero-id");
    document.getElementById("run").addEventListener("click", async () => {
        const values = inputs.map(({values})=>value.trim());
        
        if (values.some (
            (val)=>val===""
        )) {
            console.error("empty input");
            return
        }

        const [name, alterEgo, powers]=values;
        const response = await fetch
        //REVOIR CORRECTION DE LENY
    })
})();
