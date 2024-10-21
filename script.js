// array para guardar los usuarios
const  usuarios = [];

const btnCrearUsuario = document.getElementById('btnCrearUsuario');
const btnBuscarUsuario = document.getElementById('btnBuscarUsuario');
const seccionCrearUsuario = document.getElementById('seccionCrearUsuario');
const seccionBuscarUsuario = document.getElementById('seccionBuscarUsuario');
const btnGuardarUsuario = document.getElementById('btnGuardarUsuario');
const btnBuscar = document.getElementById('btnBuscar');
const seccionResultados = document.getElementById('seccionResultados');


//ocultar o mostrar secciones
function mostrarSeccion(seccionMostrar) {
    seccionCrearUsuario.style.display = 'none';
    seccionBuscarUsuario.style.display = 'none';
    seccionResultados.style.display = 'none';
    seccionMostrar.style.display = 'block';
}


//mostrar el formulario para crear
btnCrearUsuario.addEventListener('click', () => {
    mostrarSeccion(seccionCrearUsuario);
});

//guardar un usuario
btnGuardarUsuario.addEventListener('click', () => {
    const id = document.getElementById('idUsuario').value;
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const dni = document.getElementById('dni').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;

    //para validar que no haya campos vacios
    if (id && nombreCompleto && dni && telefono && direccion) {
        
        //si hay datos en los campos se crea un nuevo objeto usuario
        const usuario = {id, nombreCompleto, dni, telefono, direccion};
        usuarios.push(usuario); //agrega el objeto al array
        alert('Usuario guardado con éxito');

        //limpia los campos
        document.getElementById('idUsuario').value = '';
        document.getElementById('nombreCompleto').value = '';
        document.getElementById('dni').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('direccion').value = '';
    } else {
        alert('Por favor complete los campos requeridos');
    }
});

//para buscar un usuario
btnBuscarUsuario.addEventListener('click', () => {
    const idBuscarUsuario = document.getElementById('idBuscarUsuario').value;
    const usuario = usuarios.find(user => user.id === idBuscarUsuario);

    //para mostrar la busqueda
    if(usuario) {
        
    }
})