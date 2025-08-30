// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    const nombreAmigo = document.getElementById('amigo').value.trim();

    // validamos si el espacio está vacío
    if(nombreAmigo === ''){
        alert('Por favor, inserte un nombre');
        return;
    }

    //agregamos el nombre a la lista
    amigos.push(nombreAmigo);

    console.log(amigos);
    // mostramos la lista de amigos
    mostrarListaAmigos();
    
    //Limpiamos el campo de entrada
    document.getElementById('amigo').value = '';
}

//Función para actualizar la lista de los amigos
function mostrarListaAmigos(){
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';

    //iteramos sobre el array de amigos
    for (let i = 0; i< amigos.length; i++){
        //creamos el elemento <li> para cada amigo agregado
        const li = document.createElement('li');
        li.textContent = amigos[i];

        listaAmigos.appendChild(li);
    }
}

//Función para sortear un amigo secreto
function sortearAmigo(){
    if (amigos.length === 0){
        alert('¡No hay amigos en la lista! Agrega algunos primero');
        return;
    }
    //seleccionar un amigo secreto aleatorio
    const amigoSecreto = amigos[Math.floor(Math.random()* amigos.length)];

    //Mostrar el resultado en el <ul> 
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `¡El amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
    
}