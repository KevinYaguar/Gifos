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
            case 'clase-display-none':
                masGifosImg.setAttribute('src', masGifosImgModoNocturno);
                break;
        }
    } else{
        switch (seccionCrearGif.classList.value) {
            case 'seccion-crear-gif':
                masGifosImg.setAttribute('src', masGifosImgActive);
                break;
            case 'clase-display-none':
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

//DESCARGAR GIF
async function descargarMiGifo(gifprevio) {

    let a = document.createElement('a');
    let response = await fetch(gifprevio.src);
    let file = await response.blob();
    a.download = 'MiNuevoGif.gif';
    a.href = window.URL.createObjectURL(file);
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
    a.click();

};

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
    //dataId = '';

    bloqueSubiendoGif.setAttribute('class', claseDisplayNone);
    bloqueSubiendoGifTexto.setAttribute('class', claseDisplayNone);
    bloqueSubiendoGifImg.setAttribute('class', claseDisplayNone);



}, false);


botonGrabar.addEventListener('click', () => {
    getStreamAndRecord();
    botonGrabar.classList.toggle('clase-display-none');
    botonGrabar.classList.toggle('boton-comenzar');
    botonFinalizar.classList.toggle('clase-display-none');
    botonFinalizar.classList.toggle('boton-comenzar');
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

        botonFinalizar.addEventListener('click', detenerGrabacion, false);

        function detenerGrabacion() {

            recorder.stopRecording(function () {
                recorder.stream.stop();
                gifprevio.src = URL.createObjectURL(recorder.getBlob());


                
                botonSubirGifo.addEventListener('click', () => {
                    bloqueSubiendoGif.setAttribute('class', 'subiendo-gif');
                    bloqueSubiendoGifTexto.setAttribute('class', 'subiendo-gif-texto');
                    bloqueSubiendoGifImg.setAttribute('class', 'subiendo-gif-img');

                    subirGif(recorder);

                    bloqueSubiendoGifImg.setAttribute('src', './img/check.svg');
                    bloqueSubiendoGifTexto.innerText = 'GIFO subido con éxito';

                    botonDescargarMiGifo.setAttribute('class', 'boton-descargar-mi-gifo')
                    botonCopiarLinkMiGifo.setAttribute('class', 'boton-link-mi-gifo')

                    botonSubirGifo.setAttribute('class', claseDisplayNone);
                    repetirCaptura.setAttribute('class', claseDisplayNone);
                    contenedorDeNumero2.classList.toggle('background-color');
                    contenedorDeNumero3.classList.toggle('background-color');
                }, false);
                
            });
        }
    });
};

function subirGif(recorder) {
    
    let form = new FormData();
    form.set('file', recorder.getBlob(), 'myGif.gif');
    try{
        fetch(`https://upload.giphy.com/v1/gifs?${ApiKey}`, {
            method: "POST",
            body: form
        })
        .then(response => {
            return response.json();
        }).then(data => {

            dataId = data.data.id;
            console.log(dataId)
            
            setGifToStorge(dataId)

        });
    } catch(error){}
}

function setGifToStorge(dataId){
    fetch("https://api.giphy.com/v1/gifs/" + dataId + "?&" + ApiKey)
    .then(response => {
        return response.json();
    }).then(obj => {
        console.log(obj);
        urlGif = obj.data.images.original.url;
        user = obj.data.user.username;
        console.log(urlGif);
        let arrayPrevioMisGifos = JSON.parse(sessionStorage['MisGifos']);

        let arrayInfoGif = [];
        arrayInfoGif.push(urlGif);
        arrayInfoGif.push(user);
        arrayPrevioMisGifos.push(arrayInfoGif);

        let nuevoArrayMisGifos = JSON.stringify(arrayPrevioMisGifos);
        
        sessionStorage.setItem('MisGifos', nuevoArrayMisGifos);

    });
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
    cronometro.classList.toggle('clase-display-none');
    repetirCaptura.setAttribute('class', '');
    contenedorDeNumeros.classList.toggle('contenedor-de-numeros-general');
    contenedorDeNumeros.classList.toggle('contenedor-de-numeros-general-repetir');
    botonFinalizar.classList.toggle('boton-comenzar');
    botonFinalizar.classList.toggle('clase-display-none');
    botonSubirGifo.classList.toggle('boton-comenzar');
    botonSubirGifo.classList.toggle('clase-display-none');

    videoGif.classList.toggle('clase-display-none');
    videoGif.classList.toggle('tamaño-video');
    gifprevio.classList.toggle('clase-display-none');

    //
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
    activarCamara();
}, false);