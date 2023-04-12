import Pelicula from "./classPelicula.js";

const btnEditar = document.getElementById("btnEditar");
const btnAgregar = document.getElementById("btnAgregar");
const formAdministrarPelicula = document.getElementById("formAdministrarPelicula");


btnEditar.addEventListener("click", crearPeli);
btnAgregar.addEventListener("click", mostrarModalPeli);
formAdministrarPelicula.addEventListener("submit", cargarPelicula);


const modalPelicula = new bootstrap.Modal(document.querySelector("#modalAgregar"));

function crearPeli(){
    let nuevaPeli = new Pelicula("Super mario", "algo", "url", "aventura", 2023, "2hs", "EEUU", "-")
    console.log(nuevaPeli)

}
function mostrarModalPeli (){

    modalPelicula.show();
    console.log("Aqui vamos a crear una peli");
}

function cargarPelicula(e){
    e.preventDefault();

    console.log("Estoy creando la pelicula");
    modalPelicula.hide();
}