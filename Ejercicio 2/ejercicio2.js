//Programar un contador de caracteres para un textarea.

function contadorCaracteres(obj){
    document.getElementById("caracteres").innerHTML = obj.value.length+' characters';
}