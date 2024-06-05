document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('first-post').addEventListener('click', function() {
        window.location.href = 'post.html';
    });

    document.getElementById('user-profile-img').addEventListener('click', function() {
        window.location.href = 'edit-profile.html';
    });

    loadPostsFromLocalStorage();

    function loadPostsFromLocalStorage() {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        const postsContainer = document.getElementById('posts');
        
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.className = 'post';
            postDiv.innerHTML = `
                <div class="post-header">
                    <img src="assets/images/user-post1.png" alt="User Avatar">
                    <div class="post-info">
                        <h2>${post.author}</h2>
                        <span>${post.time}</span>
                    </div>
                </div>
                <div class="post-content">
                    <h3>${post.title}</h3>
                    <p>${post.description}</p>
                    <div class="post-tags">
                        <span class="tag">${post.category}</span>
                    </div>
                </div>
                <div class="post-footer">
                    <div class="post-activity">
                        <div class="activity-item">
                            <img src="assets/images/eye.png" alt="Views">
                            <span>${post.views}</span>
                        </div>
                        <div class="activity-item">
                            <img src="assets/images/message-square.png" alt="Comments">
                            <span>${post.comments}</span>
                        </div>
                        <div class="activity-item">
                            <img src="assets/images/arrow-up.png" alt="Ups">
                            <span>${post.ups}</span>
                        </div>
                    </div>
                </div>
            `;
            postsContainer.appendChild(postDiv);

            // Adiciona evento de clique para cada post dinamicamente criado
            postDiv.addEventListener('click', function() {
                // Salva o post clicado no localStorage para exibição na página de detalhes
                localStorage.setItem('currentPost', JSON.stringify(post));
                window.location.href = 'post.html';
            });
        });
    }
});




