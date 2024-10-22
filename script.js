// array para guardar los usuarios
const  usuariosLista = [];

const btnCrearUsuario = document.getElementById('btnCrearUsuario');
const btnBuscarUsuario = document.getElementById('btnBuscarUsuario');
const seccionCrearUsuario = document.getElementById('seccionCrearUsuario');
const seccionBuscarUsuario = document.getElementById('seccionBuscarUsuario');
const btnGuardarUsuario = document.getElementById('btnGuardarUsuario');
const btnBuscar = document.getElementById('btnBuscar');
const btnCancelar = document.getElementById('btnCancelar');
const seccionResultados = document.getElementById('seccionResultados');


//ocultar o mostrar secciones
function mostrarSeccion(seccionMostrar) {
    seccionCrearUsuario.style.display = 'none';
    seccionBuscarUsuario.style.display = 'none';
    seccionResultados.style.display = 'none';
    seccionMostrar.style.display = 'block';
}


//mostrar el formulario para crear
btnCrearUsuario.addEventListener(`click`, () => {
    mostrarSeccion(seccionCrearUsuario);
});

//guardar un usuario
btnGuardarUsuario.addEventListener(`click`, () => {
    const id = document.getElementById('idUsuario').value;
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const dni = document.getElementById('dni').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;

    //para validar que no haya campos vacios
    if (id && nombreCompleto && dni && telefono && direccion) {
        
        //si hay datos en los campos se crea un nuevo objeto usuario
        const usuario = {id, nombreCompleto, dni, telefono, direccion};
        usuariosLista.push(usuario); //agrega el objeto al array
        alert('Usuario guardado con éxito');

        //limpia los campos
        document.getElementById('idUsuario').value = '';
        document.getElementById('nombreCompleto').value = '';
        document.getElementById('dni').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('direccion').value = '';
        mostrarSeccion(null);
    } else {
        alert('Por favor complete los campos requeridos');
    }
});

//para cancelar la creacion de usuario
btnCancelar.addEventListener(`click`, () => {
    mostrarSeccion();
})

// para mostrar el formulario de buscar un usuario
btnBuscarUsuario.addEventListener(`click`, () => {
    mostrarSeccion(seccionBuscarUsuario);
    seccionResultados.style.display = 'none';
});

//para buscar un usuario
btnBuscar.addEventListener(`click`, () => {
    const criterioBusqueda = document.getElementById('criterioBusqueda').value;
    const valorBusqueda = document.getElementById('inputBusqueda').value;

    let usuario = null;

    if(criterioBusqueda === 'id') {
        //busqueda por ID
        usuario = usuariosLista.find(user => user.id === valorBusqueda);
    } else if(criterioBusqueda === 'nombreCompleto') {
        //busqueda por nombre
        usuario = usuariosLista.find(user => user.nombreCompleto.toLowerCase() === valorBusqueda.toLowerCase());
    }

    //para mostrar la busqueda
    if(usuario) {
        document.getElementById('resultadoId').textContent = usuario.id;
        document.getElementById('resultadoNombreCompleto').textContent = usuario.nombreCompleto;
        document.getElementById('resultadoDni').textContent = usuario.dni;
        document.getElementById('resultadoTelefono').textContent = usuario.telefono;
        document.getElementById('resultadoDireccion').textContent = usuario.direccion;
        seccionResultados.style.display = 'block';
    } else {
        alert('Usuario no encontrado');
        seccionResultados.style.display = 'none';
    }
});