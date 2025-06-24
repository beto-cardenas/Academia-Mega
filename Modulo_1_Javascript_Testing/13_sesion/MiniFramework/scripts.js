function expect(actual){
    return{
        toBe(expected){
            if(actual === expected){
                console.log(`Paso: $(actual) ==- ${expected}`)
            }else{
                console.log(`Falló: se esperaba ${expected}, pero se obtuvo ${actual}`)
            }
        },
        toEqual(expected){
            const passed = JSON.stringify(actual) === JSON.stringify(expected);
            if(passed){
                console.log('Paso: Objetos iguales');
            }else{
                console.log("Fallo: Objetos diferentes");
            }
        }
    }
}

function sumar(a, b){
    return a + b;
}

function validarUsuario(usuario){
    return usuario.nombre &&  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario.correo);
}

const usuarioValido = {nombre:"Ana",correo:"ana@mail.com"}
const usuarioValido2 = {nombre:"Jose",correo:"jos@hmail.com"}
const usuarioInvalido = {nombre:"Lisa",correo:"liza@mail"}

expect(usuarioValido).toEqual(usuarioValido2);