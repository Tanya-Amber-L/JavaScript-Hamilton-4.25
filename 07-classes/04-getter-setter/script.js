/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            return this.firstname + " " + this.lastname;
        }

        set name(newName) {
            [this.firstname, this.lastname] = newName.split(" ");
        }

    }

    document.getElementById("run").addEventListener("click", function() {
        let person1 = new Person("Tanya", "Leenders");
        console.log(person1);

        person1.name = "Scarlett Johansson";
        console.log(person1);
    })
    
    
    
})();
