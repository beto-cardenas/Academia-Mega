// Validacion de edad
//var edad = 18;
let edad = 50;
//const edad = 20;

if(edad<18){
    console.log("Eres menor de edad");
}else if(edad >= 18 && edad < 65){
    console.log("Eres un adulto");
}else{
    console.log("Eres un adulto mayor");
}

// Validacion de numero
let numero = prompt("Ingresa un numero:");
numero = Number(numero);

if(numero > 0){
    console.log("El numero es positivo");
}else if(numero < 0){
    console.log("El numero es negativo");
}else{
    console.log("El numero es cero");
}


//For interaccion
for(let i = 1;i<=15;i++){
    console.log(`intereaccion numero ${i}`)
}


//Ejemplo While
let contador = 1;
while(contador <= 15){
    console.log(`Contador en ${contador}`);
    contador++;
}


//Valida numero
let num = prompt("lngresa un numero");
num = Number(num) ;
if(num % 2 === 0){
    console.log("numero es par");
}else{
    console. log("El numero es impar");
}

//Ejemplo For Wach
let suma = 0;
for(let i =1;i<=100;i++){
    suma+=i;
}
    
console.log("La suma del 1 al 100 es;", suma);

let intentos = 0;
let claveCorrecta = "1234"
let claveIngresada;

while(intentos <3){
    claveIngresada = prompt("Ingresar la contraseña");

    if(claveIngresada === claveCorrecta){
        console.log("Acceso Concedido.");
        break;
    }else{
        console.log("Contraseña incorrecta.");
    }

    intentos++;
}

if(intentos ===3){
    console.log("Has agotado tus intentos");
}
