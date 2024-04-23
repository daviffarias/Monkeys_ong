document.addEventListener("DOMContentLoaded", function() {
    const btnRegistrar = document.querySelector("#botao-registrar");

    btnRegistrar.addEventListener("click", function() {
        const form = document.querySelector("#register-form");
        const nome = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const senha = document.querySelector("#password").value;

        let formIsValid = true;  // A flag to indicate form validity

        // Clear previous errors
        limparErros();

        // Name validation
        if (!nome) {
            mostrarErro("name", "O nome é obrigatório");
            formIsValid = false;
        }

        // Email validation
        if (!email || !email.includes('@') || !email.includes('.')) {
            mostrarErro("email", "Insira um e-mail válido");
            formIsValid = false;
        }

        // Password validation
        if (senha.length < 6) {
            mostrarErro("password", "A senha deve ter pelo menos 6 caracteres");
            formIsValid = false;
        }

        // If form is valid, you might want to actually submit the form
        if (formIsValid) {
            console.log("Formulário válido, proceder com envio de dados");
            // form.submit();  // Uncomment this to submit the form when ready
        }
    });
});

function limparErros() {
    document.querySelectorAll(".is-danger").forEach(el => {
        el.classList.remove("is-danger");
    });
    document.querySelectorAll(".help.is-danger").forEach(el => {
        el.textContent = '';
    });
}

function mostrarErro(campoId, mensagem) {
    const campo = document.querySelector("#" + campoId);
    const erro = document.querySelector("#" + campoId + "-error");
    campo.classList.add("is-danger");
    erro.textContent = mensagem;
}
