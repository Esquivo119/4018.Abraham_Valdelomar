document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('loginError');

    // Verificar credenciales (aquí está un ejemplo simple, pero normalmente se haría una validación en el servidor)
    if (username === 'Profesor' && password === 'AbrahamValdelomar') {
        // Redirigir a la página principal si las credenciales son correctas
        window.location.href = 'principal.html';
    } else {
        // Mostrar mensaje de error si las credenciales son incorrectas
        loginError.textContent = 'Usuario o contraseña incorrectos';
    }
});
