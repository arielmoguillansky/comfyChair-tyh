class Articulo {
  constructor(titulo, archivo) {
    this._titulo = titulo;
    this._archivo = archivo;
    this._autores = [];
    this._intereses = new Map();
  }


  get autores() {
    return this._autores;
  }

  get titulo() {
    return this._titulo;
  }

  set titulo(titulo) {
    this._titulo = titulo;
  }

  get archivo() {
    return this._archivo;
  }

  set archivo(archivo) {
    this._archivo = archivo;
  }

  agregarAutor(autor) {
    this._autores.push(autor);
  }

  existeAutor() {
    return this._autores.length > 0
  }

  existeTitulo() {
    return this._titulo.length > 0;
  }

  agregarInteres(revisor, interes) {
    this._intereses.set(revisor, interes);
  }

  esArticuloPoster() {
    return false;
  }

  esArticuloRegular() {
    return false;
  }
}

module.exports = Articulo;