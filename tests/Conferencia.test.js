const Conferencia = require('../Conferencia/Conferencia');
const Sesion = require('../Conferencia/Sesion/Sesion');
const SeleccionadorCorteFijo = require('../Seleccionador/SeleccionadorCorteFijo');

let sesion, conferencia

beforeEach(() => {
  conferencia = new Conferencia('TYH 2024');
  sesion = new Sesion('Sesion 1', new Date(new Date().getTime() + 10 * 60000), new SeleccionadorCorteFijo(50));
});

describe('Una conferencia', () => {
  it('debe poder agregar una sesión', () => {
    conferencia.agregarSesion(sesion);
    expect(conferencia.sesiones).toHaveLength(1);
    expect(conferencia.sesiones).toContain(sesion);
  });

  it('debe poder mostrar su nombre', () => {
    const nombre = conferencia.nombre;
    expect(nombre).toContain('TYH 2024');
  });
});
