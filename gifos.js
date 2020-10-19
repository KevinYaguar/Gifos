//ApiKey
const ApiKey = 'api_key=1yVSM9oVX3z5nlo213gmodWDvoRxttsM';

//Menu Hamburguesa a X en la version Mobile.
let hamburguesa = document.getElementById('fa-bars'); // Elemento i (menu hamburguesa) de Fontawesome.
let menu = document.getElementById('menu'); // ul del header. (modo o., favoritos, mis gifs) 
hamburguesa.addEventListener('click', () => {
    hamburguesa.classList.toggle('fa-times');
    hamburguesa.classList.toggle('fa-bars');
    menu.classList.toggle('menu');
    menu.classList.toggle('menuOn');
}, false);

// Modo Oscuro
let modoOscuro = document.getElementById('dark'); //"Modo escuro"
let cuerpoWeb = document.getElementById('body'); //Body Completo
let logoBack = document.getElementById('logoBack'); //Backgorund del logo
let logoTextBack = document.getElementById('logoTextBack'); //Texto del logo
let seccionTwo = document.getElementById('seccionTwo'); //Seccion dos del main
let tendringGifosTittle = document.getElementById('tendring-gifos-tittle'); // Titulo de la seccion dos (Trending)
let tendringGifosSubtt = document.getElementById('tendring-gifos-subtt'); //Subtitulo de la seccion dos (Trending)
let searcher = document.getElementById('searcher') //Buscador(div contenedor)
modoOscuro.addEventListener('click', () => {
    cuerpoWeb.classList.toggle('oscuro');
    logoBack.classList.toggle('oscuro');
    logoTextBack.classList.toggle('oscuro');
    seccionTwo.classList.toggle('oscuro2');
    tendringGifosTittle.classList.toggle('oscuro2');
    tendringGifosSubtt.classList.toggle('oscuro2');
    inputBusqueda.classList.toggle('oscuro');
}, false);
// input del buscador
let inputBusqueda = document.getElementById('searcherInput');

//focus X en el buscador
let buscador = document.getElementById('buscador'); // elemento i de fontawesome. En primera instancia es fa-bars. 
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

//Buscador codigo reducido
let sugerencias = document.getElementById('Sugerencias'); // ul sin elementos li
let sugerencia1 = document.createElement('li');
let sugerencia2 = document.createElement('li');
let sugerencia3 = document.createElement('li');
let sugerencia4 = document.createElement('li');
let sugerencia5 = document.createElement('li');
inputBusqueda.addEventListener('focus', () => {
    sugerencias.classList.toggle('Lista-Activa');
    sugerencias.classList.toggle('Lista-Sugerencias');
}, false);

let arrayGifsParaStorage = []; //Array donde se acumularas los gifs guardados en favoritos

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
inputBusqueda.addEventListener('keyup', (busqueda) => {
    busqueda = inputBusqueda.value;
    obetenerSugerencias(busqueda);
}, false);

//Mostrar resultados gifs solicitados impresos en el DOM

let botonVerMas = document.createElement('button'); // BOTON VER MAS
var bloqueDeRespuestas = document.getElementById('respuesta-de-busqueda'); //Contenedor de todos los gifs a imprimir

//Corazones
var corazonNormal = './img/icon-fav.svg';
var corazonHover = './img/icon-fav-hover.svg';
var corazonActive = './img/icon-fav-active.svg';
var corazonActiveActive = 'http://127.0.0.1:5500/img/icon-fav-active.svg';

//Llamada a la API
async function ObtenerGifsSolicitados(GifsSolicitados, offset) {
    let url = `https://api.giphy.com/v1/gifs/search?${ApiKey}&q=${GifsSolicitados}&limit=12&offset=${offset}&rating=g&lang=en`;
    let res = await fetch(url);
    let json = await res.json();

    for (let data of json.data) {
        let gif = data.images.original;
        let respuestaGif = document.createElement('img');
        respuestaGif.setAttribute('src', gif.url);
        respuestaGif.setAttribute('id', 'imagen de respuesta en ObtenerGifsSolicitados');

        let bloqueParaCadaImagen = document.createElement('div'); //En este div sucederan los eventos mouseover
        let bloqueParaCadaImagenInferior = document.createElement('div'); // En este se imprimiran los gifs

        bloqueParaCadaImagen.id = 'bloque-para-cada-imagen';
        bloqueParaCadaImagenInferior.id = 'bloque-inferior';

        bloqueDeRespuestas.appendChild(bloqueParaCadaImagen);
        bloqueParaCadaImagen.appendChild(bloqueParaCadaImagenInferior);
        bloqueParaCadaImagenInferior.appendChild(respuestaGif);

        //Variables y eventos mouseover
        let btnFav = document.createElement('div'); //Boton Favoritos.
        btnFav.classList.toggle('btnFavOut'); //por defecto display:none.
        let heartFav = document.createElement('img'); //imagen Corazon.
        heartFav.setAttribute('src', corazonNormal);

        heartFav.id = 'img-btn-gif-card';

        let btnDownload = document.createElement('div'); //Boton Descargar.
        btnDownload.classList.toggle('btnFavOut'); //por defecto display:none.
        let downloadImg = document.createElement('img'); //imagen Descargar.
        downloadImg.setAttribute('src', './img/icon-download.svg');
        downloadImg.id = 'img-btn-gif-card';

        let btnExpand = document.createElement('div'); // Boton Expandir.
        btnExpand.classList.toggle('btnFavOut'); //por defecto display:none.
        let expandImg = document.createElement('img'); //imagen Expandir
        expandImg.setAttribute('src', './img/icon-max-normal.svg');
        expandImg.id = 'img-btn-gif-card';

        bloqueParaCadaImagen.appendChild(btnFav); //Insercion del boton en el bloque FAV
        btnFav.appendChild(heartFav); //Insercion de la imagen en el boton

        bloqueParaCadaImagen.appendChild(btnDownload); //Insercion del boton en el bloque DOWNLOAD
        btnDownload.appendChild(downloadImg); //Insercion de la imagen en el boton

        bloqueParaCadaImagen.appendChild(btnExpand); //Insercion del boton en el bloque EXPAND
        btnExpand.appendChild(expandImg); //Insercion de la imagen en el boton


        bloqueParaCadaImagen.classList.add('cuadro');
        bloqueParaCadaImagenInferior.classList.add('cuadro');

        //funciones de normal, hover y click del src del heart fav.
        function corazonNormalFunction() {
            if (heartFav.src == corazonActiveActive) {
                heartFav.setAttribute('src', corazonActive);
                heartFav.style.padding = '7px';
            } else {
                heartFav.setAttribute('src', corazonNormal);
                heartFav.style.padding = '';
            }
        }

        function corazonHoverFunction() {
            if (heartFav.src == corazonActiveActive) {
                heartFav.setAttribute('src', corazonActive);
                heartFav.style.padding = '7px';
            } else {
                heartFav.setAttribute('src', corazonHover);
                heartFav.style.padding = '';
            }
        }

        function corazonActiveFunction() {
            if (heartFav.src == corazonActiveActive) {
                heartFav.setAttribute('src', corazonHover);
                heartFav.style.padding = '';
            } else {
                heartFav.setAttribute('src', corazonActive);
                heartFav.style.padding = '7px';
            }
        }

        function guardarEnSssionStorage() {
            sessionStorage.setItem('gifsbuscados', respuestaGif);
            arrayGifsParaStorage.push(respuestaGif.getAttribute('src'));
            arrayGifsParaStorage.join(',')
            sessionStorage.setItem('arrayGifs', arrayGifsParaStorage);
            console.log(arrayGifsParaStorage);
        }
        //Eventos mouseover sobre el GIF
        bloqueParaCadaImagen.addEventListener('mouseover', () => {
            bloqueParaCadaImagen.classList.toggle('bloque-para-cada-imagen-hover-background');
            bloqueParaCadaImagenInferior.classList.toggle('opacity-cero-dot-six');

            btnFav.classList.toggle('btnFavOut');
            btnFav.classList.toggle('btn-gif-card');

            //Eventos mouseover/out y click sobre el boton FAV
            heartFav.addEventListener('mouseover', corazonHoverFunction, false);
            heartFav.addEventListener('mouseout', corazonNormalFunction, false);
            heartFav.addEventListener('click', corazonActiveFunction, false);
            heartFav.addEventListener('click', guardarEnSssionStorage, false);

            //Eventos mouseover sobre el boton DOWNLOAD
            btnDownload.classList.toggle('btnFavOut');
            btnDownload.classList.toggle('btn-gif-card');
            btnDownload.addEventListener('mouseover', () => {
                downloadImg.setAttribute('src', './img/icon-download-hover.svg');
            }, false);

            //Eventos mouseover sobre el boton EXPAND
            btnExpand.classList.toggle('btnFavOut');
            btnExpand.classList.toggle('btn-gif-card');
            btnExpand.addEventListener('mouseover', () => {
                expandImg.setAttribute('src', './img/icon-max-hover.svg');
            }, false);
        }, false);

        //Eventos mouseout sobre el boton DOWNLOAD
        btnDownload.addEventListener('mouseout', () => {
            downloadImg.setAttribute('src', './img/icon-download.svg');
        }, false);
        //Eventos mouseout sobre el boton EXPAND
        btnExpand.addEventListener('mouseout', () => {
            expandImg.setAttribute('src', './img/icon-max-normal.svg');
        }, false);

        //Eventos mouseout sobre el GIF
        bloqueParaCadaImagen.addEventListener('mouseout', () => {
            bloqueParaCadaImagen.classList.toggle('bloque-para-cada-imagen-hover-background');
            bloqueParaCadaImagenInferior.classList.toggle('opacity-cero-dot-six');
            btnFav.classList.toggle('btn-gif-card');
            btnFav.classList.toggle('btnFavOut');
            btnDownload.classList.toggle('btn-gif-card');
            btnDownload.classList.toggle('btnFavOut');
            btnExpand.classList.toggle('btn-gif-card');
            btnExpand.classList.toggle('btnFavOut');
        }, false);
    }
    insertarBotonVerMas();
}

// Funcion del boton VerMas
function insertarBotonVerMas() {
    //boton ver mas
    botonVerMas.innerText = 'ver más';
    bloqueDeRespuestas.appendChild(botonVerMas);
    botonVerMas.id = 'botonVerMas';
}

function cambiarTitulo(solicitado) {
    //Eliminar sub del trending y cambiar el texto a lo buscado
    let resultadoTitulo = document.getElementById('trending-tt');
    resultadoTitulo.innerText = solicitado;
    resultadoTitulo.id = 'resultadoTitulo';
    resultadoTitulo.style.fontSize = '35px';
    resultadoTitulo.style.lineHeight = '30px';
    let desaparecerSubtitulo = document.getElementById('trending-text');
    desaparecerSubtitulo.innerText = '';
    desaparecerSubtitulo.style.height = '60px';
}



// Evento ENTER para imprimir los gifs en el DOM
inputBusqueda.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
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

// VER MAS GIFS 
let pagOffset = 0; //Variable que determina el offset del llamado a la API. En el evento VerMas aumentará su valor de   12 en 12.
botonVerMas.addEventListener('click', () => {
    pagOffset = pagOffset + 12;
    ObtenerGifsSolicitados(inputBusqueda.value, pagOffset);
}, false);