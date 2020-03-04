//  multiplicacion de una tabla

function multiplicar(tabla) {
    var multiplica = 1;
    //var tabla  = 9;
    while (multiplica <= 9) {
        console.log(tabla  + " X " + multiplica +" = "+ (multiplica * tabla));
        multiplica++;
    }
}


// funcion suma
function suma(a = 1 , b ){
    a = parseInt(a);
    b = parseInt(b);
    return a +b ;
}

var sum = function suma_v2(a , b ){
    a = parseInt(a);
    b = parseInt(b);
    return a +b ;
};

var sumar  = (a, b ) => {
    a = parseInt(a);
    b = parseInt(b);
    return a +b ;
};

function edad() {
     var contador  = 0;
     var parar =  false;
    while (!parar){
        var edad = prompt("ingrese  su edad");
        edad = parseInt(edad);
        if(isNaN(edad) || edad === 0) {
            // break;
            parar =  true;
        }

        if(edad >= 18){
           contador++;
        }
    }
    alert(contador);
}



// resultado  = suma(5,  1);
// console.log(' resultado : ' + resultado);
//
// resultado  = suma(5,  109);
// console.log( resultado);
//

function  aleatorio () {
    funciones = ['Acelerar', 'Frenar', 'Volcar', 'Ganar Carrera'];
    mifuncion = funciones[Math.floor(Math.random() * funciones.length)];
    console.log(mifuncion);
}



