class GestorDeRevisiones {
  constructor() {
  }

  agregarRevision(articulo, revision) {
    const revisiones = articulo.revisiones.length;

    if (revisiones >= 3) {
      throw new Error('El artículo ya tiene el máximo de 3 revisiones.');
    }
    articulo.revisiones = revision;
    this.calcularPuntajePromedio(articulo)
  }


  calcularPuntajePromedio(articulo) {
    const puntajes = articulo.revisiones.map(revision => revision.puntaje);
    articulo.puntajePromedio = puntajes.reduce((a, b) => a + b, 0) / puntajes.length;
  }

}

module.exports = GestorDeRevisiones;
