document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    const commentText = document.getElementById('comment-text');
    const commentsContainer = document.getElementById('comments');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const commentContent = commentText.value.trim();
        
        if (commentContent) {
            addComment(commentContent, 'user', new Date().toLocaleString());
            commentText.value = '';
        }
    });

    function addComment(content, author, time) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `
            <div class="comment-header">
                <span>@${author}</span>
                <span>${time}</span>
            </div>
            <p>${content}</p>
            <div class="comment-actions">
                <span>0</span>
                <button class="reply-button">Responder</button>
            </div>
        `;

        commentsContainer.appendChild(commentDiv);
        addReplyFunctionality(commentDiv);
    }

    function addReplyFunctionality(commentDiv) {
        const replyButton = commentDiv.querySelector('.reply-button');
        replyButton.addEventListener('click', function() {
            const replyForm = document.createElement('form');
            replyForm.className = 'reply-form';
            replyForm.innerHTML = `
                <textarea placeholder="Digite sua resposta"></textarea>
                <div class="comment-actions">
                    <button type="button" class="cancel-button">Cancelar</button>
                    <button type="submit" class="reply-comment-button">Responder</button>
                </div>
            `;

            commentDiv.appendChild(replyForm);

            const cancelButton = replyForm.querySelector('.cancel-button');
            const replyCommentButton = replyForm.querySelector('.reply-comment-button');

            cancelButton.addEventListener('click', function() {
                commentDiv.removeChild(replyForm);
            });

            replyForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const replyContent = replyForm.querySelector('textarea').value.trim();
                
                if (replyContent) {
                    addReply(replyContent, 'user', new Date().toLocaleString(), commentDiv);
                    commentDiv.removeChild(replyForm);
                }
            });
        });
    }

    function addReply(content, author, time, commentDiv) {
        const replyDiv = document.createElement('div');
        replyDiv.className = 'reply';
        replyDiv.innerHTML = `
            <div class="comment-header">
                <span>@${author}</span>
                <span>${time}</span>
            </div>
            <p>${content}</p>
            <div class="comment-actions">
                <span>0</span>
                <button class="reply-button">Responder</button>
            </div>
        `;

        commentDiv.appendChild(replyDiv);
        addReplyFunctionality(replyDiv);
    }
});

