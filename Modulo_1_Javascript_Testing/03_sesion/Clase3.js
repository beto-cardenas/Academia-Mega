//Tipos de funciones


// //Ejemplos presentaciones
// //Funcion declarativa
//     function sumar(a,b){
//         return a+b;
//     }
//     console.log(sumar(5,2));    
// //Funcion Anonima
//     let restar = function(){
//         return a-b;
//     }
//     console.log(restar(5,2));    
// //Funcion de flecha
// let multiplca = (a,b)>=(a*b)
// console.log(miltiplica(5,2));    

//Ejemplos saludo
//Funcion declarativa
function saludar(nombre){
    console.log(`Hola ${nombre}`);
}
saludar("Beto");
//Funcion Anonima
let saludo = function(nombre){
    console.log(`Hola ${nombre}`);
}
saludo("Alberto");    
//Funcion de flecha
let salude = (nombre) => console.log(`Hola ${nombre}`);
salude("Jose");




//-----------------------------//
// Ejemplo de SCOPE

let numero;
let mensajeGlobal = "Hola desde fuera";

function ejemploScope(numero){
    numero --;
    let mensajeLocal = "Hola desde dentro";
    console.log(mensajeGlobal);
    console.log(mensajeLocal);
    console.log(numero)
}

numero = 2
ejemploScope(numero);
console.log(mensajeGlobal);
console.log(numero);
// console.log(mensajeLocal);


// Ejemplos de Closures
//-------------------------//
function contador() {
    let cuenta = 0;
    return function () {
        cuenta++;
        return cuenta;
    };
}
    
const incrementar = contador();

console.log(incrementar()); // 1
console.log(incrementar()); // 2
console.log(incrementar()); // 3
console.log(incrementar()); // 4

//Ejercicio
//Funcion multiplicador
//-------------------------//
function multiplicador(factor){
    return function(numero){
        return numero * factor;
    }
}
    
    const duplicar = multiplicador(2);
    const triplicar = multiplicador(3);
        
    console.log(duplicar(5));
    console.log(triplicar(5));


    //;mensajes personalizados 
    function Mensaje(factor){
        return function(nombre){
            return `${factor} ${nombre}` ;
        }
    }    

    const recibimiento = Mensaje("Bienvenid@");
    const despedida = Mensaje("Nos vemos");

    console.log(recibimiento("Beto"));
    console.log(despedida("Karen"));