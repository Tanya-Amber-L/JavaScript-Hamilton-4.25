/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //METHODE LENY
    document.getElementById("run").addEventListener("click", async() => {
        let posts= await window.lib.getPosts();
        const comments = await Promise.all(
            posts.map(post=>window.lib.getComments(postID))
        );

        comments.forEach((comments, i) => {
            posts[i].comments = comments;
        })

        console.log(posts)
    })

    // MA METHODE
    // async function promiseGetPosts() {
    //     const posts = await window.lib.getPosts();
    //     try {
    //         posts.forEach((post) => {
    //             post.comment = promiseGetComments(post.id);
    //         });
    //         console.log(posts);
    //     } catch(error) {
    //         console.error(error);
    //     }
    // }

    // async function promiseGetComments(postID) {
        
    //     try {
    //         return comments.value;
    //     } catch(error) {
    //         console.error(error);
    //     }
    // }

    // document.getElementById("run").addEventListener("click", () => {
    //     promiseGetPosts();
    // })
})();