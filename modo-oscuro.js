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
}, false);

function buttonCrearGifCambiarImagen() {
    if (masGifosImg.src == masGifosImgSRCServer || masGifosImg.src == masGifosImgActiveServer) {
        masGifosImg.setAttribute('src', masGifosImgModoNocturno);
    } else
        switch (seccionCrearGif.classList.value) {
            case 'seccion-crear-gif':
                masGifosImg.setAttribute('src', masGifosImgActiveServer);
                break;
            case 'clase-display-none':
                masGifosImg.setAttribute('src', masGifosImgSRCServer);
                break;
        }
}

function flechaIzquierdaCambiarImagen() {
    if (flechaIzquierda.src == flechaIzquierdaServer) {
        flechaIzquierda.setAttribute('src', flechaIzquierdaSrcNocturno); //https://kevinyaguar.github.io
    } else {
        flechaIzquierda.setAttribute('src', flechaIzquierdaSrcNormal);
    }
}

function flechaDerechaCambiarImagen() {
    if (flechaDerecha.src == flechaDerechaServer) { //https://kevinyaguar.github.io
        flechaDerecha.setAttribute('src', flechaDerechaSrcNocturno);
    } else {
        flechaDerecha.setAttribute('src', flechaDerechaSrcNormal);
    }
}