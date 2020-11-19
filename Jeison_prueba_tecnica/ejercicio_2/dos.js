/*2. Sala de chat (obligatorio)
Diego ha comenzado a entrar a salas de chat en internet. Cada vez que el entra a
una sala de chat escribe “hola”. El problema es que a veces escribe más de una vez
alguna de las letras de la palabra. Dado un string de entrada S, el sistema debe decir
si Diego trato de escribir “hola” correctamente. Construya una función que valide la
entrada S y retorne “VERDADERO” si Diego escribió “hola” correctamente y “FALSO”
en caso contrario. Ejemplos:
Entrada: HoLa Salida:
True
Entrada: hhhhooooollllllaaaaaa
Salida: True
Entrada: hhhlllllloooollllla
Salida: False*/

var palabra = ["h", "o", "l", "a"];

function validar() {
var mostrar = document.getElementById("valor");

    var input = document.getElementById("input_2").value;


    if (input[0] == this.palabra[0] ) {
         this.imprimir(input);
    }else{
        mostrar.innerHTML = 'false';
    }

}
function imprimir(input_2) {
var mostrar = document.getElementById("valor");
    var index = 0; 
    var message;
    for (let i = 0; i < input_2.length; i++) {
        if (this.palabra[index] != input_2[i]) {
            index++;
            if(this.palabra[index] == input_2[i]){
                message = 'true';
                console.log(message)
            }
            else {
                message = 'false';
                console.log(message)

                break;
            }
            
        }
        

    }

    mostrar.innerHTML = message;
}

