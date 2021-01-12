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

let gifCreado = sessionStorage.getItem('keykey');