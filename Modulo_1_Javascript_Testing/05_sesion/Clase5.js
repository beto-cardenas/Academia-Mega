const titulo = document.getElementById("titulo");

console.log(titulo);

titulo.textContent = "Bienvenido"

const name_page = document.querySelector("title")
name_page.textContent = "Pagina DOM"
console.log(name_page);


document.getElementById("cambiarTexto").addEventListener("click",function(){
    document.getElementById("titulo").textContent = "Texto cambiado con un boton";
});



