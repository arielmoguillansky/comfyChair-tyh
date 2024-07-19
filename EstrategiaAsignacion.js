class AsignacionInteresPrimero {
  asignar(articulos, revisores) {
    let asignaciones = new Map();

    // Inicializar asignaciones
    revisores.forEach(revisor => {
      asignaciones.set(revisor, []);
    });

    // Asignar revisores a artículos
    articulos.forEach(articulo => {
      let interesados = [];
      let quizas = [];
      let noInteresados = [];
      console.log('AAAAAAAA', articulo);
      if (!articulo.intereses) {
        throw new Error('El articulo debe tener al menos un interes');
      }
      articulo.intereses.forEach((interes, revisor) => {
        switch (interes) {
          case 'interesado':
            interesados.push(revisor);
            break;
          case 'quizás':
            quizas.push(revisor);
            break;
          default:
            noInteresados.push(revisor);
            break;
        }
      });

      let asignados = this.asignarRevisores(articulo, interesados, quizas, noInteresados, asignaciones);
      asignaciones.set(articulo, asignados);
    });

    return asignaciones;
  }

  asignarRevisores(articulo, interesados, quizas, noInteresados, asignaciones) {
    let asignados = [];

    // Asignar primero a los interesados
    asignados.push(...this.seleccionarRevisores(articulo, interesados, asignaciones, 3 - asignados.length));

    // Asignar luego a los quizas
    if (asignados.length < 3) {
      asignados.push(...this.seleccionarRevisores(articulo, quizas, asignaciones, 3 - asignados.length));
    }

    // Asignar finalmente a los no interesados
    if (asignados.length < 3) {
      asignados.push(...this.seleccionarRevisores(articulo, noInteresados, asignaciones, 3 - asignados.length));
    }

    return asignados;
  }

  seleccionarRevisores(articulo, candidatos, asignaciones, maxSeleccion) {
    let seleccionados = [];
    let cantidadRevisoresPorArticulo = Math.ceil(articulo.revisiones.length / 3);

    candidatos.forEach(revisor => {
      if (asignaciones.get(revisor).length < cantidadRevisoresPorArticulo && seleccionados.length < maxSeleccion) {
        seleccionados.push(revisor);
        asignaciones.get(revisor).push(articulo);
      }
    });

    return seleccionados;
  }
}

module.exports = AsignacionInteresPrimero;