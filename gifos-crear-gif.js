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


masGifosImg.addEventListener('mouseover', () => {
    switch(masGifosImg.src){
        case masGifosImgSRCServer:
            masGifosImg.setAttribute('src', masGifosImgHover);
            break;
        case masGifosImgActiveServer:
            masGifosImg.setAttribute('src', masGifosImgHover);
            break;
    }
}, false);

masGifosImg.addEventListener('mouseout', () => {
    switch(seccionCrearGif.classList.value){
        case 'seccion-crear-gif':
            masGifosImg.setAttribute('src', masGifosImgActiveServer);
            break;
        case 'clase-display-none':
            masGifosImg.setAttribute('src', masGifosImgSRC);
            break;
    }
}, false);

masGifosImg.addEventListener('click', () => {
    if (masGifosImg.src !== masGifosImgActive) {
        masGifosImg.setAttribute('src', masGifosImgActive);
    }

    seccionOne.classList.toggle('one');
    seccionOne.classList.toggle('clase-display-none');
    seccionTwo.classList.toggle('two');
    seccionTwo.classList.toggle('clase-display-none');
    seccionCrearGif.classList.toggle('clase-display-none');
    seccionCrearGif.classList.toggle('seccion-crear-gif');

}, false);



//Crear gifos

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
botonComenzar.addEventListener('click', () => {
    contenedorCentralCrearGifInner.classList.toggle('contenedor-central-crear-gif-Inner');
    contenedorCentralCrearGifInner.classList.toggle('clase-display-none');
    contenedorCentralCrearGifInnerUno.classList.toggle('clase-display-none');
    contenedorCentralCrearGifInnerUno.classList.toggle('contenedor-central-crear-gif-Inner');
    contenedorDeNumero1.classList.toggle('background-color');
    activarCamara();
}, false);


botonGrabar.addEventListener('click', () => {
    getStreamAndRecord();
    botonGrabar.classList.toggle('clase-display-none');
    botonGrabar.classList.toggle('boton-comenzar');
    botonFinalizar.classList.toggle('clase-display-none');
    botonFinalizar.classList.toggle('boton-comenzar');
    carga();
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

                gifprevio.src = URL.createObjectURL(recorder.getBlob());

            });
        }
    });
};

//Funcion Cronometro
var cronometroTimer;
function detenerse() {
    clearInterval(cronometroTimer);
}

function carga() {
    contador_s = 0;
    contador_m = 0;
    s = document.getElementById("segundos");
    m = document.getElementById("minutos");
    cronometroTimer = setInterval(
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



botonFinalizar.addEventListener('click', () => {
    detenerse();
    cronometro.classList.toggle('clase-display-none');
    repetirCaptura.classList.toggle('clase-display-none');
    contenedorDeNumeros.classList.toggle('contenedor-de-numeros-general');
    contenedorDeNumeros.classList.toggle('contenedor-de-numeros-general-repetir');
    botonFinalizar.classList.toggle('boton-comenzar');
    botonFinalizar.classList.toggle('clase-display-none');
    botonSubirGifo.classList.toggle('boton-comenzar');
    botonSubirGifo.classList.toggle('clase-display-none');

    videoGif.classList.toggle('clase-display-none');
    videoGif.classList.toggle('tamaño-video');
    gifprevio.classList.toggle('clase-display-none');

}, false);


//La funcion vuelve a mostrar el video online. El Gif se reescribe  en el evento Finalizar
repetirCaptura.addEventListener('click', () => {
    videoGif.classList.toggle('clase-display-none');
    videoGif.classList.toggle('tamaño-video');
    gifprevio.classList.toggle('clase-display-none');

    botonSubirGifo.classList.toggle('boton-comenzar');
    botonSubirGifo.classList.toggle('clase-display-none');

    botonGrabar.classList.toggle('clase-display-none');
    botonGrabar.classList.toggle('boton-comenzar');

    repetirCaptura.classList.toggle('clase-display-none');
    cronometro.classList.toggle('clase-display-none');

    contenedorDeNumeros.classList.toggle('contenedor-de-numeros-general');
    contenedorDeNumeros.classList.toggle('contenedor-de-numeros-general-repetir');
}, false);
