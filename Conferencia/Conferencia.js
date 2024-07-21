class Conferencia {
  constructor(nombre) {
    this._nombre = nombre;
    this._sesiones = [];
    this._revisores = [];
  }

  get nombre() {
    return this._nombre;
  }

  get sesiones() {
    return this._sesiones;
  }

  get revisores() {
    return this._revisores;
  }

  agregarSesion(sesion) {
    this._sesiones.push(sesion);
  }

  agregarRevisor(revisor) {
    this._revisores.push(revisor);
  }
}

module.exports = Conferencia;