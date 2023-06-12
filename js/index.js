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
    } else {
        alert("El correo electrónico es inválido");
    }
    var nombre = document.getElementById("Nombre").value;
    var email = document.getElementById("email").value;
    if (nombre.trim() === "") {
			alert("Por favor, ingrese su nombre.");
			return false;
	}
	if (email.trim() === "") {
		alert("Por favor, ingrese su correo electrónico.");
		return false;
	}
}
function enviarFormulario() {   
    // Mostrar el mensaje de enviado después de enviar el formulario
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('mensaje-enviado').style.display = 'flex';
  }

  document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'CA7JZphjiTw3U9ciIQrxI1IykxrNfZ3SLO7bLglaDhU';
    const imageContainer = document.getElementById('image-container');
  
    function fetchPexelsImage() {
      fetch('https://api.pexels.com/v1/search?query=nature', {
        headers: {
          Authorization: apiKey
        }
      })
        .then(response => response.json())
        .then(data => {
          const image = data.photos[0];
          const img = document.createElement('img');
          img.src = image.src.medium;
          img.alt = image.photographer;
          imageContainer.appendChild(img);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  
    fetchPexelsImage();
  });
