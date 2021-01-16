misGifos.addEventListener('click', () => {

    showHide(seccionMisGifos, 'seccion-favoritos', seccionOne, seccionFavoritos, seccionCrearGif);

    seccionTwo.setAttribute('class', 'two')
    
    showHide(contenedorCentralCrearGifInner, 'contenedor-central-crear-gif-Inner', contenedorCentralCrearGifInnerUno, contenedorCentralCrearGifInnerDos);

    misGifos.classList.toggle('favoritos-activado');
    
    if (favoritos.classList.value == 'favoritos-activado') {
        favoritos.classList.toggle('favoritos-activado');
    }
    
    if (masGifosImg.getAttribute('src') === masGifosImgActive) {
        masGifosImg.setAttribute('src', masGifosImgSRC);
    }

    let misGifosEnStorage = JSON.parse(sessionStorage['MisGifos'])


    printStorageGifsOnBox(0, misGifosEnStorage, cajaMisGifos, cajaSinContenidoMisGifos, trash);


}, false);

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
    if (modoOscuro.firstChild.innerText == 'MODO DIURNO') {
        switch (seccionCrearGif.classList.value) {
            case 'seccion-crear-gif':
                masGifosImg.setAttribute('src', masGifosImgActive);
                break;
            case claseDisplayNone:
                masGifosImg.setAttribute('src', masGifosImgModoNocturno);
                break;
        }
    } else {
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

    contenedorDeNumero1.setAttribute('class', 'contenedores-de-numeros background-color');
    contenedorDeNumero3.classList.remove('background-color');
    repetirCaptura.setAttribute('class', claseDisplayNone);

    if (favoritos.classList.value == 'favoritos-activado') {
        favoritos.classList.toggle('favoritos-activado');
    }
    if (misGifos.classList.value == 'favoritos-activado') {
        misGifos.classList.toggle('favoritos-activado');
    }


}, false);


botonComenzar.addEventListener('click', () => {

    contenedorCentralCrearGifInner.setAttribute('class', claseDisplayNone);

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


botonFinalizar.addEventListener('click', () => {

    detenerse();

    contenedorDeNumero2.classList.remove('background-color');

    contenedorDeNumero3.setAttribute('class', 'contenedores-de-numeros background-color');

    cronometro.setAttribute('class', claseDisplayNone);

    repetirCaptura.classList.remove(claseDisplayNone)

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