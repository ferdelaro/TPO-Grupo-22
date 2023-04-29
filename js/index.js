function validarEmail(email) {
    // Expresión regular para verificar si el correo electrónico es válido
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function verificar() {
    // Obtener el valor del correo electrónico ingresado
    var email = document.getElementById("email").value;
    // Verificar si el correo electrónico es válido
    if (validarEmail(email)) {
        alert("El correo electrónico es válido");
    } else {
        alert("El correo electrónico es inválido");
    }
}