## Técnica y Herramientas 2024

Entrega para la materia TyH correspondiente a la Maestría en Ingeniería de Software de la Universidad Nacional de La Plata.

### Proceso

Primero se comenzó por la implementación de los usuarios con sus distintos roles. Para ello, se creó la clase abstracta Usuario desde la cual se extienden los diferentes tipos de usuarios, cada uno con métodos y propiedades específicas: Autor, Organizador y Revisor.

La clase Autor tiene métodos especificos como el envío de artículos dentro de la fecha límite de cada sesión, la asignación de artículos y su modificación.

La clase Revisor se encarga de expresar el interes por artículo y revisar cada uno. Cada revisor envía a cada artículo instancias de la clase Revisión, que se compone de un puntaje y un comentario.

Para cada evento, se creó la clase Conferencia que está compuesta por una o más sesiones. Esta está asosciada a la clase abstracta Sesión, de la cual se implementan las subclases SesionRegular, SesionPoster y SesionWorkshop. Cada tipo de sesiones acepta un determinado tipo de artículo.

Cada sesión se compone de un solo estado y de un solo método de selección, el cual puede ser modificado. Tiene métodos que permiten agregar revisores y artículos, verificar la fecha límite durante la recepción de artículos y seleccionarlos.

La clase abstracta Artículo se extiende a la clases de ArticuloRegular y ArticuloPoster. Cada sublase acepta propiedades diferentes para su construcción. Cada artículo contiene sus autores, el puntaje promedio (necesario durante la etapa de seleccion), los intereses asociados a los revisores y sus revisiones.

La clase AsignacionInteresPrimero se encarga de asignar los artículos a los diferentes revisores según el nivel de interés mostrado. Se priorizan aquellos con alto nivel de interes, los que quizás estén interesados y, de ser necesario, los que no.

### Puesta a punto y ejecución

- `npm install`
- `npm run start`
- Ejecución de tests: `npm run test` con coverage: `npm run test-coverage`

#### Diagrama completo

![Screenshot from 2024-08-01 11-45-37](https://github.com/user-attachments/assets/bae61598-3e01-4179-9ff8-ad28dbe8e5d2)

Patrones de diseño presentes en el sistema:

### Patrones creacionales

#### Factory

- Proporciona una interfaz para crear objetos en una superclase, mientras permite a las subclases alterar el tipo de objetos que se crearán.

  ![Screenshot from 2024-08-01 11-56-01](https://github.com/user-attachments/assets/e785d281-5d8e-4643-b25b-1ca4d013829d)

### Patrones estructurales

#### Bridge

- Permite dividir una clase grande, o un grupo de clases estrechamente relacionadas, en dos jerarquías separadas (abstracción e implementación) que pueden desarrollarse independientemente la una de la otra.

  ![Screenshot from 2024-08-01 12-07-18](https://github.com/user-attachments/assets/df2836a3-15cd-4af2-8151-c16ca78917d6)

### Patrones de comportamiento

#### State

- Permite a un objeto alterar su comportamiento cuando su estado interno cambia. Parece como si el objeto cambiara su clase.

  ![Screenshot from 2024-08-01 12-04-06](https://github.com/user-attachments/assets/3fa50859-8609-4d41-be5f-ff476a48eea2)

#### Strategy

- Permite definir una familia de algoritmos, colocar cada uno de ellos en una clase separada y hacer sus objetos intercambiables.

![Screenshot from 2024-08-01 12-00-09](https://github.com/user-attachments/assets/4220bc28-b47b-478f-a77a-ce1dbd48365f)
