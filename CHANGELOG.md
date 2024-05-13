# Changelog

## [1.6.1] - 2024-05-13

### Corregido
- **Gestión de registros de IMC para gestantes**: Se ha añadido un parche al componente que maneja los registros de IMC para gestantes. Ahora, este componente incluye un botón que permite eliminar el registro de IMC para gestantes y volver a utilizar los parámetros normales de adultos. Esto resuelve un problema que impedía a las mujeres volver a llevar un registro estándar de adulto al finalizar su periodo de gestación.

## [1.6.0] - 2024-05-09

### Añadido
- **Ampliación de la población objetivo**: Se han incorporado nuevos grupos a la población objetivo que los nutricionistas pueden atender utilizando la aplicación. Los grupos añadidos son:
    - **Adultos**: Personas de 19 años 1 mes a 64 años 11 meses.
    - **Adultos mayores**: Personas de 65 años y más.
    - **Gestantes**: Se ha habilitado el seguimiento por IMC para mujeres gestantes desde los 13 años a 50 años.
  Todos estos grupos tienen la posibilidad de ser clasificados de acuerdo con su Índice de Masa Corporal (IMC).

## [1.5.1] - 2024-03-28

### Corregido
- **Registro de la distribución de porciones según la hora de comida**: Se ha corregido un error que impedía que el botón para generar PDFs funcionara correctamente para los nutricionistas. Además, este botón no aparecía en los perfiles de los pacientes. Ahora, tanto los nutricionistas como los pacientes pueden generar y descargar los PDFs sin problemas.

## [1.5.0] - 2024-03-27

### Añadido
- **Registro de la distribución de porciones según la hora de comida**: Se ha añadido una nueva función que permite a los nutricionistas registrar la distribución de porciones de los pacientes según la hora de comida (desayuno, almuerzo, colación, etc.). Los datos se ingresan en una tabla y se adjuntan al perfil del paciente seleccionado. Así, el paciente puede descargar un PDF con su distribución personalizada de porciones creada por su nutricionista.

## [1.4.0] - 2024-03-18

### Añadido
- **Registro de la frecuencia de consumo de alimentos**: Se ha mejorado la funcionalidad de seguimiento de la alimentación de los pacientes. Ahora, los nutricionistas pueden registrar la frecuencia de consumo de una variedad de alimentos, incluyendo la opción de agregar más alimentos a la lista. Además, se pueden hacer observaciones y mantener un historial de las tablas ingresadas, las cuales también se pueden editar y eliminar.

## [1.3.1] - 2024-03-12

### Modificado
- **Actualizaciones en la página del paciente**: Se han implementado cambios significativos en la página del paciente que aumentan su rendimiento y eficiencia. Estas optimizaciones resultan en una navegación más rápida y una mejor experiencia de usuario.

## [1.3.0] - 2024-03-08

### Añadido
- **Seguimiento de la alimentación de los pacientes**: Se ha añadido una función que permite a los nutricionistas registrar y editar la alimentación diaria de sus pacientes en tablas interactivas. También se incluye un historial para modificar o borrar registros guardados.

## [1.2.2] - 2024-03-04

### Corregido
- **Suscripción de prueba automática tras el registro**: Ahora, cuando un usuario se registra en la aplicación, se activa automáticamente una suscripción de prueba de 7 días. Esta característica permite a los nuevos usuarios explorar y utilizar todas las funcionalidades de la aplicación durante este periodo de prueba.

## [1.2.1] - 2024-02-27

### Añadido
- **Adición del campo "Identidad de género" en el formulario de registro de pacientes**: En un esfuerzo por ser más inclusivos, hemos añadido un nuevo campo en el formulario de registro de pacientes para permitir a las personas que no se identifican con su sexo biológico ingresar el género con el que se identifican.
- **Visualización de la evaluación nutricional junto al IMC en la tarjeta "Estadio de Tanner"**: Ahora es posible visualizar la evaluación nutricional junto al Índice de Masa Corporal (IMC) en la tarjeta "Estadio de Tanner". Este cambio mejora la legibilidad y comprensión de la información presentada.

### Corregido
- **Mejora en el cálculo de la suscripción**: Se ha corregido un problema que causaba un cálculo incorrecto de la fecha y hora de finalización de la suscripción.

### Modificado
- **Optimización de los formularios de la aplicación**: Se ha implementado una mejora en los formularios de registro de pacientes que ha permitido optimizar su funcionamiento. Ahora, los formularios son más eficientes, lo que mejora la experiencia del usuario.
