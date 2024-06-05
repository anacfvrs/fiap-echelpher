document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.querySelector('.profile-form');

    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const minibio = document.getElementById('minibio').value.trim();
        const profilePicture = document.getElementById('profile-picture').files[0];

        alert('Perfil atualizado com sucesso!');
        window.location.href = 'home.html';
    });
});
