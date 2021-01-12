//FUNCION PARA DESPLEGAR Y ESCONDER SECCIONES
function showHide(show, clase, hideOne, hideTwo, hideThree, hideFour) {
    try {
        show.setAttribute('class', clase);
        
            hideOne.setAttribute('class', claseDisplayNone)
        
        
            hideTwo.setAttribute('class', claseDisplayNone)
        
        
            hideThree.setAttribute('class', claseDisplayNone)
        
        
            hideFour.setAttribute('class', claseDisplayNone)
        
    } catch (e) {
        console.log()
    };
}

//FUNCION PARA DESPLEGAR Y ESCONDER SECCION TWO(CARROUSEL)
function showTrending(show, clase) {
    show.setAttribute('class', clase);
}

//Evento show hide con gifos
gifos.addEventListener('mouseover', ()=>{
    gifos.classList.toggle('pointer');
}, false);
gifos.addEventListener('mouseout', ()=>{
    gifos.classList.toggle('pointer');
}, false);

gifos.addEventListener('click', ()=>{

    showHide(seccionOne, 'one', seccionFavoritos, seccionCrearGif, seccionMisGifos)
    showTrending(seccionTwo, 'two');

    showHide(contenedorCentralCrearGifInner, 'contenedor-central-crear-gif-Inner', contenedorCentralCrearGifInnerUno, contenedorCentralCrearGifInnerDos);
    showHide(botonComenzar, 'boton-comenzar', botonFinalizar, botonGrabar, botonSubirGifo);

    if (misGifos.classList.value == 'favoritos-activado') {
        misGifos.classList.toggle('favoritos-activado');
    }
    if (favoritos.classList.value == 'favoritos-activado') {
        favoritos.classList.toggle('favoritos-activado');
    }
    if (masGifosImg.getAttribute('src') == masGifosImgActive) {
        if(modoOscuro.firstChild.innerText == 'MODO NOCTURNO'){
            masGifosImg.setAttribute('src', masGifosImgSRC);
        } else {
            masGifosImg.setAttribute('src', masGifosImgModoNocturno);
        }
    }
}, false);