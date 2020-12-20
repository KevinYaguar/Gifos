// ApiKey
const ApiKey = 'api_key=1yVSM9oVX3z5nlo213gmodWDvoRxttsM';

let gifsGuardadosSinRepeticion = [];

//Server
let server = serverGitHub;
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
cajaSinContenido.classList.add('caja-sin-contenido')
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


var urlGif = '';

let claseDisplayNone = 'clase-display-none';






