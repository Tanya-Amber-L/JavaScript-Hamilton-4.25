/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later./

(function() {
    // to get the value of an input: document.getElementById("element-id").val
    
    let a = document.getElementById ("op-one").value;
    let b = document.getElementById ("op-two").value;

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        alert (Number(a) + Number(b));
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        alert (Number(a) - Number(b));

    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        alert (Number(a) * Number(b));

    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        alert (Number(a) / Number(b));

    });
// a la place de Number, utliser parseInt.documetn.get... ou +document.get...
})();
