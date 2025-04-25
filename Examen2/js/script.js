document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Campos
    let nombre = document.getElementById('nombreCompleto');
    let telefono = document.getElementById('telefono');
    let fecha = document.getElementById('fecha');
    let genero = document.querySelector('input[name="genero"]:checked'); 
    let select = document.getElementById('pais');
    let aceptar = document.getElementById('checkDefault');
    

    // Limpieza de errores
    const limpiarCampo = (input, errorDiv) => {
        input.classList.remove('is-invalid');
        errorDiv.textContent = '';
    };

    limpiarCampo(nombre, document.getElementById('errorNombre'));
    limpiarCampo(telefono, document.getElementById('errorTelefono'));
    limpiarCampo(fecha, document.getElementById('errorFecha'));
    limpiarCampo(select, document.getElementById('errorPais'));
    limpiarCampo(aceptar, document.getElementById('errorAceptar'));

    let valido = true;

    // Validación nombre
    if (nombre.value.trim() === '') {
        nombre.classList.add('is-invalid');
        document.getElementById('errorNombre').textContent = 'El nombre es obligatorio';
        valido = false;
    }

    // Teléfono
    if (telefono.value.trim() === '') {
        telefono.classList.add('is-invalid');
        document.getElementById('errorTelefono').textContent = 'El teléfono es obligatorio';
        valido = false;
    }

    // Fecha
    if (fecha.value.trim() === '') {
        fecha.classList.add('is-invalid');
        document.getElementById('errorFecha').textContent = 'La fecha es obligatoria';
        valido = false;
    }

    // Género
    if (genero) { 
        document.querySelector('.form-check').classList.add('is-invalid');
        document.getElementById('errorGenero').textContent = 'Escoja el género';
        valido = false;
    }

    // País
    if (select.value === 'Selecciona una opción') {
        select.classList.add('is-invalid');
        document.getElementById('errorPais').textContent = 'Debes seleccionar una opción válida';
        valido = false;
    }

    // Confirmar aceptación
    if (!aceptar.checked) {
        aceptar.classList.add('is-invalid');
        document.getElementById('errorAceptar').textContent = 'Debes seleccionar la casilla de confirmación';
        valido = false;
    }

    // Si todo está validado correctamente
    if (valido) {
        alert('Formulario enviado correctamente');
        document.getElementById('form').reset();
    }
});
