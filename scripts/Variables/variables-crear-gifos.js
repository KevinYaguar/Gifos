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

//Inserciones
main.appendChild(seccionCrearGif);
seccionCrearGif.appendChild(camara);
seccionCrearGif.appendChild(luzCamara);
seccionCrearGif.appendChild(rollo);

seccionCrearGif.appendChild(contenedorCentralCrearGif);

seccionCrearGif.appendChild(contenedorDeNumeros);
seccionCrearGif.appendChild(lineaSeparatoria);

seccionCrearGif.appendChild(botonComenzar);
seccionCrearGif.appendChild(botonGrabar);
seccionCrearGif.appendChild(botonFinalizar);
seccionCrearGif.appendChild(botonSubirGifo);


//Cronometro
cronometro.appendChild(minutos);
cronometro.appendChild(separador);
cronometro.appendChild(segundos);
contenedorDeCronometro.appendChild(cronometro);

//Contenedor Central Gif
contenedorCentralCrearGif.appendChild(cuadradoEzquina1);
contenedorCentralCrearGif.appendChild(cuadradoEzquina2);
contenedorCentralCrearGif.appendChild(cuadradoEzquina3);
contenedorCentralCrearGif.appendChild(cuadradoEzquina4);

contenedorCentralCrearGif.appendChild(contenedorCentralCrearGifInner);
contenedorCentralCrearGif.appendChild(contenedorCentralCrearGifInnerUno);

//Contenedor Central Inner
contenedorCentralCrearGifInner.appendChild(crearGifBloqueUp);
contenedorCentralCrearGifInner.appendChild(crearGifBloqueDown);
crearGifBloqueUp.appendChild(crearGifBloqueUpFrase);
crearGifBloqueDown.appendChild(crearGifBloqueDownFrase);

//Contenedor central inner UNO
contenedorCentralCrearGifInnerUno.appendChild(crearGifBloqueUpUno);
contenedorCentralCrearGifInnerUno.appendChild(crearGifBloqueDownUno);
crearGifBloqueUpUno.appendChild(crearGifBloqueUpFraseUno);
crearGifBloqueDownUno.appendChild(crearGifBloqueDownFraseUno);

// Contenedor central inner DOS
contenedorCentralCrearGif.appendChild(contenedorCentralCrearGifInnerDos);

contenedorCentralCrearGifInnerDos.appendChild(videoGif); //Video online.

contenedorCentralCrearGifInnerDos.appendChild(gifprevio); //Video Gif vista previa o final.

//Contenedor de numeros
contenedorDeNumeros.appendChild(contenedorDeNumero1);
contenedorDeNumeros.appendChild(contenedorDeNumero2);
contenedorDeNumeros.appendChild(contenedorDeNumero3);
contenedorDeNumeros.appendChild(contenedorDeCronometro);