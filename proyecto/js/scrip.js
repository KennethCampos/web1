document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Campos
    let nombre = document.getElementById('nombreCompleto');
    let fecha = document.getElementById('FechaCita');
    let telefono = document.getElementById('telefono');
    let comentario = document.getElementById('comentario');
    let select = document.getElementById('floatingSelect');
  
    // Limpieza de errores
    const limpiarCampo = (input, errorDiv) => {
      input.classList.remove('is-invalid');
      errorDiv.textContent = '';
    }
  ;
    limpiarCampo(nombre, document.getElementById('errorNombre'));
    limpiarCampo(fecha, document.getElementById('errorFecha'));
    limpiarCampo(telefono, document.getElementById('errorTelefono'));
    limpiarCampo(comentario, document.getElementById('errorComentario'));
    limpiarCampo(select, document.getElementById('errorSelect'));
  
    let valido = true;
  
  
    // Validación nombre
    if (nombre.value.trim() === '') {
      nombre.classList.add('is-invalid');
      document.getElementById('errorNombre').textContent = 'El nombre es obligatorio';
      valido = false;
    }
  
    // Fecha
    if (fecha.value.trim() === '') {
      fecha.classList.add('is-invalid');
      document.getElementById('errorFecha').textContent = 'La fecha es obligatoria';
      valido = false;
    }
  
    // Teléfono
    if (telefono.value.trim() === '') {
      telefono.classList.add('is-invalid');
      document.getElementById('errorTelefono').textContent = 'El teléfono es obligatorio';
      valido = false;
    }
  
    // Comentario
    if (comentario.value.trim() === '') {
      comentario.classList.add('is-invalid');
      document.getElementById('errorComentario').textContent = 'El comentario es obligatorio';
      valido = false;
    }
  
    // Select
    if (select.value === 'Selecciona una opción') {
      select.classList.add('is-invalid');
      document.getElementById('errorSelect').textContent = 'Debes seleccionar una opción';
      valido = false;
    }
  
    if (valido) {
      alert('Formulario enviado correctamente ✅');
      document.getElementById('form').reset();
    }
  });
  