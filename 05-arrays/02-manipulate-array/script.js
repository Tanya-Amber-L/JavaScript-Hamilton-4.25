/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here

    document.getElementById("run").addEventListener ("click", function (){
        let first = fruits.shift(); //enleve le premier
        let last = fruits.pop(); // enleve le dernier

        let newFirst = fruits.unshift("banana"); //ajout au début
        let newLast = fruits.push("kiwi"); //ajout à la fin
        console.log(fruits);
    })
    
    

})();
