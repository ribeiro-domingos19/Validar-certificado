// Função para gerar o número alfanumérico de 6 dígitos
function gerarNumeroCertificado() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let numero = '';
    for (let i = 0; i < 6; i++) {
        numero += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return numero;
}

// Função para manipular a submissão do formulário de validação
document.getElementById('form-certificado').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const numeroCertificado = document.getElementById('numero-certificado').value;

    // Verifica se o número do certificado é válido
    if (numeroCertificado.length === 6 && /^[A-Z0-9]{6}$/.test(numeroCertificado)) {
        // Armazena os dados no LocalStorage
        let certificados = JSON.parse(localStorage.getItem('certificados')) || [];
        certificados.push({ nome, sobrenome, numeroCertificado });
        localStorage.setItem('certificados', JSON.stringify(certificados));

        // Exibe a mensagem de sucesso
        document.getElementById('resultado').innerText = `Certificado válido para: ${nome} ${sobrenome} (Número: ${numeroCertificado})`;
    } else {
        document.getElementById('resultado').innerText = 'Número de certificado inválido!';
    }

    // Limpa os campos
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('numero-certificado').value = '';
});

// Função para visualizar os dados armazenados
function verificarDados() {
    const certificados = JSON.parse(localStorage.getItem('certificados')) || [];
    const listaCertificados = document.getElementById('lista-certificados');

    listaCertificados.innerHTML = '';

    if (certificados.length === 0) {
        listaCertificados.innerHTML = '<li>Não há certificados armazenados.</li>';
    } else {
        certificados.forEach(certificado => {
            const item = document.createElement('li');
            item.innerText = `Nome: ${certificado.nome} ${certificado.sobrenome} - Certificado: ${certificado.numeroCertificado}`;
            listaCertificados.appendChild(item);
        });
    }
}

// Carregar os dados salvos ao iniciar a página
window.onload = function() {
    verificarDados();
};
