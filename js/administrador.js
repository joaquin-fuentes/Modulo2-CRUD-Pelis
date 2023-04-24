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
const spanDescripcion = document.querySelector("#spanDescripcion");
const datosTablaPelicula = document.querySelector("tbody");


const formAdministrarPelicula = document.getElementById(
  "formAdministrarPelicula"
);
const modalPelicula = new bootstrap.Modal(
  document.querySelector("#modalAgregar")
);

// btnEditar.addEventListener("click", crearPeli);
btnAgregar.addEventListener("click", mostrarModalPeli);
formAdministrarPelicula.addEventListener("submit", cargarPelicula);
descripcion.addEventListener("input", cantidadLetrasDescripcion);

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
        pelicula.codigo,
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
}
cargaInicial();
function cargaInicial() {
  //verificar si listaPOeliculas tiene datos
  if (listaPeliculas.length >= 0) {
    //dibuja los datos en la tabla
    listaPeliculas.map((pelicula, indice) => crearFila(pelicula, indice));
  } else {
    //mostrar un msj que no hay datos para mostrar o dejo la tabla vacia
  }
}

function crearFila(pelicula, indice) {
  //aqui dibujo el tr
  datosTablaPelicula.innerHTML += `
    <tr>
    <th>${indice + 1}</th>
    <td>${pelicula.titulo}</td>
    <td class="text-truncate d-none d-sm-table-cell ">${
      pelicula.descripcion
    }</td>
    <td class="text-truncate d-none d-sm-table-cell">${pelicula.imagen}</td>
    <td>${pelicula.genero}</td>
    <td>
          <button class="bi bi-pencil-square btn btn-warning m-1" id="btnEditar"></button>
          <button class="bi bi-x-square btn btn-danger m-1"  onclick="borrarPelicula('${pelicula.codigo}')"></button></td>
  </tr>
    `;
}

function mostrarModalPeli() {
  // abrir ventana modal
  modalPelicula.show();
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
    //crear la pelicula
    let nuevaPeli = new Pelicula(
      undefined,
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
    //dibujar la fila al final de la tabla
    let indicePeli = listaPeliculas.length - 1;
    crearFila(nuevaPeli, indicePeli);
    //mostrar cartel al usuario de crear peli correcatamente
    Swal.fire(
      "Pelicula creada",
      "La pelicula ingresada fue creada correctamente",
      "success"
    );
    //tarea verificar cantidad de caracteres en el campo de la descripcion
    // ocultar pasado x tiempo o una vez enviada la pelicula el alert con los errores
    ocultarAlerError();
  } else {
    msjFormulario.className = "alert alert-danger mt-3";
    msjFormulario.innerHTML = sumario;
    setTimeout(ocultarAlerError, 8000);
  }
}

function ocultarAlerError() {
  msjFormulario.className = "d-none";
  msjFormulario.innerHTML = "";
}

function guardarEnLocalStorage() {
  localStorage.setItem("listaPeliculas", JSON.stringify(listaPeliculas)); //para objetos publicos funciona bien
}
function limpiarFormularioPeliculas() {
  formAdministrarPelicula.reset();
}

window.borrarPelicula = (codigo) => {
  console.log("Aqui borro la peli");
  console.log(codigo)
  // busco en el array de peliculas la peli que quiero borrar
  let posicionPeli = listaPeliculas.findIndex(pelicula => pelicula.codigo === codigo )
  console.log(posicionPeli)

  // borrar del array el objeto pelicula
  listaPeliculas.splice(posicionPeli, 1)

  // igualar los datos del localstorage
  guardarEnLocalStorage()

  // quitar la fila de la tabla
  // datosTablaPelicula.children[posicionPeli].remove
  datosTablaPelicula.removeChild(datosTablaPelicula.children[posicionPeli])

  // actualizar las filas de la tabla
  
};

function cantidadLetrasDescripcion() {
  let caracteresRestantes = 500;
  let numCaracteres = descripcion.value.length;
  caracteresRestantes = caracteresRestantes - numCaracteres;
  spanDescripcion.innerHTML = `
         <span class="text-success">${caracteresRestantes}</span>
    `;
  if (caracteresRestantes < 0) {
    spanDescripcion.innerHTML = `
      <span class="text-danger">${caracteresRestantes}</span>
 `;
  }
}
