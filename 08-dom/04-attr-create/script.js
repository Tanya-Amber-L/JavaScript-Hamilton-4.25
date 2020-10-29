/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let valeurDataImage = document.getElementById("source").getAttribute("data-image");
    let elementParent = document.getElementById("target");
    let newImage = document.createElement("img");
    newImage.setAttribute("src", valeurDataImage)

    // prendre le parent. mot clé prepend(element créé) - pour l'ajouter comme premier enfant 
    elementParent.prepend(newImage);

})();
