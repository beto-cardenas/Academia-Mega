// Tipos de datos
var int = 12345;
var string = "texto";
var boolean = true;

// Asignacion de variables
var nombre = 'Jose';
var apellido = 'Cardenas';
var nombre_completo = `${nombre} ${apellido}`;
var edad = 29;

//Tipo de testing
console.log(`Bienvenido a mi aplicacion ${nombre_completo} y tengo ${edad} años`);
console.log("Hola ,soy " + nombre_completo + " y tengo " + edad + " años");

//Comparacion
// ==, ===, !=, !==, <, > ,>= ,<=;

var numero = "5";
var numerotexto = 5;
console.error(numero === numerotexto);

//Aritmeticos
//+, -, /, %, *, **
var suma = 5 + 2;
var resta = 5 - 2;
console.log(suma);
console.log(resta);

var multiplicacion = 5 * 2;
console.log(multiplicacion);

var division = 58 / 3;
console.log(division);

var modulo = 88 % 2;
console.log(modulo);

var potencia = 9 ** 2;
console.log(potencia);

var incremento = 9;
incremento++;
console.log(incremento);

var decremento = 7;
decremento--;
console.log(decremento);

//logicos 
//&& ,||
var resultado = (5 > 2) && (5 < 10);
console.log(resultado);
