
let contador=Number(document.getElementById('valor').value);

function actualizarValor(){

    document.getElementById('valor').value=contador;
}

document.getElementById('incrementar').addEventListener('click',()=>{

    contador++;
    actualizarValor();

})

document.getElementById('decrementar').addEventListener('click',()=>{

    contador--;
    actualizarValor();
})