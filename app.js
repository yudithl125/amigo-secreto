// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    adherirAmigo();
    mostrarLista();
    actualizarEstadoBotonSortear();
    limpiarResultado();
}

function limpiarNombre() {
    let inputAmigo = document.getElementById("amigo");
    inputAmigo.value="";
}

function adherirAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    if (!nombreAmigo) { 
        alert("por favor agregar el nombre de un amigo");
        return;
    }
    amigos.push(nombreAmigo);
    limpiarNombre();
}
function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML="";
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let li = document.createElement('li');
        li.innerHTML= amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let limiteDeLaLista = amigos.length;
    if(amigos.length === 0){
        limpiarLista();
        actualizarEstadoBotonSortear();
    }else{
        let numeroSorteado = Math.floor(Math.random()* limiteDeLaLista);
        resultado.innerHTML = amigos[numeroSorteado];
        limpiarLista();
        actualizarEstadoBotonSortear();
    }
} 

function limpiarLista() {
    let lista = document.getElementById("listaAmigos"); 
    amigos = [];
    lista.innerHTML="";
}

function actualizarEstadoBotonSortear() {
    let boton = document.getElementById("botonSortear");
    if (amigos.length === 0) {
        boton.setAttribute('disabled', "true");
        boton.setAttribute('class','button-draw button-disabled');
    } else {
        boton.removeAttribute('disabled');
        boton.setAttribute('class','button-draw');
    }
}
function limpiarResultado() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}