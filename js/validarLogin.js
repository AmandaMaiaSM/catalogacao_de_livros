function validarLogin() {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Redireciona para a página inicial
    window.location.href = "../pages/pag_Inicial.html";
}
