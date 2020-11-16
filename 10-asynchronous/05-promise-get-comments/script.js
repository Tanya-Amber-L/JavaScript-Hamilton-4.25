/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // MA METHODE
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts().then(function(posts) {
            console.log(posts);
            posts.forEach(post => {
                window.lib.getComments(post.id).then((comments)=> {
                    post.comments = comments;
                    console.log(posts);
                })
            });
        })
    })

    //METHODE LENY
    // document.getElementById("run").addEventListener("click", () => {
    //     window.lib.getPosts().then(function(posts) {
    //         Promise.all(
    //             posts.map(post=>window.lib.getComments(post.id))
    //         ).then(()=>{

    //         })
    //     })
    // })
})();