/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let i = 0;
        window.lib.getPosts((error, posts) => {
            if (error) {
                console.log(error);
            } else {
                posts.forEach(posts => {
                    window.lib.getComments(posts.id , (error, comments) => {
                        if (error) {
                            console.log(error);
                        } else {
                            posts.comments = comments;
                        }
                        if (++i === posts.length) {
                            console.log(posts);
                        }
                    }
                })
            }
        });
    })
})();
