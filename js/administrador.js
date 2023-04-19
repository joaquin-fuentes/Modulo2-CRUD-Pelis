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

const formAdministrarPelicula = document.getElementById(
  "formAdministrarPelicula"
);


btnEditar.addEventListener("click", crearPeli);
btnAgregar.addEventListener("click", mostrarModalPeli);
formAdministrarPelicula.addEventListener("submit", cargarPelicula);

//trabajar las peliculas para que vuelvan a ser un objeto Pelicula.
// let listaPeliculas = JSON.parse(localStorage.getItem("listaPeliculas")) || []; ESTO DEVUELVE UN ARRAY DE OBJETOS DE TIPO "OBJET"
// console.log(listaPeliculas)
let listaPeliculas = localStorage.getItem("listaPeliculas");
if (!listaPeliculas) {
  // si listapeliculas no existe en localstorage
  listaPeliculas = [];
} else {
  // si listaPeliculas tiene datos, quiero trasnformarlo en un array de objetos Pelicula
  listaPeliculas = JSON.parse(listaPeliculas).map(
    (pelicula) =>
      new Pelicula(
        pelicula.titulo,
        pelicula.descripcion,
        pelicula.imagen,
        pelicula.genero,
        pelicula.anio,
        pelicula.duracion,
        pelicula.pais,
        pelicula.reparto
      )
  );
  console.log(listaPeliculas)
}



const modalPelicula = new bootstrap.Modal(
  document.querySelector("#modalAgregar")
);

function crearPeli() {
  let nuevaPeli = new Pelicula(
    "Super mario",
    "algo",
    "url",
    "aventura",
    2023,
    "2hs",
    "EEUU",
    "-"
  );
  console.log(nuevaPeli);
}
function mostrarModalPeli() {
  // abrir ventana modal
  modalPelicula.show();
  console.log("Aqui vamos a crear una peli");
}

function cargarPelicula(e) {
  e.preventDefault();

  //validar los datos
  let sumario = sumarioValidaciones(
    titulo.value,
    descripcion.value,
    imagen.value,
    duracion.value,
    genero.value,
    anio.value,
    pais.value,
    reparto.value
  );
  if (sumario.length === 0) {
    console.log("Estoy creando la pelicula");
    //crear la pelicula
    let nuevaPeli = new Pelicula(
      titulo.value,
      descripcion.value,
      imagen.value,
      genero.value,
      anio.value,
      duracion.value,
      pais.value,
      reparto.value
    );
    listaPeliculas.push(nuevaPeli);
    console.log(listaPeliculas);
    //almacenar la peli en localstorage

    guardarEnLocalStorage();
    //limpar el formulario
    limpiarFormularioPeliculas();
    //crear modal
    modalPelicula.hide();
  } else {
    msjFormulario.className = "alert alert-danger mt-3";
    msjFormulario.innerHTML = sumario;
  }
}

function guardarEnLocalStorage() {
  localStorage.setItem("listaPeliculas", JSON.stringify(listaPeliculas)); //para objetos publicos funciona bien
}
function limpiarFormularioPeliculas() {
  formAdministrarPelicula.reset();
}
