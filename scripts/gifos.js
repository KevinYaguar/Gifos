//Menu Hamburguesa a X en la version Mobile.
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
buscador.addEventListener('click', () => {
    inputBusqueda.value = '';
    sugerencias.classList.toggle('Lista-Activa');
    sugerencias.classList.toggle('Lista-Sugerencias');
}, false);

//Buscador: focus, sugerencias y mostrar resultados gifs solicitados impresos en el DOM.
// Boton Ver mas: clase y uso.
//Cambio del titulo por el lo buscado

inputBusqueda.addEventListener('focus', () => {
    sugerencias.classList.toggle('Lista-Activa');
    sugerencias.classList.toggle('Lista-Sugerencias');
}, false);
inputBusqueda.addEventListener('keyup', (busqueda) => {
    busqueda = inputBusqueda.value;
    obetenerSugerencias(busqueda);
}, false);

function insertarBotonVerMas() {
    //boton ver mas
    botonVerMas.innerText = 'ver más';
    botonVerMas.classList.add('botonVerMas') ;
    
    contenedorDeBotonVerMas.classList.add('contenedor-del-boton-ver-mas');
    contenedorDeBotonVerMas.appendChild(botonVerMas);
    bloqueDeRespuestas.appendChild(contenedorDeBotonVerMas);

}
async function obetenerSugerencias(busquedaIngresada) {
    let url = 'https://api.giphy.com/v1/gifs/search/tags?' + ApiKey + '&q=' + busquedaIngresada;
    let response = await fetch(url);
    let json = await response.json();
    let data = await json.data;
    sugerencia1.innerHTML = `<i class="fas fa-search" id="buscador"></i>${data[0].name}`;
    sugerencias.appendChild(sugerencia1);
    sugerencia2.innerHTML = `<i class="fas fa-search" id="buscador"></i>${data[1].name}`;
    sugerencias.appendChild(sugerencia2);
    sugerencia3.innerHTML = `<i class="fas fa-search" id="buscador"></i>${data[2].name}`;
    sugerencias.appendChild(sugerencia3);
    sugerencia4.innerHTML = `<i class="fas fa-search" id="buscador"></i>${data[3].name}`;
    sugerencias.appendChild(sugerencia4);
    sugerencia5.innerHTML = `<i class="fas fa-search" id="buscador"></i>${data[4].name}`;
    sugerencias.appendChild(sugerencia5);
}
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
        ObtenerGifsSolicitados(inputBusqueda.value, 0);
        cambiarTitulo(inputBusqueda.value);
    }
}, false);

// Imprimir resultados seleccionados de sugerencia con click en el DOM
sugerencia1.addEventListener('click', () => {
    ObtenerGifsSolicitados(sugerencia1.innerText, 0, 12);
    cambiarTitulo(sugerencia1.innerText);
}, false);
sugerencia2.addEventListener('click', () => {
    ObtenerGifsSolicitados(sugerencia2.innerText, 0, 12);
    cambiarTitulo(sugerencia2.innerText);
}, false);
sugerencia3.addEventListener('click', () => {
    ObtenerGifsSolicitados(sugerencia3.innerText, 0, 12);
    cambiarTitulo(sugerencia3.innerText);
}, false);
sugerencia4.addEventListener('click', () => {
    ObtenerGifsSolicitados(sugerencia4.innerText, 0, 12);
    cambiarTitulo(sugerencia4.innerText);
}, false);
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

