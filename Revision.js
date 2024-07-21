class Revision {
  constructor(texto, puntaje) {
    if (puntaje < -3 || puntaje > 3) {
      throw new Error('El puntaje debe estar entre -3 y 3.');
    }

    this._texto = texto;
    this._puntaje = puntaje;
  }

  get texto() {
    return this._texto;
  }
  get puntaje() {
    return this._puntaje;
  }
}

module.exports = Revision;