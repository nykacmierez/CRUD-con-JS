# Aplicación de Gestión de Usuarios

Esta es una aplicación simple de gestión de usuarios construida utilizando HTML, CSS y JavaScript. Permite crear nuevos usuarios, buscar existentes por ID o nombre completo y ver los detalles de los mismos. La aplicación está diseñada para manejar la entrada de datos de usuarios y manipular una lista almacenada en memoria.

## Funcionalidades

- **Crear Usuarios:** Se pueden añadir nuevos usuarios a la lista ingresando los detalles requeridos como ID, nombre completo, DNI, número de teléfono y dirección.
- **Buscar Usuarios:** Se puede buscar a un usuario existente ya sea por su ID o por su nombre completo.
- **Ver Detalles del Usuario:** Si el usuario es encontrado, se mostrarán sus detalles (ID, nombre completo, DNI, número de teléfono y dirección).
- **Cancelar Búsqueda/Creación:** Se puede cancelar la búsqueda o creación, ocultando el formulario correspondiente.

## Instrucciones de Uso

1. **Crear un Usuario:**
   - Hacer clic en el botón "Crear Usuario".
   - Ingresar los datos del usuario (ID, nombre completo, DNI, teléfono, dirección) en el formulario.
   - Hacer clic en "Guardar Usuario" para agregarlo a la lista.
   - Si los campos están vacíos, se mostrará un mensaje de alerta solicitando que se completen todos los campos.

2. **Buscar un Usuario:**
   - Hacer clic en el botón "Buscar Usuario".
   - Elegir el criterio de búsqueda (ID o nombre completo) e ingresar el valor correspondiente en el campo de búsqueda.
   - Hacer clic en el botón "Buscar".
   - Si el usuario es encontrado, se mostrarán sus detalles en la sección de resultados.
   - Si el usuario no es encontrado, se mostrará una alerta con el mensaje "Usuario no encontrado".

3. **Cancelar Operaciones:**
   - Tanto en la sección de creación como en la de búsqueda de usuarios, hay un botón "Cancelar" que permite ocultar el formulario actual y regresar a un estado inicial.

## Tecnologías Utilizadas

- **HTML**: Estructura básica de la aplicación.
- **CSS**: Diseño simple de la interfaz.
- **JavaScript**: Lógica para la gestión de usuarios (creación, búsqueda y visualización).

## Estructura del Código

El código está dividido en las siguientes secciones:

- **Mostrar/Ocultar secciones**: Función `mostrarSeccion(seccionMostrar)` para alternar entre las secciones de crear usuario, buscar usuario y los resultados.
- **Crear Usuario**: Función para capturar los datos ingresados y agregar un nuevo objeto al array `usuariosLista`.
- **Buscar Usuario**: Función que permite buscar un usuario por ID o nombre completo, y mostrar los resultados o una alerta en caso de no encontrar al usuario.
- **Cancelar**: Eventos asociados a los botones de cancelar para ocultar el formulario activo.

## Requisitos

Solo necesitas un navegador moderno para ejecutar la aplicación, ya que todo el código es client-side.

## Desarrollado por LUCAS MIEREZ - Todos los derechos reservados.
