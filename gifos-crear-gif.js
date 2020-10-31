let seccionCrearGif = document.createElement('section');
seccionCrearGif.classList.add('clase-display-none');


contenedorCentralCrearGif.classList.add('contenedor-central-crear-gif');



let luzCamara = document.createElement('img');
luzCamara.setAttribute('src', './img/element-luz-camara.svg');
luzCamara.classList.add('luz');

let rollo = document.createElement('img');
rollo.setAttribute('src', './img/pelicula.svg');
rollo.classList.add('rollo');


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

contenedorCentralCrearGifInner.appendChild(crearGifBloqueUp);
crearGifBloqueUp.appendChild(crearGifBloqueUpFrase);

contenedorCentralCrearGifInner.appendChild(crearGifBloqueDown);
crearGifBloqueDown.appendChild(crearGifBloqueDownFrase);





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
contenedorDeNumeros.appendChild(contenedorDeNumero1);
contenedorDeNumeros.appendChild(contenedorDeNumero2);
contenedorDeNumeros.appendChild(contenedorDeNumero3);
lineaSeparatoria.classList.add('linea-separatoria');

contenedorCentralCrearGif.appendChild(cuadradoEzquina1);
cuadradoEzquina1.style.gridArea = '';
contenedorCentralCrearGif.appendChild(cuadradoEzquina2);
cuadradoEzquina2.style.gridArea = '1 / 3';
contenedorCentralCrearGif.appendChild(cuadradoEzquina3);
cuadradoEzquina3.style.gridArea = '3 / 1';
contenedorCentralCrearGif.appendChild(cuadradoEzquina4);
cuadradoEzquina4.style.gridArea = ' 3 / 3';

contenedorCentralCrearGif.appendChild(contenedorCentralCrearGifInner);









//Inserciones
main.appendChild(seccionCrearGif);
seccionCrearGif.appendChild(camara);
seccionCrearGif.appendChild(luzCamara);
seccionCrearGif.appendChild(contenedorCentralCrearGif);

seccionCrearGif.appendChild(rollo);

seccionCrearGif.appendChild(contenedorDeNumeros);
seccionCrearGif.appendChild(lineaSeparatoria);

seccionCrearGif.appendChild(botonComenzar);
seccionCrearGif.appendChild(botonGrabar);
seccionCrearGif.appendChild(botonFinalizar);

masGifosImg.addEventListener('mouseover', () => {
    if (masGifosImg.src !== './img/CTA-crear-gifo-hover.svg') {
        masGifosImg.setAttribute('src', './img/CTA-crear-gifo-hover.svg');
    }
}, false);

masGifosImg.addEventListener('mouseout', () => {

    if (masGifosImg.src == 'http://127.0.0.1:5500/img/CTA-crear-gifo-hover.svg') {
        masGifosImg.setAttribute('src', './img/button-crear-gifo.svg');
    }
    if (masGifosImg.src == 'http://127.0.0.1:5500/img/CTA-crear-gifo-active.svg') {
        masGifosImg.setAttribute('src', './img/CTA-crear-gifo-active.svg')
    }
}, false);

masGifosImg.addEventListener('click', () => {
    if (masGifosImg.src !== './img/CTA-crear-gifo-active') {
        masGifosImg.setAttribute('src', './img/CTA-crear-gifo-active.svg');
    }

    seccionOne.classList.toggle('one');
    seccionOne.classList.toggle('clase-display-none');
    seccionTwo.classList.toggle('two');
    seccionTwo.classList.toggle('clase-display-none');
    seccionCrearGif.classList.toggle('clase-display-none');
    seccionCrearGif.classList.toggle('seccion-crear-gif');

}, false);

/////////////////////////////

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

contenedorCentralCrearGifInnerUno.appendChild(crearGifBloqueUpUno);
crearGifBloqueUpUno.appendChild(crearGifBloqueUpFraseUno);

contenedorCentralCrearGifInnerUno.appendChild(crearGifBloqueDownUno);
crearGifBloqueDownUno.appendChild(crearGifBloqueDownFraseUno);

contenedorCentralCrearGif.appendChild(contenedorCentralCrearGifInnerUno);



//////////////////////

let contenedorCentralCrearGifInnerDos = document.createElement('div');
contenedorCentralCrearGifInnerDos.classList.add('clase-display-none');

contenedorCentralCrearGif.appendChild(contenedorCentralCrearGifInnerDos);

let videoGif = document.createElement('video');
videoGif.classList.add('clase-display-none');
contenedorCentralCrearGifInnerDos.appendChild(videoGif);


// boton grabar







//Crear gifos


botonComenzar.addEventListener('click', () => {
    contenedorCentralCrearGifInner.classList.toggle('contenedor-central-crear-gif-Inner');
    contenedorCentralCrearGifInner.classList.toggle('clase-display-none');
    contenedorCentralCrearGifInnerUno.classList.toggle('clase-display-none');
    contenedorCentralCrearGifInnerUno.classList.toggle('contenedor-central-crear-gif-Inner');
    contenedorDeNumero1.classList.toggle('background-color');

    function activarCamara() {
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        }).then(async function (stream) {

            videoGif.srcObject = stream;
            videoGif.onloadedmetadata = function (e) {
                videoGif.play();
            };
            if (videoGif.srcObject = stream) {
                contenedorCentralCrearGifInnerUno.classList.toggle('clase-display-none');
                contenedorCentralCrearGifInnerUno.classList.toggle('contenedor-central-crear-gif-Inner');
                contenedorCentralCrearGifInnerDos.classList.toggle('clase-display-none');
                contenedorCentralCrearGifInnerDos.classList.toggle('contenedor-central-crear-gif-Inner');
                videoGif.classList.toggle('clase-display-none');
                videoGif.classList.toggle('tamaño-video');

                botonComenzar.classList.toggle('boton-comenzar');
                botonComenzar.classList.toggle('clase-display-none');
                botonGrabar.classList.toggle('clase-display-none');
                botonGrabar.classList.toggle('boton-comenzar');
                contenedorDeNumero1.classList.toggle('background-color');
                contenedorDeNumero2.classList.toggle('background-color');
            }
        });
    }
    activarCamara();
}, false);


botonGrabar.addEventListener('click', () => {
    getStreamAndRecord();
    botonGrabar.classList.toggle('clase-display-none');
    botonGrabar.classList.toggle('boton-comenzar');
    botonFinalizar.classList.toggle('clase-display-none');
    botonFinalizar.classList.toggle('boton-comenzar');

}, false);


function getStreamAndRecord() {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    }).then(async function (stream) {

        videoGif.srcObject = stream;
        videoGif.onloadedmetadata = function (e) {
            videoGif.play();
        };
        let recorder = RecordRTC(stream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 400,
            hidden: 240,
            onGifRecordingStarted: function () {
                console.log('started')
            },
        });
        recorder.startRecording();

        botonFinalizar.addEventListener('click', detenerGrabacion, false);

        function detenerGrabacion() {
            recorder.stopRecording(function () {
                gifprevio = document.createElement('img');
                gifprevio.src = URL.createObjectURL(recorder.getBlob());
                videoGif.style.display = 'none';
                contenedorCentralCrearGifInnerDos.appendChild(gifprevio);
            });
        }
    });
};

var cronometroTimer;

function detenerse() {
    clearInterval(cronometro);
}

function carga() {
    contador_s = 0;
    contador_m = 0;
    s = document.getElementById("segundos");
    m = document.getElementById("minutos");
    cronometro = setInterval(
        function () {
            if (contador_s == 60) {
                contador_s = 0;
                contador_m++;
                m.innerHTML = contador_m;
                if (contador_m == 60) {
                    contador_m = 0;
                }
            }
            s.innerHTML = contador_s;
            contador_s++;
        }, 1000);
}
botonGrabar.addEventListener('click', carga, false);
botonFinalizar.addEventListener('click', detenerse, false);