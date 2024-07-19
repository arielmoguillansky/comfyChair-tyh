const Usuario = require('./Usuario');

class Revisor extends Usuario {
  constructor(nombre, apellido, afiliacion, email, contraseña) {
    super(nombre, apellido, afiliacion, email, contraseña);
  }

  esRevisor() {
    return true;
  }

  expresarInteres(articulo, interes, sesion) {
    if (sesion._estado.esBidding()) {
      const articuloEncontrado = sesion._articulos.find((articuloExistente, index) => {
        if (articuloExistente.titulo === articulo.titulo) {
          sesion._articulos[index].agregarInteres(this, interes);
          return articuloExistente;
        }
      });

      if (!articuloEncontrado) {
        throw new Error('El articulo no existe');
      }
    } else {
      throw new Error('No se pueden modificar articulos en este estado');
    }

  }

}

module.exports = Revisor;