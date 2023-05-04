
let formModalLogin = document.querySelector("#formModalLogin")
let email= document.querySelector("#email");
let password = document.querySelector("#password");

formModalLogin.addEventListener("submit" , cargarLogin)

function cargarLogin(e){
    e.preventDefault();
    validarEmail();
    validarPassword();
    if(validarEmail() &&  validarPassword()){
        console.log("usuario logueado")
    } else{
        console.log("usuario NO logueado")
    }
    
 
}

function validarEmail(){
    const regExp= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(regExp.test(email.value)){
        email.className = "form-control is-valid";
        return true
    } else{
        email.className ="form-control is-invalid";
        return false;
    }
}

function validarPassword(){
    const regExp= /^.{4,}$/;
    if(regExp.test(password.value)){
        password.className = "form-control is-valid";
        return true
    } else{
        password.className ="form-control is-invalid";
        return false;
    }
}