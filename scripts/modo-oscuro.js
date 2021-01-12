// Modo Oscuro
modoOscuro.addEventListener('click', () => {
    cuerpoWeb.classList.toggle('oscuro');
    logoBack.classList.toggle('oscuro');
    logoTextBack.classList.toggle('oscuro');
    seccionTwo.classList.toggle('oscuro2');
    tendringGifosTittle.classList.toggle('oscuro2');
    tendringGifosSubtt.classList.toggle('oscuro2');
    inputBusqueda.classList.toggle('oscuro');
    lines[0].classList.toggle('negro');
    lines[1].classList.toggle('negro');
    searcher.classList.toggle('border-blanco');
    for (i = 0; i < spanColorNormal.length; i++) {
        spanColorNormal[i].classList.toggle('blanco');
    }
    buttonCrearGifCambiarImagen();
    flechaIzquierdaCambiarImagen();
    flechaDerechaCambiarImagen();
    modoDiurnoText();
}, false);

function buttonCrearGifCambiarImagen() {
    if (masGifosImg.getAttribute('src') == masGifosImgSRC) {
        masGifosImg.setAttribute('src', masGifosImgModoNocturno);
    } else
        switch (seccionCrearGif.classList.value) {
            case 'seccion-crear-gif':
                masGifosImg.setAttribute('src', masGifosImgActive);
                break;
            case 'clase-display-none':
                masGifosImg.setAttribute('src', masGifosImgSRC);
                break;
        }
}

function flechaIzquierdaCambiarImagen() {
    if (flechaIzquierda.getAttribute('src') == flechaIzquierdaSrcNormal) {
        flechaIzquierda.setAttribute('src', flechaIzquierdaSrcNocturno); 
    } else {
        flechaIzquierda.setAttribute('src', flechaIzquierdaSrcNormal);
    }
}

function flechaDerechaCambiarImagen() {
    if (flechaDerecha.getAttribute('src') == flechaDerechaSrcNormal) { 
        flechaDerecha.setAttribute('src', flechaDerechaSrcNocturno);
    } else {
        flechaDerecha.setAttribute('src', flechaDerechaSrcNormal);
    }
}

const modoDiurnoText = () => {
    if(modoOscuro.firstChild.innerText === 'MODO NOCTURNO'){
        modoOscuro.firstChild.innerText = 'MODO DIURNO';
    } else {
        modoOscuro.firstChild.innerText = 'MODO NOCTURNO'
    }
}