document.addEventListener('DOMContentLoaded', function() {
    const profissionalHelperCheckbox = document.getElementById('profissional-helper');
    const profissionalDetails = document.querySelectorAll('.profissional-details');
    const cepInput = document.getElementById('cep');
    const ruaInput = document.getElementById('rua');
    const bairroInput = document.getElementById('bairro');
    const cidadeInput = document.getElementById('cidade');
    const estadoInput = document.getElementById('estado');

    profissionalHelperCheckbox.addEventListener('change', function() {
        if (this.checked) {
            profissionalDetails.forEach(detail => detail.style.display = 'block');
        } else {
            profissionalDetails.forEach(detail => detail.style.display = 'none');
        }
    });

    cepInput.addEventListener('blur', function() {
        const cep = cepInput.value.replace(/\D/g, '');

        if (cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    if (!data.erro) {
                        ruaInput.value = data.logradouro;
                        bairroInput.value = data.bairro;
                        cidadeInput.value = data.localidade;
                        estadoInput.value = data.uf;
                    } else {
                        alert('CEP não encontrado.');
                    }
                })
                .catch(error => {
                    console.error('Erro ao buscar CEP:', error);
                    alert('Erro ao buscar CEP.');
                });
        }
    });
});


