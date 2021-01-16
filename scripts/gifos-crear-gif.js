masGifosImg.addEventListener('mouseover', () => {

        switch (masGifosImg.getAttribute('src')) {
            case masGifosImgSRC:
                masGifosImg.setAttribute('src', masGifosImgHover);
                break;
            case masGifosImgModoNocturno:
                masGifosImg.setAttribute('src', masGifosImgHover);
            case masGifosImgActive:
                masGifosImg.setAttribute('src', masGifosImgHover);
                break;
        }

}, false);

masGifosImg.addEventListener('mouseout', () => {
    if(modoOscuro.firstChild.innerText == 'MODO DIURNO'){
        switch (seccionCrearGif.classList.value) {
            case 'seccion-crear-gif':
                masGifosImg.setAttribute('src', masGifosImgActive);
                break;
            case claseDisplayNone:
                masGifosImg.setAttribute('src', masGifosImgModoNocturno);
                break;
        }
    } else{
        switch (seccionCrearGif.classList.value) {
            case 'seccion-crear-gif':
                masGifosImg.setAttribute('src', masGifosImgActive);
                break;
            case claseDisplayNone:
                masGifosImg.setAttribute('src', masGifosImgSRC);
                break;
        }
    }
}, false);

masGifosImg.addEventListener('click', () => {
    if (masGifosImg.src !== masGifosImgActive) {
        masGifosImg.setAttribute('src', masGifosImgActive);
    }

    showHide(seccionCrearGif, 'seccion-crear-gif', seccionOne, seccionTwo, seccionMisGifos, seccionFavoritos);
    showHide(contenedorCentralCrearGifInner, 'contenedor-central-crear-gif-Inner', contenedorCentralCrearGifInnerUno, contenedorCentralCrearGifInnerDos);
    showHide(botonComenzar, 'boton-comenzar', botonFinalizar, botonGrabar, botonSubirGifo);


    if (favoritos.classList.value == 'favoritos-activado') {
        favoritos.classList.toggle('favoritos-activado');
    }
    if (misGifos.classList.value == 'favoritos-activado') {
        misGifos.classList.toggle('favoritos-activado');
    }


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

            contenedorCentralCrearGifInnerUno.setAttribute('class', 'contenedor-central-crear-gif-Inner');

            contenedorCentralCrearGifInnerDos.setAttribute('class', 'contenedor-central-crear-gif-Inner');

            videoGif.setAttribute('class', 'tamaño-video');

            botonComenzar.setAttribute('class', claseDisplayNone);

            botonGrabar.setAttribute('class', 'boton-comenzar');

            contenedorDeNumero1.classList.toggle('background-color');

            contenedorDeNumero2.classList.toggle('background-color');
        }
    });
}

botonComenzar.addEventListener('click', () => {
    //contenedorCentralCrearGifInner.classList.toggle('contenedor-central-crear-gif-Inner');
    contenedorCentralCrearGifInner.setAttribute('class', claseDisplayNone);
    
    //contenedorCentralCrearGifInnerUno.classList.toggle(claseDisplayNone);
    contenedorCentralCrearGifInnerUno.setAttribute('class', 'contenedor-central-crear-gif-Inner');

    contenedorDeNumero1.setAttribute('class', 'contenedores-de-numeros background-color');
    contenedorDeNumero2.setAttribute('class', 'contenedores-de-numeros');
    contenedorDeNumero3.setAttribute('class', 'contenedores-de-numeros');

    activarCamara();

    gifprevio.setAttribute('class', claseDisplayNone);
    gifprevio.setAttribute('src', '');

    bloqueSubiendoGif.setAttribute('class', claseDisplayNone);

    bloqueSubiendoGifImg.setAttribute('class', claseDisplayNone);
    bloqueSubiendoGifImg.setAttribute('src', './img/loader.svg');

    bloqueSubiendoGifTexto.innerText = 'Estamos subiendo tu GIFO';
    bloqueSubiendoGifTexto.setAttribute('class', claseDisplayNone);

    botonDescargarMiGifo.setAttribute('class', claseDisplayNone);
    botonCopiarLinkMiGifo.setAttribute('class', claseDisplayNone);


}, false);


botonGrabar.addEventListener('click', () => {

    getStreamAndRecord();

    botonGrabar.setAttribute('class', claseDisplayNone);
    
    botonFinalizar.setAttribute('class', 'boton-comenzar');

    repetirCaptura.setAttribute('class', claseDisplayNone);

    cronometro.setAttribute('class', 'contenedor-cronometro');
    carga();
}, false);


// Funcion para copiar en portapapeles el link del gif
function updateClipboard(urlGif) {
    navigator.clipboard.writeText(urlGif).then(function () {
        alert('URL copiada en el portapapeles');
    }, function () {
        alert('no se a podido copiar');
    });
}


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
            width: 480,
            height: 320,
            hidden: 240,
            onGifRecordingStarted: function () {
                console.log('started')
            },
        });
        recorder.startRecording();

        recorder.stream = stream;

        //console.log(recorder);

        botonFinalizar.addEventListener('click', ()=>{
            
            console.log(recorder);
            detenerGrabacion(recorder)                  
       
        }, false);

        
    });
};

function detenerGrabacion(recorder) {
   
    recorder.stopRecording(function () {
        recorder.stream.stop();
        gifprevio.src = URL.createObjectURL(recorder.getBlob());
        
        botonSubirGifo.addEventListener('click', () => {
            bloqueSubiendoGif.setAttribute('class', 'subiendo-gif');
            bloqueSubiendoGifTexto.setAttribute('class', 'subiendo-gif-texto');
            bloqueSubiendoGifImg.setAttribute('class', 'subiendo-gif-img');
            
            subirGif(recorder);
            
        }, false);
        
    });
}

const gifUploaded = () => {
    bloqueSubiendoGifImg.setAttribute('src', './img/check.svg');

    bloqueSubiendoGifTexto.innerText = 'GIFO subido con éxito';

    botonDescargarMiGifo.setAttribute('class', 'boton-descargar-mi-gifo')

    botonCopiarLinkMiGifo.setAttribute('class', 'boton-link-mi-gifo')

    botonSubirGifo.setAttribute('class', claseDisplayNone);

    repetirCaptura.setAttribute('class', claseDisplayNone);

    contenedorDeNumero2.classList.toggle('background-color');

    contenedorDeNumero3.classList.toggle('background-color');
}

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

    cronometro.classList.toggle(claseDisplayNone);

    repetirCaptura.setAttribute('class', '');

    contenedorDeNumeros.setAttribute('class', 'contenedor-de-numeros-general-repetir');

    botonFinalizar.setAttribute('class', claseDisplayNone);

    botonSubirGifo.setAttribute('class', 'boton-comenzar');

    videoGif.setAttribute('class', claseDisplayNone);

    gifprevio.classList.toggle(claseDisplayNone);


}, false);


//La funcion vuelve a mostrar el video online. El Gif se reescribe  en el evento Finalizar
repetirCaptura.addEventListener('click', () => {
    
    videoGif.setAttribute('class', 'tamaño-video');

    gifprevio.classList.toggle(claseDisplayNone);

    
    botonSubirGifo.setAttribute('class', claseDisplayNone);
    
    botonGrabar.setAttribute('class', 'boton-comenzar');

    repetirCaptura.classList.toggle(claseDisplayNone);

    cronometro.classList.toggle(claseDisplayNone);

    contenedorDeNumeros.setAttribute('class', 'contenedor-de-numeros-general');
    
    activarCamara();
}, false);