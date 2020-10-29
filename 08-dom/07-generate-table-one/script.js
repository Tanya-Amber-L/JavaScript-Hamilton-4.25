/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
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
    newTable.setAttribute("id","table");

    divParent.prepend(newTable);  //ajouter table sous le div 


    let newColumn = document.createElement("td");
    newColumn.setAttribute("id", "column")

    newTable.prepend(newColumn);

    for (i = 1; i < 11; i++) {
        let newRow = document.createElement("tr");
        newColumn.prepend(newRow);
    }
    
})();
