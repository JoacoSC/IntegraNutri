# Changelog

## [1.13.1] - 2024-09-07

### Modificado
- **Cambio de diseño de ventanas emergentes**: Se ha implementado una actualización del aspecto visual de las ventanas emergentes. Ahora los botones para generar acciones en las ventanas emergentes son visibles en todo momento.

## [1.13.0] - 2024-09-07

### Añadido
- **Historial de evaluaciones antropométricas**: Se ha implementado un historial de evaluaciones antropométricas que puede consultarse desde el botón "Más detalles" en la tarjeta de evaluaciones.
- **Comparación de evaluaciones antropométricas**: Se ha añadido la posibilidad de comparar dos evaluaciones en la tarjeta de composición corporal. Los gráficos muestran los datos de una sola evaluación o combinan los datos de dos evaluaciones para facilitar la comparación.

## [1.12.0] - 2024-08-20

### Añadido
- **Representación gráfica de la composición corporal**: Se ha implementado una nueva funcionalidad que permite visualizar gráficamente la composición corporal de los pacientes, incluyendo masas grasas, musculares, residuales y óseas. Esta herramienta ofrece una visión clara y detallada para facilitar el análisis y la evaluación de la salud de los pacientes.

### Corregido
- **Acceso a la página del paciente**: Se ha solucionado un problema que impedía el ingreso a la página del paciente, mejorando la navegación y la experiencia del usuario.

## [1.11.0] - 2024-08-13

### Añadido
- **Gráfico de Somatocarta**: Se ha añadido una nueva funcionalidad que permite representar visualmente los valores obtenidos en la somatocarta. Este gráfico facilita a los nutricionistas la interpretación y el análisis de la composición corporal de los pacientes, proporcionando una herramienta visual poderosa para evaluar y planificar intervenciones nutricionales de manera más efectiva.

## [1.10.0] - 2024-08-05

### Añadido
- **Evaluación antropométrica ampliada**: Ahora los nutricionistas pueden registrar pliegues cutáneos, perímetros y diámetros corporales, lo que permite calcular masas grasas, musculares, residuales y óseas (en kg y %), así como perímetros corregidos y datos para la somatocarta. Estas mejoras proporcionan un análisis más detallado y personalizado de la salud de los pacientes.

### Actualizado
- **Evaluación antropométrica existente**: Se ha optimizado la funcionalidad de Circunferencia de Cintura, Índice Cintura Cadera (ICC) e Índice Cintura Altura (ICA) para mejorar la consistencia y exactitud de los datos.

## [1.9.0] - 2024-07-16

### Añadido
- **Evaluación antropométrica**: Se ha incorporado una nueva funcionalidad que permite a los nutricionistas realizar evaluaciones antropométricas detalladas. Ahora, se pueden registrar y monitorear los siguientes parámetros:
  - **Circunferencia de cintura**: Basado en las referencias del MINSAL 2014, esta medida evalúa la obesidad abdominal, un indicador clave del riesgo de enfermedades cardiovasculares y metabólicas.
  - **Índice Cintura Cadera (ICC)**: De acuerdo con los estudios de Girolami 2015, este índice evalúa la distribución de grasa corporal. Una proporción alta puede indicar un mayor riesgo de enfermedades cardiovasculares.
  - **Índice Cintura Altura (ICA)**: Siguiendo las recomendaciones de Koch 2008, este índice evalúa el riesgo de enfermedades crónicas mediante la relación entre la circunferencia de cintura y la altura del paciente. Es una herramienta eficaz para identificar riesgos asociados a la distribución de grasa en el cuerpo.

  Esta mejora en la evaluación antropométrica proporciona a los nutricionistas herramientas adicionales para un análisis más completo y personalizado de la salud de sus pacientes, mejorando la precisión en la detección de posibles riesgos y la planificación de intervenciones nutricionales específicas.

## [1.8.0] - 2024-07-01

### Añadido
- **Evaluación de presión arterial**: Se ha implementado una nueva funcionalidad que permite a los nutricionistas ingresar y registrar las evaluaciones de presión arterial de los pacientes. Esta mejora facilita el monitoreo de la salud cardiovascular de los pacientes, proporcionando datos clave para un análisis más completo.

## [1.7.0] - 2024-06-25

### Añadido
- **Creación y adjunto de solicitudes de exámenes / indicaciones nutricionales**: Se ha implementado una nueva funcionalidad que permite a los nutricionistas crear y adjuntar solicitudes de exámenes e indicaciones nutricionales personalizadas para los pacientes. Estas solicitudes se generan en formato PDF, facilitando su descarga, impresión o envío electrónico.

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
