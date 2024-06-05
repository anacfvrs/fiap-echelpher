document.addEventListener('DOMContentLoaded', function() {
    const newPostForm = document.getElementById('new-post-form');

    newPostForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const category = document.getElementById('categories').value;
        const title = document.getElementById('title').value.trim();
        const description = document.getElementById('description').value.trim();

        if (title && description) {
            const newPost = {
                author: 'User', 
                time: 'Agora mesmo',
                title: title,
                description: description,
                category: category,
                views: 0,
                comments: 0,
                ups: 0
            };

            savePostToLocalStorage(newPost);

            window.location.href = 'home.html';
        }
    });

    function savePostToLocalStorage(post) {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
    }
});
