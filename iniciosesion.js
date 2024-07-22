// script.js

function login(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar la lógica de autenticación
    if (username === 'admin' && password === 'admin123') {
        alert('Inicio de sesión exitoso');
        window.location.href = 'reporteSyE.html'; // Redirige a la página principal después del inicio de sesión exitoso
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}
