const usuario = {
    nombre: "Juan",
    edad: 25, 
    ciudad: "Madrid",
    profesion: "Ingeniero",
}

const usuario_json = JSON.stringify(usuario)
console.log(usuario_json) 

const usuario_obj = JSON.parse(usuario_json)
console.log(usuario_obj) 

localStorage.setItem("usuario", usuario_json)           // Guardar en localStorage
const usuario_storage = localStorage.getItem("usuario") // Obtener de localStorage
const datos_storage = JSON.parse(usuario_storage)       // Convertir de JSON a objeto
console.log(datos_storage.edad) 