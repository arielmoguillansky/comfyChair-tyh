class GestorDeRevisiones {
  constructor() {
  }

  agregarRevision(articulo, revision) {
    const revisiones = articulo.revisiones.length;

    if (revisiones >= 3) {
      throw new Error('El artículo ya tiene el máximo de 3 revisiones.');
    }
    articulo.revisiones = revision;
    articulo.calcularPuntajePromedio()
  }

  obtenerRevisiones(articulo) {
    return articulo.revisiones || [];
  }
}

module.exports = GestorDeRevisiones;
