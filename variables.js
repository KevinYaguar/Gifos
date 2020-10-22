// ApiKey
const ApiKey = 'api_key=1yVSM9oVX3z5nlo213gmodWDvoRxttsM';

// Body y local storage

let cuerpoWeb = document.getElementById('body'); //Body Completo.
let lines = document.getElementsByClassName('line'); //lineas.
let spanColorNormal = document.getElementsByClassName('letra-color-normal'); //Palabras para cambiar a blanco
let arrayGifsParaStorage = []; //Array donde se acumularas los gifs guardados en favoritos

// Header____________________________________________________________

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

// Main

let main = document.querySelector('main');

// Seccion One_________________________________________________________
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
var corazonActiveActive = 'http://127.0.0.1:5500/img/icon-fav-active.svg';

let botonVerMas = document.createElement('button');

// Seccion Two________________________________________________________

let seccionTwo = document.getElementById('seccionTwo'); //Seccion dos del main
let tendringGifosTittle = document.getElementById('tendring-gifos-tittle'); // Titulo de la seccion dos (Trending)
let tendringGifosSubtt = document.getElementById('tendring-gifos-subtt'); //Subtitulo de la seccion dos (Trending)

//Carrousel

let flechaIzquierda = document.getElementById('izquierda');
let flechaDerecha = document.getElementById('derecha');
let flechaIzquierdaSrcNormal = './img/button-slider-left.svg';
let flechaDerechaSrcNormal = './img/Button-Slider-right.svg';
flechaIzquierda.setAttribute('src', flechaIzquierdaSrcNormal);
flechaDerecha.setAttribute('src', flechaDerechaSrcNormal);
let flechaIzquierdaSrcHover = './img/button-slider-left-hover.svg';
let flechaDerechaSrcHover = './img/Button-Slider-right-hover.svg';
let flechaIzquierdaSrcNocturno = './img/button-slider-left-md-noct.svg';
let flechaDerechaSrcNocturno = './img/button-slider-right-md-noct.svg';
// Seccion Favoritos________________________________________________

let seccionFavoritos = document.createElement('section');
let tituloFavoritos = document.createElement('h4');
let corazonFavoritos = document.createElement('img');
let cajaFavoritos = document.createElement('div');
let cajaSinContenido = document.createElement('div');
let sinContendioImg = document.createElement('img');
let sinContendioTexto = document.createElement('p');
let contenedorDeBotonVerMas = document.createElement('div');
let botonVerMasFavoritos = document.createElement('button');

// Footer