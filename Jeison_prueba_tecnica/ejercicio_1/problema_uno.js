/*1. Cuerdas periódicas (obligatoria)
Se dice que una cadena de caracteres tiene el punto k si puede formarse
concatenando una o más repeticiones de otra cadena de longitud k. Por ejemplo, la
cuerda "abcabcabcabc" tiene el período 3, ya que se forma por 4 repeticiones de la
cadena "abc". También tiene períodos 6 (dos repeticiones de "abcabc") y 12 (una
repetición de "abcabcabcabc").
Escribir un programa para leer una cadena de caracteres y determinar su periodo
más pequeño. Ejemplos:
Entrada: abcabcabcabc
Salida: 3
Entrada: HoHoHo Salida:
2*/
function mostrar() {
    var contador = document.getElementById('input_1').value;
    var labeResult = document.getElementById('resultado');

    var positionOne= contador[0];
    var periodos = 0;
    var periodoLog = 0;

    for (let i = 0; i < contador.length; i++) {
        
        if ( contador[i] == positionOne){
            periodos++;
            if(periodos == 2){
                periodoLog= i

            }
        } 
    }

    if(periodoLog == 0) labeResult.innerHTML = 'No hay periodos';
    else labeResult.innerHTML = 'Hay ' + periodos + ' periodos y cada perido tiene ' + periodoLog + ' letras';
   
    console.log('Hay' + periodos + 'periodo/s')
    
}

