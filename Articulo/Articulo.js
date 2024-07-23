class Articulo {
  constructor(titulo, archivo) {
    if (!titulo) {
      throw new Error('El articulo debe tener un titulo');
    }
    this._titulo = titulo;
    this._archivo = archivo;
    this._autores = [];
    this._intereses = new Map();
    this._revisiones = [];
    this._puntajePromedio = 0;
  }


  get puntajePromedio() {
    return this._puntajePromedio;
  }

  set puntajePromedio(puntajePromedio) {
    this._puntajePromedio = puntajePromedio;
  }

  get revisiones() {
    return this._revisiones;
  }

  set revisiones(revision) {
    this._revisiones.push(revision);
  }

  get intereses() {
    return this._intereses;
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