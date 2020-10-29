/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let divParent = document.getElementById("target");
    let newTable = document.createElement("table");

    divParent.prepend(newTable);  //ajouter table sous le div 

    for (let i = 1; i < 11; i++) {
        let newRow = document.createElement("tr");
        newTable.append(newRow);

        for (let j = 1; j < 11; j++) {
            let newColumn = document.createElement("td");
            newColumn.innerHTML = i +  "x" + j + "=" + i*j;
            newRow.append(newColumn);
        }
    }
})();
