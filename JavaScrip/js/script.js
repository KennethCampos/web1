//alert('Hola Mundo.....');

document.getElementById('form').addEventListener('submit',function(event){



    let nombre= document.getElementById('nombre').value;
    

    var edad=document.getElementById('edad').value;

    const nombreError=document.getElementById("errorNombre");
    const edadError=document.getElementById('errorEdad');

    nombreError.textContent='';
    edadError.textContent='';


    let bandera=true;
    if(nombre===''){

        nombreError.textContent='El nombre es Obligatorio'
        bandera=false;

    }

    if(edad===''){

        edadError.textContent='La edad es Obligatoria'
        bandera=false;
    }

    if(bandera){


        alert('bienvenido...')
        document.getElementById('form').reset();

    }



})