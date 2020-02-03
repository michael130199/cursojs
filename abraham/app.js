'use strict'

var text = "hola mundo";

function activar() {
    
    
    let senteces = prompt("Escribe una palabra");
    let conteoVocales = count(senteces); 

    if (conteoVocales == 0) {
        document.getElementById('value1').innerHTML="La palabra ingresada tiene  no tiene vocales";
    } else {
        document.getElementById('value1').innerHTML="La palabra ingresada tiene "+conteoVocales+ " vocales";
    }
};

// ejercicio con arrays and ciclos for para contar bocales de una palabra

function count (senteces) 
{
    let arrayV = [];

    for (var i = 0; i < senteces.length; i ++) 
    {
        if (senteces[i] == 'a') {
            arrayV.push(senteces[i]);
        }

        if (senteces[i] == 'e') {
            arrayV.push(senteces[i]);
        }

        if (senteces[i] == 'i') {
            arrayV.push(senteces[i]);
        }

        if (senteces[i] == 'o') {
            arrayV.push(senteces[i]);
        }

        if (senteces[i] == 'u') {
            arrayV.push(senteces[i]);
        }
    }

    return arrayV.length;
}