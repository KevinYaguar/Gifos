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
    
        primerPaso(videoGif);

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

        botonFinalizar.addEventListener('click', ()=>{
            
            detenerGrabacion(recorder)                  
    
        }, false);
    });
};

function primerPaso(videoGif){
    contenedorCentralCrearGifInnerUno.setAttribute('class', 'contenedor-central-crear-gif-Inner');

    contenedorCentralCrearGifInnerDos.setAttribute('class', 'contenedor-central-crear-gif-Inner');

    videoGif.setAttribute('class', 'tamaño-video');

    botonComenzar.setAttribute('class', claseDisplayNone);

    botonGrabar.setAttribute('class', 'boton-comenzar');

    contenedorDeNumero1.classList.toggle('background-color');

    contenedorDeNumero2.classList.toggle('background-color');
}

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

const gifUploaded = urlGif => {
    bloqueSubiendoGifImg.setAttribute('src', './img/check.svg');

    bloqueSubiendoGifTexto.innerText = 'GIFO subido con éxito';

    botonDescargarMiGifo.setAttribute('class', 'boton-descargar-mi-gifo')

    botonCopiarLinkMiGifo.setAttribute('class', 'boton-link-mi-gifo')

    botonCopiarLinkMiGifo.addEventListener('click', ()=>{
        updateClipboard(urlGif)
    })

    botonSubirGifo.setAttribute('class', claseDisplayNone);

    repetirCaptura.setAttribute('class', claseDisplayNone);

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

// Funcion para copiar en portapapeles el link del gif
function updateClipboard(urlGif) {
    navigator.clipboard.writeText(urlGif).then(function () {
        alert('URL copiada en el portapapeles');
    }, function () {
        alert('no se a podido copiar');
    });
}
