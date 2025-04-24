

document.addEventListener('DOMContentLoaded', function() {
    
    const pantalla = document.getElementById('valor_1');
  
    const botones = document.querySelectorAll('#contenedor button');
  
    let numeroActual = '';
    let numeroAnterior = '';
    let operacion = '';
    let resultado = null;
  
    botones.forEach(function(boton) {

      boton.addEventListener('click', function() {
        let valor = boton.textContent;
  
        
        if (!isNaN(valor) || valor === '.') {
          numeroActual += valor;
          pantalla.value = numeroActual;
        }
        
        else if (valor === 'c') {
          numeroActual = '';
          numeroAnterior = '';
          operacion = '';
          resultado = null;
          pantalla.value = '0';
        }

        else if (valor === '=') {
          if (numeroAnterior !== '' && numeroActual !== '') {
            let n1 = parseFloat(numeroAnterior);
            let n2 = parseFloat(numeroActual);
  
            if (operacion === '+') {
              resultado = n1 + n2;
            } else if (operacion === '-') {
              resultado = n1 - n2;
            } else if (operacion === 'x') {
              resultado = n1 * n2;
            } else if (operacion === '/') {
              if (n2 === 0) {
                alert("No se puede dividir entre 0");
                return;
              }
              resultado = n1 / n2;
            }
  
            pantalla.value = resultado;
            numeroActual = resultado.toString();
            numeroAnterior = '';
            operacion = '';
          }
        }
        
        else {
          if (numeroActual !== '') {
            numeroAnterior = numeroActual;
            operacion = valor;
            numeroActual = '';
          }
        }

      });

    });

  });
  