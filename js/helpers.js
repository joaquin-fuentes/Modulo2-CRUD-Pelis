
let anioActual;

export function cantidadCaracteres(texto, min, max) {
    if (texto.length >= min && texto.length <= max) {
        // console.log("Cantidad de caracteres CORRECTO");
        return true;
    } else {
        // console.log("cantidad de caracteres INCORRECTO")
        return false;
    }
}

 function validarDuracion(value){
    let patron = /^[0-9]{1,3}$/;
    if(patron.test(value)){
        // console.log("digito valido de 1 a 3 caracteres");
        return true
    } else{
        // console.log("digito no paso la expresion regular del tiempo");
        return false
    }
 }
 function validarURLImagen(value){
    let patron =  /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/
    ;
    if(patron.test(value)){
        // console.log("URL Valida");
        return true
    } else{
        // console.log("URL de imagen NO valida");
        return false
    }
 }
 function validarGenero(texto){
    if(texto.length > 0 && (texto === "Aventura" || texto === "Accion" || texto === "Drama" || texto === "Terror")){
        // console.log("Genero valido");
        return true
    } else{
        // console.log("Genero INVALIDO");
        return false
    }
 }
// Agregar validacion de año desde 1985 hasta año actual +1
function validarAnio(anio){
     anioActual = new Date().getFullYear();
    if(anio >= 1985 && anio <= anioActual+1){
        // console.log("Año valido");
        return true
    } else{
        // console.log("Año INVALIDO");
        return false
    }
 }
// Agregar validacion de Pais = Igual al titulo

// Agregar validacion de Reparto = Igual a la del titulo


//Video de la clase va en tiempo 1hora 30minutos...
export function sumarioValidaciones(titulo, descripcion, imagen, duracion, genero, anio, pais, reparto) {
    let resumen = "";
    if (!cantidadCaracteres(titulo, 3, 50)) {
        resumen += "- Corregir el campo del título: debe contener entre 3 y 50 caracteres <br>";
    }
    if (!cantidadCaracteres(descripcion, 3, 400)) {
        resumen += "- Corregir el campo de la descripcion: debe contener entre 3 y 100 caracteres <br>";
    }
    if (duracion.length !== 0 && !validarDuracion(parseInt(duracion))) {
        resumen += "- Corregir la duracion, debe ser un numero de 3 digitos como maximo <br>";
    }
    if (!validarURLImagen(imagen)) {
        resumen += "- Corregir la URL de la imagen, la extension debe ser: .jpg .png o .gif <br>";
    }
    if (!validarGenero(genero)) {
        resumen += "- Seleccion un genero de la lista de opciones  <br>";
    }
    if (anio.length !== 0 &&!validarAnio(parseInt(anio))) {
        resumen += `- El año debe ser entre 1985 y ${anioActual+1}`;
    }
    if (pais.length !== 0 && !cantidadCaracteres(pais, 3, 20)) {
        resumen += "- El Paìs: debe contener entre 3 y 20 caracteres <br>";
    }
    if (reparto.length !== 0 && !cantidadCaracteres(reparto, 3, 100)) {
        resumen += "- El reparto: debe contener entre 3 y 100 caracteres <br>";
    }
    if (resumen.length !== 0) {
        return resumen;
    } else {
        // console.log("Todo esta ok con el formulario")
        return "";
    }
}