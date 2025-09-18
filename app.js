let amigos = []

function agregarAmigo () {
    let valorVacio = (document.getElementById('amigo').value);
    if (valorVacio === ''){
        alert ('Por favor, inserte un nombre');
        return;
    }  

    amigos.push(document.getElementById('amigo').value);
    console.log(amigos);

    actualizarLista ();
    limpiarCaja ();

}

function actualizarLista () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML='';
 
    //for (let i = 0; i < amigos.length; i++) {
    amigos.forEach(amigos => {
     lista.innerHTML += `<li>${amigos}</li>`;
    
    })
    
    
}


function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}



function sortearAmigo() {

    if (amigos === ''){
        alert ('No hay amigos disponibles para el sorteo');
    } 

    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    console.log('Indice aleatorio generado', indiceAleatorio);

    let amigoSorteado = amigos[indiceAleatorio];
    console.log("Amigo sorteado:", amigoSorteado);

    document.getElementById('resultado').innerHTML = `<li> El amigo Sorteado es ${amigoSorteado} </li>`;

}

function reiniciarJuego (){

    amigos = [];
    document.getElementById('listaAmigos').innerHTML='';
    document.getElementById('resultado').innerHTML='';
    alert ('Juego reiniciado. Puedes agregar nuevos amigos');
    document.getElementById('btn-reiniciar').disabled = "true";
}

