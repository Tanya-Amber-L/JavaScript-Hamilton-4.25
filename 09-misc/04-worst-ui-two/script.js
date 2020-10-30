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

    let a = 460;
    let b = 00;
    let c = 00;
    let d = 00;

    function createPhoneNumberByClick() {
      partOne.onclick = function() {
        a++;
        let partOneModified = partOne.innerHTML = a;
      }

    partTwo.onclick = function() {
        b++;
        let partTwoModified = partTwo.innerHTML = b;
      }

    partThree.onclick = function() {
        c++;
        let partThreeModified = partThree.innerHTML = c;
      }

    partFour.onclick = function() {
        d++;
        let partFourModified = partFour.innerHTML = d;
      }
    
    target.innerHTML = "0" + partOneModified + partTwoModified + partThreeModified + partFourModified;
    }
    
    createPhoneNumberByClick();

})();
