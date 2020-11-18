// ApiKey
const ApiKey = 'api_key=1yVSM9oVX3z5nlo213gmodWDvoRxttsM';



//Server
let server = 'http://127.0.0.1:5502/';
//http://127.0.0.1:5502/'
let serverGitHub = 'https://kevinyaguar.github.io/';

// Body y local storage
let cuerpoWeb = document.getElementById('body'); //Body Completo.
let lines = document.getElementsByClassName('line'); //lineas.
let spanColorNormal = document.getElementsByClassName('letra-color-normal'); //Palabras para cambiar a blanco
let arrayGifsParaStorage = []; //Array donde se acumularas los gifs guardados en favoritos

let gifos = document.getElementById('gifos');


// Header

// Logo
let logoBack = document.getElementById('logoBack'); //Backgorund del logo
let logoTextBack = document.getElementById('logoTextBack'); //Texto del logo (fondo)

// Nav
let menu = document.getElementById('menu'); // ul del header. (modo o., favoritos, mis gifs).
let hamburguesa = document.getElementById('fa-bars'); // Elemento i (menu hamburguesa) de Fontawesome.
let modoOscuro = document.getElementById('dark'); //      "MODO NOCTURNO"  (li)
let favoritos = document.getElementById('favoritos'); //  "FAVORITOS"      (li)

let misGifos = document.getElementById('misGifos'); //    "Mis Gifos"      (li)
let masGifosImg = document.getElementById('masGifosImg');
let masGifosImgSRC = './img/button-crear-gifo.svg';
let masGifosImgActive = './img/CTA-crear-gifo-active.svg';
let masGifosImgSRCServer = server + 'img/button-crear-gifo.svg'; //https://kevinyaguar.github.io
let masGifosImgActiveServer = server + 'img/CTA-crear-gifo-active.svg'; //https://kevinyaguar.github.io
let masGifosImgHover = './img/CTA-crear-gifo-hover.svg';
let masGifosImgModoNocturno = './img/CTA-crar-gifo-modo-noc.svg';

masGifosImg.setAttribute('src', masGifosImgSRC);

// Main
let main = document.querySelector('main');

// Seccion One
let seccionOne = document.querySelector('.one');
let searcher = document.getElementById('searcher'); //Buscador(div contenedor)
let buscador = document.getElementById('buscador'); // elemento i de fontawesome. En primera instancia es fa-bars.
let inputBusqueda = document.getElementById('searcherInput');
let sugerencias = document.getElementById('Sugerencias'); // ul sin elementos li
let sugerencia1 = document.createElement('li');
let sugerencia2 = document.createElement('li');
let sugerencia3 = document.createElement('li');
let sugerencia4 = document.createElement('li');
let sugerencia5 = document.createElement('li');

var bloqueDeRespuestas = document.getElementById('respuesta-de-busqueda'); //Contenedor de todos los gifs a imprimir
let pagOffset = 0; //Variable que determina el offset del llamado a la API. En el evento VerMas aumentará su valor de   12 en 12.
var corazonNormal = './img/icon-fav.svg';
var corazonHover = './img/icon-fav-hover.svg';
var corazonActive = './img/icon-fav-active.svg';
var corazonActiveActive = server + 'img/icon-fav-active.svg'; // https://kevinyaguar.github.io

let botonVerMas = document.createElement('button');

// Seccion Two
let seccionTwo = document.getElementById('seccionTwo'); //Seccion dos del main
let tendringGifosTittle = document.getElementById('tendring-gifos-tittle'); // Titulo de la seccion dos (Trending)
let tendringGifosSubtt = document.getElementById('tendring-gifos-subtt'); //Subtitulo de la seccion dos (Trending)

//Carrousel
let flechaIzquierda = document.getElementById('izquierda');
let flechaIzquierdaServer = server + 'img/button-slider-left.svg';
let flechaDerecha = document.getElementById('derecha');
let flechaDerechaServer = server + 'img/Button-Slider-right.svg';
let flechaIzquierdaSrcNormal = './img/button-slider-left.svg';
let flechaDerechaSrcNormal = './img/Button-Slider-right.svg';
flechaIzquierda.setAttribute('src', flechaIzquierdaSrcNormal);
flechaDerecha.setAttribute('src', flechaDerechaSrcNormal);
let flechaIzquierdaSrcHover = './img/button-slider-left-hover.svg';
let flechaDerechaSrcHover = './img/Button-Slider-right-hover.svg';
let flechaIzquierdaSrcNocturno = './img/button-slider-left-md-noct.svg';
let flechaDerechaSrcNocturno = './img/button-slider-right-md-noct.svg';
let flechaDerechaSrcNocturnoServer = server + 'img/button-slider-right-md-noct.svg'; //https://kevinyaguar.github.io
let flechaIzquierdaSrcNocturnoServer = server + 'img/button-slider-left-md-noct.svg'; //https://kevinyaguar.github.io

// Seccion Favoritos
let seccionFavoritos = document.createElement('section');
let tituloFavoritos = document.createElement('h4');
let corazonFavoritos = document.createElement('img');
let cajaFavoritos = document.createElement('div');
let cajaSinContenido = document.createElement('div');
let sinContendioImg = document.createElement('img');
let sinContendioTexto = document.createElement('p');
let contenedorDeBotonVerMas = document.createElement('div');
let contenedorDeBotonVerMasFavoritos = document.createElement('div');
let botonVerMasFavoritos = document.createElement('button');

// Footer
let footer = document.querySelector('footer');

//gif MAX
let seccionMax = document.createElement('section');
seccionMax.id = 'seccionMAX';

//seccionMax.classList.add('clase-display-none');
let contenedorDeGifMax = document.createElement('div');
let cruzClose = document.createElement('img');
cruzClose.setAttribute('src', './img/close.svg');
cruzClose.classList.add('cruzClose');
let contenedorBajoMax = document.createElement('div');
contenedorBajoMax.classList.add('contenedor-bajo');


// Crear Gifos
let camara = document.createElement('img');
camara.setAttribute('src', './img/camara.svg');
camara.classList.add('camara');

let contenedorCentralCrearGif = document.createElement('div');
contenedorCentralCrearGif.classList.add('contenedor-central-crear-gif');


let cuadradoEzquina1 = document.createElement('div');
cuadradoEzquina1.classList.add('cuadrado-ezquina');
cuadradoEzquina1.classList.add('border-top');
cuadradoEzquina1.classList.add('border-left');


let cuadradoEzquina2 = document.createElement('div');
cuadradoEzquina2.classList.add('cuadrado-ezquina');
cuadradoEzquina2.classList.add('border-top');
cuadradoEzquina2.classList.add('border-right');

let cuadradoEzquina3 = document.createElement('div');
cuadradoEzquina3.classList.add('cuadrado-ezquina');
cuadradoEzquina3.classList.add('border-bottom');
cuadradoEzquina3.classList.add('border-left');


let cuadradoEzquina4 = document.createElement('div');
cuadradoEzquina4.classList.add('cuadrado-ezquina');
cuadradoEzquina4.classList.add('border-bottom');
cuadradoEzquina4.classList.add('border-right');

let spanNumero1 = document.createElement('p');
let spanNumero2 = document.createElement('p');
let spanNumero3 = document.createElement('p');

let contenedorDeNumeros = document.createElement('div');

let contenedorDeNumero1 = document.createElement('div');
contenedorDeNumero1.appendChild(spanNumero1);
spanNumero1.innerText = '1';

let contenedorDeNumero2 = document.createElement('div');
contenedorDeNumero2.appendChild(spanNumero2);
spanNumero2.innerText = '2';

let contenedorDeNumero3 = document.createElement('div');
contenedorDeNumero3.appendChild(spanNumero3);
spanNumero3.innerText = '3';

let lineaSeparatoria = document.createElement('div');


// Botones COMENZAR - GRABAR - FINALIZAR - SUBIR GIFO
let botonComenzar = document.createElement('button');
botonComenzar.innerHTML = 'COMENZAR';
botonComenzar.classList.add('boton-comenzar');

let botonGrabar = document.createElement('button');
botonGrabar.innerHTML = 'GRABAR';
botonGrabar.classList.add('clase-display-none');

let botonFinalizar = document.createElement('button');
botonFinalizar.innerHTML = 'FINALIZAR';
botonFinalizar.classList.add('clase-display-none');

let botonSubirGifo = document.createElement('button');
botonSubirGifo.innerHTML = 'SUBIR GIFO';
botonSubirGifo.classList.add('clase-display-none');

//CRONOMETRO
let contenedorDeCronometro = document.createElement('div');
let cronometro = document.createElement('p');
let segundos = document.createElement('span');
segundos.id = 'segundos';
let separador = document.createElement('span');
let minutos = document.createElement('span');
minutos.id = 'minutos';

segundos.innerText = 00;
separador.innerText = ':';
minutos.innerText = 00;
contenedorDeCronometro.classList.add('contenedor-cronometro');


// REPETIR CAPTURA
let repetirCaptura = document.createElement('p');
repetirCaptura.innerText = 'REPETIR CAPTURA';
repetirCaptura.classList.add('clase-display-none');
repetirCaptura.style.borderBottom = '2px solid #5ED7C6';
repetirCaptura.style.fontSize = '13px';
repetirCaptura.style.fontSize = '16px';
contenedorDeCronometro.appendChild(repetirCaptura);

//SECCION CREAR GIF
let seccionCrearGif = document.createElement('section');
seccionCrearGif.classList.add('clase-display-none');


let luzCamara = document.createElement('img');
luzCamara.setAttribute('src', './img/element-luz-camara.svg');
luzCamara.classList.add('luz');

let rollo = document.createElement('img');
rollo.setAttribute('src', './img/pelicula.svg');
rollo.classList.add('rollo');

//Contenedor Central Crear Gif Inner
let contenedorCentralCrearGifInner = document.createElement('div');
contenedorCentralCrearGifInner.classList.add('contenedor-central-crear-gif-Inner');

let crearGifBloqueUp = document.createElement('div');
crearGifBloqueUp.classList.add('crear-gif-bloque-up');
let crearGifBloqueUpFrase = document.createElement('span');

let crearGifBloqueDown = document.createElement('div');
crearGifBloqueDown.classList.add('crear-gif-bloque-down');
let crearGifBloqueDownFrase = document.createElement('span');

crearGifBloqueUpFrase.innerHTML = '<p>Aquí podrás</p> <p>crear tus propios <span class="gifos-word">GIFOS</span></p>';
crearGifBloqueDownFrase.innerHTML = '<p>¡Crea tu GIFO en sólo 3 pasos!</p> <p>(sólo necesitas una cámara para grabar un video)</p>';


contenedorDeNumero1.classList.add('contenedores-de-numeros');
contenedorDeNumero1.style.gridArea = '1 / 2';
contenedorDeNumero1.style.justifySelf = 'end';
contenedorDeNumero2.classList.add('contenedores-de-numeros');
contenedorDeNumero2.style.gridArea = '1 / 3';
contenedorDeNumero2.style.justifySelf = 'center';
contenedorDeNumero3.classList.add('contenedores-de-numeros');
contenedorDeNumero3.style.gridArea = '1 / 4';
contenedorDeNumero3.style.justifySelf = 'start';

contenedorDeNumeros.classList.add('contenedor-de-numeros-general');

lineaSeparatoria.classList.add('linea-separatoria');

cuadradoEzquina1.style.gridArea = '';
cuadradoEzquina2.style.gridArea = '1 / 3';
cuadradoEzquina3.style.gridArea = '3 / 1';
cuadradoEzquina4.style.gridArea = ' 3 / 3';

//Contenedor Central Crear Gif Inner UNO

let contenedorCentralCrearGifInnerUno = document.createElement('div');
contenedorCentralCrearGifInnerUno.classList.add('clase-display-none');

let crearGifBloqueUpUno = document.createElement('div');
crearGifBloqueUpUno.classList.add('crear-gif-bloque-up');
let crearGifBloqueUpFraseUno = document.createElement('span');

let crearGifBloqueDownUno = document.createElement('div');
crearGifBloqueDownUno.classList.add('crear-gif-bloque-down');
let crearGifBloqueDownFraseUno = document.createElement('span');

crearGifBloqueUpFraseUno.innerHTML = '<p>¿Nos das acceso a tu cámara?</p>';
crearGifBloqueDownFraseUno.innerHTML = '<p>El acceso a tu camara será válido sólo</p> <p>por el tiempo en el que estés creando el GIFO.</p>';

//Contenedor Central Crear Gif Inner DOS

let contenedorCentralCrearGifInnerDos = document.createElement('div');
contenedorCentralCrearGifInnerDos.classList.add('clase-display-none');

// Video que reproduce lo que ve la camara en el momento

let videoGif = document.createElement('video');
videoGif.classList.add('clase-display-none');

// Gif previo a subir o recrear

gifprevio = document.createElement('img');
gifprevio.classList.toggle('clase-display-none');





var urlGif = '';

//SECCIION MIS GIFOS
let seccionMisGifos = document.createElement('section');
let tituloMisGifos = document.createElement('h4');
let caritaMisGifos = document.createElement('img');
let cajaMisGifos = document.createElement('div');
let cajaSinContenidoMisGifos = document.createElement('div');
let sinContenidoImgMisGifos = document.createElement('img');
let sinContenidoTextoMisGifos = document.createElement('p');
let contenedorDeBotonMisGifos = document.createElement('div');
let botonVerMisGifos = document.createElement('button');


const cajaMisFavoritos = document.createElement('div'); //con esto hago que mi Gif recien grabado y subido al locasStorage
cajaMisFavoritos.id = 'CajaMisGifos';


main.appendChild(cajaFavoritos);

let bloqueSubiendoGif = document.createElement('div');
bloqueSubiendoGif.classList.add('clase-display-none');

let bloqueSubiendoGifTexto = document.createElement('p');
bloqueSubiendoGifTexto.innerText = 'Estamos subiendo tu GIFO';
bloqueSubiendoGifTexto.classList.add('clase-display-none');

let bloqueSubiendoGifImg = document.createElement('img');
bloqueSubiendoGifImg.setAttribute('src', './img/loader.svg');
bloqueSubiendoGifImg.classList.add('clase-display-none');


let botonDescargarMiGifo = document.createElement('div');
botonDescargarMiGifo.classList.add('clase-display-none');

let botonDescargarMiGifoImg = document.createElement('img');
botonDescargarMiGifoImg.setAttribute('src', './img/icon-download.svg');
//botonDescargarMiGifoImg.classList.add('clase-display-none');

botonDescargarMiGifo.appendChild(botonDescargarMiGifoImg);

let botonCopiarLinkMiGifo = document.createElement('div');
botonCopiarLinkMiGifo.classList.add('clase-display-none');

let botonCopiarLinkMiGifoImg = document.createElement('img');
botonCopiarLinkMiGifoImg.setAttribute('src', './img/icon-link-normal.svg');

botonCopiarLinkMiGifo.appendChild(botonCopiarLinkMiGifoImg);


contenedorCentralCrearGifInnerDos.appendChild(bloqueSubiendoGif);
contenedorCentralCrearGifInnerDos.appendChild(bloqueSubiendoGifImg);
contenedorCentralCrearGifInnerDos.appendChild(bloqueSubiendoGifTexto);

contenedorCentralCrearGifInnerDos.appendChild(botonDescargarMiGifo);
contenedorCentralCrearGifInnerDos.appendChild(botonCopiarLinkMiGifo);


let arrayGifsMisGifosId = [];

var dataId = '';

//MOUSEOVER SOBRE BOTON DESCARGAR Y LINK
botonDescargarMiGifoImg.addEventListener('mouseover', () => {
    if (botonDescargarMiGifoImg.src == server + 'img/icon-download.svg') {
        botonDescargarMiGifoImg.setAttribute('src', './img/icon-download-hover.svg')
    } else {
        botonDescargarMiGifoImg.setAttribute('src', './img/icon-download.svg')
    }
}, false);

botonCopiarLinkMiGifoImg.addEventListener('mouseover', () => {
    if (botonCopiarLinkMiGifoImg.src == server + 'img/icon-link-normal.svg') {
        botonCopiarLinkMiGifoImg.setAttribute('src', './img/icon-link-hover.svg')
    } else {
        botonCopiarLinkMiGifoImg.setAttribute('src', './img/icon-link-normal.svg')
    }
}, false);

//MOUSEOUT SOBRE BOTON DESCAGAR Y LINK

botonDescargarMiGifoImg.addEventListener('mouseout', () => {
    if (botonDescargarMiGifoImg.src == server + 'img/icon-download-hover.svg') {
        botonDescargarMiGifoImg.setAttribute('src', './img/icon-download.svg')
    } else {
        botonDescargarMiGifoImg.setAttribute('src', './img/icon-download-hover.svg')
    }
}, false);

botonCopiarLinkMiGifoImg.addEventListener('mouseout', () => {
    if (botonCopiarLinkMiGifoImg.src == server + 'img/icon-link-hover.svg') {
        botonCopiarLinkMiGifoImg.setAttribute('src', './img/icon-link-normal.svg')
    } else {
        botonCopiarLinkMiGifoImg.setAttribute('src', './img/icon-link-hover.svg')
    }
}, false);


let gifCreado = sessionStorage.getItem('keykey');



let claseDisplayNone = 'clase-display-none';


//FUNCION PARA DESPLEGAR Y ESCONDER SECCIONES
function showHide(show, clase, hideOne, hideTwo, hideThree, hideFour) {
    try {
        show.setAttribute('class', clase);
        if (hideOne.classList.value != claseDisplayNone) {
            hideOne.setAttribute('class', claseDisplayNone)
        }
        if (hideTwo.classList.value != claseDisplayNone) {
            hideTwo.setAttribute('class', claseDisplayNone)
        }
        if (hideThree.classList.value != claseDisplayNone) {
            hideThree.setAttribute('class', claseDisplayNone)
        }
        if (hideFour.classList.value != claseDisplayNone) {
            hideFour.setAttribute('class', claseDisplayNone)
        }
    } catch (e) {
        console.log()
    };
}

//FUNCION PARA DESPLEGAR Y ESCONDER SECCION TWO(CARROUSEL)
function showTrending(show, clase) {
    show.setAttribute('class', clase);
}

//Funcion eliminar hijos
function eliminarHijos(padre) {
    while (padre.firstChild) {
        padre.removeChild(padre.firstChild);
    }
}

function hijosMax(cruz, gif, contenedorBajo) {
    seccionMax.appendChild(cruz);
    seccionMax.appendChild(gif);
    seccionMax.appendChild(contenedorBajo);
}

function botonesFavDownloadExpand(fav, donwload, expand) {
    if (fav.classList.value !== 'btnFavOut') {
        fav.classList.toggle('btnFavOut'); //por defecto display:none.   
    }
    if (donwload.classList.value !== 'btnFavOut') {
        donwload.classList.toggle('btnFavOut'); //por defecto display:none.   
    }
    if (expand.classList.value !== 'btnFavOut') {
        expand.classList.toggle('btnFavOut'); //por defecto display:none.   
    }
}

function botonesFavDownloadParaMax(fav, down) {
    if (fav.classList.value == 'btn-gif-card-trending-max') {
        fav.classList.toggle('btn-gif-card-trending-max');
    }
    if (down.classList.value == 'btn-gif-card-trending-max') {
        down.classList.toggle('btn-gif-card-trending-max');
    }
}

//////////////////////////////////////////////// FUNCION CARDS

function cards(gif, padre, claseDeHover, claseDeBotones) {
    //cards
    let bloqueParaCadaImagen = document.createElement('div'); //En este div sucederan los eventos mouseover
    let bloqueParaCadaImagenInferior = document.createElement('div'); // En este se imprimiran los gifs

    bloqueParaCadaImagen.id = 'bloque-para-cada-imagen';
    bloqueParaCadaImagenInferior.id = 'bloque-inferior';


    bloqueParaCadaImagen.setAttribute('class', claseDeHover);
    bloqueParaCadaImagenInferior.setAttribute('class', claseDeHover);
    gif.setAttribute('class', claseDeHover);

    padre.appendChild(bloqueParaCadaImagen);
    bloqueParaCadaImagen.appendChild(bloqueParaCadaImagenInferior);
    bloqueParaCadaImagenInferior.appendChild(gif);

    //Variables y eventos mouseover
    let btnFav = document.createElement('div'); //Boton Favoritos.
    btnFav.classList.toggle('btnFavOut'); //por defecto display:none.
    let heartFav = document.createElement('img'); //imagen Corazon.
    heartFav.setAttribute('src', './img/icon-fav.svg');

    //heartFav.id = claseDeBotones;
    //heartFav.classList.add(claseDeBotones)


    let btnDownload = document.createElement('div'); //Boton Descargar.
    btnDownload.classList.toggle('btnFavOut'); //por defecto display:none.
    let downloadImg = document.createElement('img'); //imagen Descargar.
    downloadImg.setAttribute('src', './img/icon-download.svg');
    //downloadImg.id = claseDeBotones;
    //downloadImg.classList.add(claseDeBotones)
    //descargar imagenes
    downloadImg.addEventListener('click', () => {
        return algo(gif)
    }, false);

    let btnExpand = document.createElement('div'); // Boton Expandir.
    btnExpand.classList.toggle('btnFavOut'); //por defecto display:none.
    let expandImg = document.createElement('img'); //imagen Expandir
    expandImg.setAttribute('src', './img/icon-max-normal.svg');
    //expandImg.id = claseDeBotones;
    //expandImg.classList.add(claseDeBotones)

    bloqueParaCadaImagen.appendChild(btnFav); //Insercion del boton en el bloque FAV
    btnFav.appendChild(heartFav); //Insercion de la imagen en el boton

    bloqueParaCadaImagen.appendChild(btnDownload); //Insercion del boton en el bloque DOWNLOAD
    btnDownload.appendChild(downloadImg) //link de descarga


    bloqueParaCadaImagen.appendChild(btnExpand); //Insercion del boton en el bloque EXPAND
    btnExpand.appendChild(expandImg); //Insercion de la imagen en el boton

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
        if (heartFav.src == corazonActiveActive) {
            arrayGifsParaStorage.push(gif.getAttribute('src'));
            //console.log(arrayGifsParaStorage);
        } else {
            arrayGifsParaStorage.pop(gif.getAttribute('src'));
            //console.log(arrayGifsParaStorage);
        }
        var arrayGifsParaStorage2 = JSON.stringify(arrayGifsParaStorage);
        sessionStorage.setItem('arrayGifs', arrayGifsParaStorage2);

    }

    //Eventos mouseover sobre el GIF
    bloqueParaCadaImagen.addEventListener('mouseover', () => {
        bloqueParaCadaImagen.classList.toggle('bloque-para-cada-imagen-hover-background');
        bloqueParaCadaImagenInferior.classList.toggle('opacity-cero-dot-six');

        if (btnFav.classList.value == 'btnFavOut') {
            btnFav.classList.toggle('btnFavOut'); //por defecto display:none.   
        }
        btnFav.classList.toggle(claseDeBotones);

        //Eventos mouseover/out y click sobre el boton FAV
        heartFav.addEventListener('mouseover', corazonHoverFunction, false);
        heartFav.addEventListener('mouseout', corazonNormalFunction, false);
        heartFav.addEventListener('click', corazonActiveFunction, false);
        heartFav.addEventListener('click', guardarEnSssionStorage, false);

        //Eventos mouseover sobre el boton DOWNLOAD
        if (btnDownload.classList.value == 'btnFavOut') {
            btnDownload.classList.toggle('btnFavOut'); //por defecto display:none.   
        }
        btnDownload.classList.toggle(claseDeBotones);
        btnDownload.addEventListener('mouseover', () => {
            downloadImg.setAttribute('src', './img/icon-download-hover.svg');

        }, false);



        //Eventos mouseover sobre el boton EXPAND
        if (btnExpand.classList.value == 'btnFavOut') {
            btnExpand.classList.toggle('btnFavOut'); //por defecto display:none.   
        }
        btnExpand.classList.toggle(claseDeBotones);
        btnExpand.addEventListener('mouseover', () => {
            expandImg.setAttribute('src', './img/icon-max-hover.svg');
        }, false);


    }, false); //fin del evento mouseover

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
        btnFav.classList.toggle(claseDeBotones);

        if (btnFav.classList.value !== 'btnFavOut') {
            btnFav.classList.toggle('btnFavOut'); //por defecto display:none.   
        }

        btnDownload.classList.toggle(claseDeBotones);

        if (btnDownload.classList.value !== 'btnFavOut') {
            btnDownload.classList.toggle('btnFavOut'); //por defecto display:none.   
        }

        btnExpand.classList.toggle(claseDeBotones);

        if (btnExpand.classList.value !== 'btnFavOut') {
            btnExpand.classList.toggle('btnFavOut'); //por defecto display:none.   
        }
    });
 //////////////////////////////////////////
 function expandir() {
    showHide(seccionMax, 'seccion-max', seccionOne, seccionTwo);

    hijosMax(cruzClose, gif, contenedorBajoMax)
    eliminarHijos(contenedorBajoMax);

    contenedorBajoMax.appendChild(btnFav);
    contenedorBajoMax.appendChild(btnDownload);

    botonesFavDownloadExpand(btnFav, btnDownload, btnExpand)

    btnFav.classList.toggle('btn-gif-card-trending-max');
    btnDownload.classList.toggle('btn-gif-card-trending-max');
}
expandImg.addEventListener('click', expandir, false);

cruzClose.addEventListener('click', () => {
    botonesFavDownloadParaMax(btnFav, btnDownload);
    
    botonesFavDownloadExpand(btnFav, btnDownload, btnExpand)
    
    bloqueParaCadaImagenInferior.appendChild(gif);
    
    bloqueParaCadaImagen.appendChild(btnFav); //Insercion del boton en el bloque FAV
    btnFav.appendChild(heartFav); //Insercion de la imagen en el boton

    bloqueParaCadaImagen.appendChild(btnDownload); //Insercion del boton en el bloque DOWNLOAD
    btnDownload.appendChild(downloadImg) //link de descarga

    bloqueParaCadaImagen.appendChild(btnExpand); //Insercion del boton en el bloque EXPAND
    btnExpand.appendChild(expandImg); //Insercion de la imagen en el boton
}, false);
}