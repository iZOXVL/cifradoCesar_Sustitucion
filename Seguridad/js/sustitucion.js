function sustituirLetras(texto) {
    const mapaSustitucion = {
      'a': 'Q', 'b': 'P', 'c': 'W', 'd': 'O', 'e': 'E',
      'f': 'I', 'g': 'R', 'h': 'U', 'i': 'T', 'j': 'Y',
      'k': 'A', 'l': 'S', 'm': 'D', 'n': 'L', 'o': 'K',
      'p': 'J', 'q': 'H', 'r': 'G', 's': 'F', 't': 'Z',
      'u': 'X', 'v': 'C', 'w': 'V', 'x': 'B', 'y': 'N',
      'z': 'M'
    };
  
    const textoEncriptado = texto.split('').map(letra => {

      if (mapaSustitucion.hasOwnProperty(letra)) {
        return mapaSustitucion[letra];
      } else {

        return letra;
      }
    }).join('');
  
    return textoEncriptado;
  }
  
  function desencriptarTexto(textoEncriptado) {
    const mapaSustitucion = {
      'a': 'Q', 'b': 'P', 'c': 'W', 'd': 'O', 'e': 'E',
      'f': 'I', 'g': 'R', 'h': 'U', 'i': 'T', 'j': 'Y',
      'k': 'A', 'l': 'S', 'm': 'D', 'n': 'L', 'o': 'K',
      'p': 'J', 'q': 'H', 'r': 'G', 's': 'F', 't': 'Z',
      'u': 'X', 'v': 'C', 'w': 'V', 'x': 'B', 'y': 'N',
      'z': 'M'
    };
  
    const textoDesencriptado = textoEncriptado.split('').map(letra => {

      for (const key in mapaSustitucion) {
        if (mapaSustitucion.hasOwnProperty(key) && mapaSustitucion[key] === letra) {
          return key;
        }
      }
   
      return letra;
    }).join('');
  
    return textoDesencriptado;
  }
  
  function cifrarMensaje() {
    var texto = document.getElementById("txtCifrar").value;
    

    var textoEncriptado = sustituirLetras(texto);
    
      Swal.fire({
        title: textoEncriptado,
        background: '#343a40',
        confirmButtonColor: '#ecc448',
        confirmButtonText: 'Aceptar', 
        customClass: {
            title: 'text-white', 
          },
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      
}

function descifrarMensaje() {
    var textoEncriptado = document.getElementById("txtCifrar").value;
   

    var textoDesencriptado = desencriptarTexto(textoEncriptado);
    

    Swal.fire({
        title: textoDesencriptado,
        background: '#343a40', 
        confirmButtonColor: '#ecc448',
        confirmButtonText: 'Aceptar',
        customClass: {
            title: 'text-white', 
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
