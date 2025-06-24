document.getElementById("testForm").addEventListener("submit", function(event) {
    event.preventDefault(); //Evita el comportamiento del formulario

    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const resultado = document.getElementById("resultado");

    try{
        validarDatos(nombre,edad)
        resultado.textContent = `Hola ${nombre}, tienes ${edad} años`;
        resultado.style.color = "green";
    }catch(error){
        console.log("error: ",error);
        resultado.textContent = error.message;
        resultado.style.color = "red"
    }

});

function validarDatos(nombre,edad){
    console.log("Validando datos...");

    if(!nombre || !edad ){
        throw new Error("Por favor completa los campos");
    }
    if(edad <= 0){
        throw new Error("La edad debe ser un numero valido");
    }
    if(nombre.length > 30){
        throw new Error("El nombre es demasiado grande");
    }

    console.log("Datos validados correctamente");
    
    
}

function hola(){
    console.log("Hola");
}