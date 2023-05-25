//Ejercicio 1:

//Crear un documento html con 3 cuadrados que, al ser clickeados, cambien el color de fondo del documento. Cada cuadrado debera tener un color distinto.


function cambiarColor(){
    const rojo = document.getElementById('rojo')
    rojo.style.backgroundColor = "red";
}

function cambiarColorA(){
    const azul = document.getElementById('azul')
    azul.style.backgroundColor = "blue";
}

function cambiarColorN(){
    const negro = document.getElementById('negro')
    negro.style.backgroundColor = "black";
}