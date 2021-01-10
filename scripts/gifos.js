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
<<<<<<< HEAD

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



=======
//Funcion para descargar imagenes
async function algo(respuestaGif) {

    let a = document.createElement('a');
    let response = await fetch(respuestaGif.src);
    let file = await response.blob();
    a.download = 'MiNuevoGif.gif';
    a.href = window.URL.createObjectURL(file);
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
    a.click();

};



async function ObtenerGifsSolicitados(GifsSolicitados, offset) {
    let url = `https://api.giphy.com/v1/gifs/search?${ApiKey}&q=${GifsSolicitados}&limit=12&offset=${offset}&rating=g&lang=en`;
    let res = await fetch(url);
    let json = await res.json();

    

    for (let data of json.data) {
        let gif = data.images.original;
        let respuestaGif = document.createElement('img');
        respuestaGif.setAttribute('src', gif.url);
        respuestaGif.setAttribute('id', 'imagen de respuesta en ObtenerGifsSolicitados');

        cards(respuestaGif, bloqueDeRespuestas, 'cuadro', 'btn-gif-card', corazonNormal);
        
        
    }
    insertarBotonVerMas();
   verMas(inputBusqueda.value);
}
 // VER MAS GIFS 

function verMas (input) {
    botonVerMas.addEventListener('click', () => {
        try{
            bloqueDeRespuestas.removeChild(contenedorDeBotonVerMas);
        } catch(err){}
        pagOffset = pagOffset + 12;
        ObtenerGifsSolicitados(input, pagOffset);
        
    }, false);
}

 
>>>>>>> cfeeb53d008ae2ccf69bcd02b0f3587a0976a184
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
<<<<<<< HEAD
        printGifsSearched(inputBusqueda.value, 0);
=======
        ObtenerGifsSolicitados(inputBusqueda.value, 0);
>>>>>>> cfeeb53d008ae2ccf69bcd02b0f3587a0976a184
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
<<<<<<< HEAD

// Imprimir resultados seleccionados de sugerencia con click en el DOM

function sugestions(li) {
    li.addEventListener('click', () => {
        printGifsSearched(li.innerText, 0, 12);
        cambiarTitulo(li.innerText);
    }, false);
}
=======
sugerencia5.addEventListener('click', () => {
    ObtenerGifsSolicitados(sugerencia5.innerText, 0, 12);
    cambiarTitulo(sugerencia5.innerText);
}, false);


let trendringText1 = document.getElementById('trending-text-1');
let trendringText2 = document.getElementById('trending-text-2');
let trendringText3= document.getElementById('trending-text-3');
let trendringText4 = document.getElementById('trending-text-4');
let trendringText5 = document.getElementById('trending-text-5');

trendringText1.addEventListener('click', ()=>{
    eliminarHijos(bloqueDeRespuestas);
    ObtenerGifsSolicitados(trendringText1.innerText, 0, 12)
    insertarBotonVerMas();
    verMas(trendringText1.innerText);
})

trendringText2.addEventListener('click', ()=>{
    eliminarHijos(bloqueDeRespuestas);
    ObtenerGifsSolicitados(trendringText2.innerText, 0, 12)
    insertarBotonVerMas();
    verMas(trendringText2.innerText);
})
trendringText3.addEventListener('click', ()=>{
    eliminarHijos(bloqueDeRespuestas);
    ObtenerGifsSolicitados(trendringText3.innerText, 0, 12)
    insertarBotonVerMas();
    verMas(trendringText3.innerText);
})
trendringText4.addEventListener('click', ()=>{
    eliminarHijos(bloqueDeRespuestas);
    ObtenerGifsSolicitados(trendringText4.innerText, 0, 12)
    insertarBotonVerMas();
    verMas(trendringText4.innerText);
})
trendringText5.addEventListener('click', ()=>{
    eliminarHijos(bloqueDeRespuestas);
    ObtenerGifsSolicitados(trendringText5.innerText, 0, 12)
    insertarBotonVerMas();
    verMas(trendringText6.innerText);
})

>>>>>>> cfeeb53d008ae2ccf69bcd02b0f3587a0976a184
