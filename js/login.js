document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === 'user' && password === 'password') {
            alert('Login bem-sucedido!');
            window.location.href = 'home.html';
        } else {
            alert('Username ou senha incorretos. Tente novamente.');
        }
    });
});
