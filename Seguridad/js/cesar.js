// Función para cifrar el mensaje
function cifrarMensaje() {
    var mensaje = document.getElementById("txtCifrar").value;
    var clave = parseInt(document.getElementById("txtClave").value);

    var mensajeCifrado = cifrar(mensaje, clave);
    
      Swal.fire({
        title: mensajeCifrado,
        background: '#343a40', // Establece el fondo a oscuro
        confirmButtonColor: '#ecc448',
        confirmButtonText: 'Aceptar',
        customClass: {
            title: 'text-white', // Cambia el color del título a blanco
          },
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      
}

// Función para descifrar el mensaje
function descifrarMensaje() {
    var mensajeCifrado = document.getElementById("txtCifrar").value;
    var clave = parseInt(document.getElementById("txtClave").value);

    var mensajeDescifrado = descifrar(mensajeCifrado, clave);
    

    Swal.fire({
        title: mensajeDescifrado,
        background: '#343a40', // Establece el fondo a oscuro
        confirmButtonColor: '#ecc448',
        confirmButtonText: 'Aceptar', // Cambia el texto del botón a "Aceptar"
        customClass: {
            title: 'text-white', // Cambia el color del título a blanco
          },
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });

}


document.addEventListener("DOMContentLoaded", function () {
  
    var btnCifrar = document.getElementById("btnCifrar");
    var btnDescifrar = document.getElementById("btnDescifrar");

    btnCifrar.addEventListener("click", cifrarMensaje);
    btnDescifrar.addEventListener("click", descifrarMensaje);
});



function cifrar(text, key) {
    var textCifrado = "";
    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);

        if (/[a-zA-Z]/.test(text[i])) {
         
            charCode = charCode + key;

           
            if (text[i].toLowerCase() === text[i]) {
                if (charCode < 97) {
                    charCode += 26;
                } else if (charCode > 122) {
                    charCode -= 26;
                }
            } else {
                if (charCode < 65) {
                    charCode += 26;
                } else if (charCode > 90) {
                    charCode -= 26;
                }
            }
        }

        textCifrado += String.fromCharCode(charCode);
    }

    return textCifrado;
}

function descifrar(textCifrado, key) {
    var textDescifrado = "";
    for (var i = 0; i < textCifrado.length; i++) {
        var charCode = textCifrado.charCodeAt(i);

        if (/[a-zA-Z]/.test(textCifrado[i])) {
           
            charCode = charCode - key;

         
            if (textCifrado[i].toLowerCase() === textCifrado[i]) {
                if (charCode < 97) {
                    charCode += 26;
                } else if (charCode > 122) {
                    charCode -= 26;
                }
            } else {
                if (charCode < 65) {
                    charCode += 26;
                } else if (charCode > 90) {
                    charCode -= 26;
                }
            }
        }

        textDescifrado += String.fromCharCode(charCode);
    }

    return textDescifrado;
}



