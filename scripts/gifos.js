//Cambio de menu desplegable
hamburguesa.addEventListener('click', () => {
    hamburguesa.classList.toggle('fa-times');
    hamburguesa.classList.toggle('fa-bars');
    menu.classList.toggle('menu');
    menu.classList.toggle('menuOn');
}, false);

//focus X en el buscador

inputBusqueda.addEventListener('focus', () => {
    buscador.classList.toggle('fa-times');
}, false);
inputBusqueda.addEventListener('focusout', () => {
    buscador.classList.toggle('fa-times');
}, false);

// Click on X para input.value vacío. y para plegar lista de sugerencias
//Cambio del titulo por el lo buscado
buscador.addEventListener('click', () => {
    inputBusqueda.value = '';
    sugerencias.classList.toggle('Lista-Activa');
    sugerencias.classList.toggle('Lista-Sugerencias');
}, false);

//Buscador: focus, sugerencias y mostrar resultados gifs solicitados impresos en el DOM.
// Boton Ver mas: clase y uso.


inputBusqueda.addEventListener('focus', () => {
    sugerencias.classList.toggle('Lista-Activa');
    sugerencias.classList.toggle('Lista-Sugerencias');
}, false);
inputBusqueda.addEventListener('blur', () => {
    sugerencias.classList.toggle('Lista-Activa');
    sugerencias.classList.toggle('Lista-Sugerencias');
}, false);


//Obtener sugerencias al escribir
inputBusqueda.addEventListener('keyup', () => {
    obetenerSugerencias(inputBusqueda.value);
}, false);

//boton ver mas
function insertarBotonVerMas() {
    
    setTimeout(()=>{
        botonVerMas.innerText = 'ver más';
    botonVerMas.classList.add('botonVerMas');

    contenedorDeBotonVerMas.classList.add('contenedor-del-boton-ver-mas');
    contenedorDeBotonVerMas.appendChild(botonVerMas);
    bloqueDeRespuestas.appendChild(contenedorDeBotonVerMas);
    }, 1000)

}

async function obetenerSugerencias(busquedaIngresada) {
    let url = 'https://api.giphy.com/v1/gifs/search/tags?' + ApiKey + '&q=' + busquedaIngresada;
    let response = await fetch(url);
    let json = await response.json();
    let data = await json.data;

    eliminarHijos(sugerencias);

    data.forEach(item => {
        let sugestion = document.createElement('li');
        sugestion.classList.add('sug');
        sugestion.innerHTML = `<i class="fas fa-search" id="buscador"></i> ${item.name}`
        sugerencias.appendChild(sugestion)
        sugestions(sugestion);
    })

}

async function getGifsArray(topic, offset) {
    const url= `https://api.giphy.com/v1/gifs/search?${ApiKey}&q=${topic}&limit=12&offset=${offset}&rating=g&lang=en`;
    const res = await fetch(url);
    const json = await res.json();
    const data = await json.data;

    const arrayImgGifs = [];
    for(gif of data){
        const imgGif = document.createElement('img');

        imgGif.setAttribute('src', gif.images.original.url);

        arrayImgGifs.push(imgGif) 
    }
    return arrayImgGifs;
}

function printGifsSearched(GifsSolicitados, offset) {
    const arrayImgGifs = getGifsArray(GifsSolicitados, offset);

    arrayImgGifs.then(res=> {
        res.forEach(gif=>{
            cards(gif, bloqueDeRespuestas, 'cuadro', 'btn-gif-card', corazonNormal);
        })
        const imagenes = document.getElementsByTagName('img');
        hoverColor(imagenes, 'cuadro');
        getButtons(imagenes, 'cuadro');
    })
}



function cambiarTitulo(solicitado) {
    //Eliminar sub del trending y cambiar el texto a lo buscado
    let resultadoTitulo = document.getElementById('trending-tt');
    resultadoTitulo.innerText = solicitado;
    resultadoTitulo.classList.add('resultadoTitulo');
    resultadoTitulo.style.fontSize = '35px';
    resultadoTitulo.style.lineHeight = '30px';
    let desaparecerSubtitulo = document.getElementById('trending-text');
    desaparecerSubtitulo.innerText = '';
    desaparecerSubtitulo.style.height = '60px';
}
// Evento ENTER para imprimir los gifs en el DOM
inputBusqueda.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        eliminarHijos(bloqueDeRespuestas);
        printGifsSearched(inputBusqueda.value, 0);
        cambiarTitulo(inputBusqueda.value);
        insertarBotonVerMas();
    }
}, false);

// VER MAS GIFS 
botonVerMas.addEventListener('click', () => {
    bloqueDeRespuestas.removeChild(contenedorDeBotonVerMas);
    pagOffset = pagOffset + 12;
    printGifsSearched(inputBusqueda.value, pagOffset);

    insertarBotonVerMas();

}, false);

// Imprimir resultados seleccionados de sugerencia con click en el DOM

function sugestions(li) {
    li.addEventListener('click', () => {
        printGifsSearched(li.innerText, 0, 12);
        cambiarTitulo(li.innerText);
    }, false);
}