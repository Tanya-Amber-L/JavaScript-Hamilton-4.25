/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.getElementById("target");
    let partOne = document.getElementById("part-one");
    let partTwo = document.getElementById("part-two");
    let partThree = document.getElementById("part-three");
    let partFour = document.getElementById("part-four");

    let result = [];
    result.length = 4;

    let a = 459;
    let b = -1;
    let c = -1;
    let d = -1;

    partOne.onclick = function() {
        a++;
        partOne.innerHTML = a;
        target.innerHTML = result;
        if (a >= 499) {
          a = 459;
        }
        result[0] = a;
      }

    partTwo.onclick = function() {
        b++;
        partTwo.innerHTML = b;
        target.innerHTML = result;
        if (b < 10) {
          b = `0${b}`
        }
        else if (b >= 99) {
          b = -1;
        }
        result[1] = b;
      }

    partThree.onclick = function() {
      c++;
      partThree.innerHTML = c;
      target.innerHTML = result;
      if (c < 10) {
        c = `0${c}`
      }
      else if (c >= 99) {
        c = -1;
      }
      result[2] = c;
      }

    partFour.onclick = function() {
      d++;
      partFour.innerHTML = d;
      target.innerHTML = result;
      if (d < 10) {
        d = `0${d}`
      }
      else if (d >= 99) {
        d = -1;
      }
      result[3] = d;
      }

})();
