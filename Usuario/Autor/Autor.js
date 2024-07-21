const Usuario = require('../Usuario');

class Autor extends Usuario {
  constructor(nombre, apellido, afiliacion, email, contraseña) {
    super(nombre, apellido, afiliacion, email, contraseña);
    this._articulos = [];
  }

  asignarArticulo(articulo) {
    articulo.agregarAutor(this);
    this._articulos.push(articulo);
  }

  enviarArticulo(articulo, sesion) {
    sesion.recibirArticulo(articulo)
  }


  modificarArticulo(articulo, articuloActualizado, sesion) {
    sesion.verificarFechaLimite();
    if (sesion._estado.esRecepcion()) {
      const articuloEncontrado = sesion._articulos.find((articuloExistente, index) => {
        if (articuloExistente.titulo === articulo.titulo) {
          sesion._articulos[index].titulo = articuloActualizado.titulo;
          sesion._articulos[index].archivo = articuloActualizado.archivo;
          if (sesion._articulos[index].esArticuloRegular()) {
            sesion._articulos[index].resumen = articuloActualizado.resumen;
          }
          if (sesion._articulos[index].esArticuloPoster()) {
            sesion._articulos[index].fuentes = articuloActualizado.fuentes;
          }
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

  esAutor() {
    return true;
  }
}

module.exports = Autor;