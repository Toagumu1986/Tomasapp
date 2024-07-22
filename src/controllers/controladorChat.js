let url = "http://localhost:8000/leonardo";
let peticion = {
  method: "GET",
};

fetch(url, peticion)
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (respuesta) {
    console.log(respuesta);
    let botonSend = document.getElementById("botonSend");
    let textoChat = document.getElementById("textoChat");
    let mensajesChat = document.getElementById("mensajeChat");

    //mapear el arreglo de preguntd 
    let preguntas=respuesta.map(function(pregunta){return pregunta.pregunta})

    let respuestas=respuesta.map(function(respuesta){return respuesta.respuesta    
    })
    
    //variables para contorlar el número de preguntas
    let indicePregunta = 0;

    //funcion para detectar el inicio y desarrollo de la conversacion
    function procesarEntradaChat() {
      let escribeUsuario = textoChat.value.toLowerCase();
      textoChat.value = "";
      if (escribeUsuario == "hola") {
        let listaPreguntas = preguntas
          .map((pregunta, index) => `${index + 1}. ${pregunta}`)
          .join("<br>");
        mensajesChat.innerHTML += `<p class="text-star">Hola Bienvenido <br> ${listaPreguntas}</p>`;
      } else {
        let numeroPregunta = parseInt(escribeUsuario) - 1;
        if ((numeroPregunta) => 0 && numeroPregunta < preguntas.length) {
          mensajesChat.innerHTML += `<p class="text-star">${preguntas[numeroPregunta]}</p>`;
          mensajesChat.innerHTML += `<p class="text-end">${respuestas[numeroPregunta]}</p>`;
        }
      }
    }

    //rutina para activar el chat bot
    botonSend.addEventListener("click", procesarEntradaChat);

    textoChat.addEventListener("keypress", function (evento) {
      if (evento.key == "Enter") {
        evento.preventDefault();
        procesarEntradaChat();
      }
    });
  })
  .catch(function (respuesta) {
    console.log(respuesta);
  });
