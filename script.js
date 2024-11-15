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

    // Aqui você pode implementar a lógica de validação
    // Por enquanto, vamos apenas verificar se o número tem 6 dígitos alfanuméricos
    if (numeroCertificado.length === 6 && /^[A-Z0-9]{6}$/.test(numeroCertificado)) {
        document.getElementById('resultado').innerText = `Certificado válido para: ${nome} ${sobrenome} (Número: ${numeroCertificado})`;
    } else {
        document.getElementById('resultado').innerText = 'Número de certificado inválido!';
    }
});

// Função para gerar certificados aleatórios e armazená-los (em memória)
let listaCertificados = [];

function gerarCertificados() {
    const nome = prompt("Digite o nome do certificado:");
    const sobrenome = prompt("Digite o sobrenome do certificado:");

    const numeroCertificado = gerarNumeroCertificado();
    listaCertificados.push({ nome, sobrenome, numeroCertificado });

    console.log("Certificados Gerados:", listaCertificados);

    alert(`Certificado gerado! Nome: ${nome} ${sobrenome}, Número: ${numeroCertificado}`);
}

// Caso queira armazenar em uma planilha Google ou outro banco de dados, precisaria de uma integração com uma API, como o Google Sheets API.
