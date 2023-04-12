
export function cantidadCaracteres(texto, min, max) {
    if (texto.length >= min && texto.length <= max) {
        console.log("Cantidad de caracteres CORRECTO");
        return true;
    } else {
        console.log("cantidad de caracteres INCORRECTO")
        return false;
    }
}

 function validarDuracion(value){
    let patron = /^[0-9]{1,3}$/;
    if(patron.test(value)){
        console.log("digito valido de 1 a 3 caracteres");
        return true
    } else{
        console.log("digito no paso la expresion regular del tiempo");
        return false
    }
 }
 function validarURLImagen(value){
    let patron =  /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/
    ;
    if(patron.test(value)){
        console.log("URL Valida");
        return true
    } else{
        console.log("URL de imagen NO valida");
        return false
    }
 }
export function sumarioValidaciones(titulo, descripcion, imagen, duracion) {
    let resumen = "";
    if (!cantidadCaracteres(titulo, 3, 50)) {
        resumen += "- Corregir el campo del título: debe contener entre 3 y 50 caracteres <br>";
    }
    if (!cantidadCaracteres(descripcion, 3, 100)) {
        resumen += "- Corregir el campo de la descripcion: debe contener entre 3 y 100 caracteres <br>";
    }
    if (!validarDuracion(duracion)) {
        resumen += "- Corregir la duracion, debe ser un numero de 3 digitos como maximo <br>";
    }
    if (!validarURLImagen(imagen)) {
        resumen += "- Corregir la URL de la imagen <br>";
    }
    if (resumen.length !== 0) {
        return resumen;
    } else {
        console.log("Todo esta ok con el formulario")
        return "";
    }
}