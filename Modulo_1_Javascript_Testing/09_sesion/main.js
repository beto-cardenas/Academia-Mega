import {saludar,despedir} from "./saludo.js"
import {sumar,restar,dividir,multiplicar} from "./Actividad.js"
import {obtenerFecha,obtenerHoraActual} from "./fecha.js"

const nombre = 'beto';

console.log(saludar(nombre));
console.log(despedir(nombre));

console.log("Suma : " + sumar(5,10));
console.log("Resta: " + restar(30,10));
console.log("Multiplica: " + multiplicar(46,4));
console.log("Divide: " + dividir(505,10));

console.log("Fecha: " + obtenerFecha())
console.log("Hora: "+ obtenerHoraActual());


 