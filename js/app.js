
let btnOscuro = document.getElementById("btnThemeDark");
let btnClaro = document.getElementById("btnThemeLight");
let iconTheme = document.getElementById("iconTheme");


btnOscuro.addEventListener("click", () => { cambiarTema("dark") });
btnClaro.addEventListener("click", () => { cambiarTema("light") });



function cambiarTema(color) {
    let body = document.querySelector("body");
    body.setAttribute("data-bs-theme", color);

     (color === "dark") ? iconTheme.className = "bi bi-moon-stars-fill" : iconTheme.className = "bi bi-brightness-high-fill";
}