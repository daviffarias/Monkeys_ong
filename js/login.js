document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        let valid = true;

        if (!email) {
            alert('Por favor, insira seu e-mail.');
            valid = false;
        } else if (!email.includes('@') || !email.includes('.')) {
            alert('Por favor, insira um e-mail válido.');
            valid = false;
        }

        if (!password) {
            alert('Por favor, insira sua senha.');
            valid = false;
        }

        if (valid) {
            form.submit();
        }
    });
});
