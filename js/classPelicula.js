export default class Pelicula {
    #codigo;
    #titulo;
    #descripcion;
    #imagen;
    #genero;
    #anio;
    #duracion;
    #pais;
    #reparto;
    #estado;
    constructor (codigo = uuidv4(), titulo, descripcion, imagen, genero, anio, duracion, pais, reparto){
        this.#codigo = codigo;
        this.#titulo = titulo;
        this.#descripcion = descripcion;
        this.#imagen = imagen;
        this.#genero = genero;
        this.#anio = anio;
        this.#duracion = duracion;
        this.#pais = pais;
        this.#reparto = reparto;
        this.#estado = false;
    }
    
    get codigo() {
        return this.#codigo;
    }

    set codigo(valor) {
        this.#codigo = valor;
    }

    get titulo() {
        return this.#titulo;
    }

    set titulo(valor) {
        this.#titulo = valor;
    }

    get descripcion() {
        return this.#descripcion;
    }

    set descripcion(valor) {
        this.#descripcion = valor;
    }

    get imagen() {
        return this.#imagen;
    }

    set imagen(valor) {
        this.#imagen = valor;
    }

    get genero() {
        return this.#genero;
    }

    set genero(valor) {
        this.#genero = valor;
    }

    get anio() {
        return this.#anio;
    }

    set anio(valor) {
        this.#anio = valor;
    }

    get duracion() {
        return this.#duracion;
    }

    set duracion(valor) {
        this.#duracion = valor;
    }

    get pais() {
        return this.#pais;
    }

    set pais(valor) {
        this.#pais = valor;
    }

    get reparto() {
        return this.#reparto;
    }

    set reparto(valor) {
        this.#reparto = valor;
    }

    get estado() {
        return this.#estado;
    }

    set estado(valor) {
        this.#estado = valor;
    }
    
    //stringify accede a este metodo
    toJSON(){
        return {
            codigo: this.#codigo,
            titulo: this.#titulo,
            descripcion: this.#descripcion,
            imagen: this.#imagen,
            genero: this.#genero,
            anio: this.#anio,
            duracion: this.#duracion,
            pais: this.#pais,
            reparto: this.#reparto
        }
    }

}