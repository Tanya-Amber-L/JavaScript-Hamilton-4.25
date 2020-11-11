/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.getElementById("target");
    let new_text = document.createElement("span");
    new_text.innerHTML = "What's this sensation ?";
    target.appendChild(new_text);
    let sentence = target.innerHTML;
    let array = target.innerHTML.split(' ');
    target.innerHTML =" ";

    let j =0;
    array.forEach(item =>
        {
            
            let span_for_one = document.createElement("span");
            target.appendChild(span_for_one);
            span_for_one.setAttribute("class", `span_one`);
            
        })
       
        let array_class = document.getElementsByClassName(`span_one`);
        for(let i= 0; i<array_class.length; i++)
        {
            array_class[i].innerHTML = `${array[i]} `; 
            array_class[i].style.fontSize = `${(i+1)*10}px`;
        }
})();
