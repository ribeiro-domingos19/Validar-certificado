document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const numeroReferencia = Math.random().toString(36).substring(2, 10).toUpperCase();

    // Salvar dados no Firestore
    database.collection("alunos").add({
        nome: nome,
        email: email,
        senha: senha,
    }).then(() => {
        alert("Cadastro realizado com sucesso!");
        document.getElementById("cadastroForm").reset();
    }).catch((error) => {
        console.error("Erro ao salvar dados:", error);
        alert("Houve um problema ao realizar o cadastro.");
    });
});
