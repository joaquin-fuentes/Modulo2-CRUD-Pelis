import Pelicula from "./classPelicula.js";

const seccionPeliculas = document.querySelector("#seccionPeliculas");

//traer las peliculas del localstorage
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

//si las peliculas existen cargarlas en el html
cargaInicial();
function cargaInicial() {
  //verificar si listaPOeliculas tiene datos
  if (listaPeliculas.length > 0) {
    //dibuja los datos en la tabla
    listaPeliculas.map((pelicula) => mostrarPelicula(pelicula));
  }else{
      //mostrar un msj que no hay datos para mostrar
      seccionPeliculas.innerHTML = `
      <h2 class="text-center my-4">Aún no hay peliculas cargadas</h2>
      `;
  }
}

function mostrarPelicula(pelicula) {
  //aqui dibujo el article

  seccionPeliculas.innerHTML += `
  <article class="col-12 col-md-4 col-lg-3 mb-3">
  <div class="card h-100">
    <img src="${pelicula.imagen}"
      class="card-img-top h-75" alt="Super Mario">
    <div class="card-body">
      <h5 class="card-title">${pelicula.titulo}</h5>
    </div>
    <div class="card-footer">
      <a href="./pages/detalle.html" class="btn btn-primary">Ver detalle</a>
    </div>
  </div>
</article>
    `;
}
