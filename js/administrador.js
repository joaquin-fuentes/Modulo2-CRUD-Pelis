import Pelicula from "./classPelicula.js";
import { sumarioValidaciones } from "./helpers.js";

const btnEditar = document.getElementById("btnEditar");
const btnAgregar = document.getElementById("btnAgregar");
const codigo = document.querySelector("#codigo");
const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const imagen = document.querySelector("#imagen");
const genero = document.querySelector("#genero");
const duracion = document.querySelector("#duracion");
const anio = document.querySelector("#anio");
const reparto = document.querySelector("#reparto");
const pais = document.querySelector("#pais");
const msjFormulario = document.querySelector("#msjFormulario");

const formAdministrarPelicula = document.getElementById("formAdministrarPelicula");
let listaPeliculas = [];

btnEditar.addEventListener("click", crearPeli);
btnAgregar.addEventListener("click", mostrarModalPeli);
formAdministrarPelicula.addEventListener("submit", cargarPelicula);


const modalPelicula = new bootstrap.Modal(document.querySelector("#modalAgregar"));

function crearPeli() {
    let nuevaPeli = new Pelicula("Super mario", "algo", "url", "aventura", 2023, "2hs", "EEUU", "-")
    console.log(nuevaPeli)

}
function mostrarModalPeli() {
    // abrir ventana modal
    modalPelicula.show();
    console.log("Aqui vamos a crear una peli");
}

function cargarPelicula(e) {
    e.preventDefault();

    //validar los datos
    let sumario = sumarioValidaciones(titulo.value, descripcion.value, imagen.value, duracion.value)
    if (sumario.length === 0) {
        console.log("Estoy creando la pelicula");
        //crear la pelicula
        //almacenar la peli en localstorage
        //crear modal
        modalPelicula.hide();

    } else {
        msjFormulario.className = "alert alert-danger mt-3";
        msjFormulario.innerHTML = sumario;
    }
}