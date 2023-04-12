import Pelicula from "./classPelicula.js";

const btnEditar = document.getElementById("btnEditar");

btnEditar.addEventListener("click", crearPeli);


function crearPeli(){
    let nuevaPeli = new Pelicula("Super mario", "algo", "url", "aventura", 2023, "2hs", "EEUU", "-")
    console.log(nuevaPeli)

}