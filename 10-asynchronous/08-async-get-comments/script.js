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
    async function promiseGetPosts() {
        const posts = await window.lib.getPosts();
        try {
            posts.forEach((post) => {
                post.comment = promiseGetComments(post.id);
            });
            console.log(posts);
        } catch(error) {
            console.error(error);
        }
    }

    async function promiseGetComments(postID) {
        const comments = await window.lib.getComments(postID);
        try {
            return comments.value;
        } catch(error) {
            console.error(error);
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        promiseGetPosts();
    })
})();