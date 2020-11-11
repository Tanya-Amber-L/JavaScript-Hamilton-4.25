/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  // your code here

  const WantCake = prompt ("Do you want some cake?");

  if (WantCake == "yes") {
    alert ("Great! Here it is")
  }

  else {
    alert ("More cake for me then!")
  }

  // ou
  // const WantCake = confirm ("Do you want some cake?");

  // alert(
  //   WantCake:
  //   ?("Great! Here it is")
  //   :("More cake for me then!")
  // )

})();