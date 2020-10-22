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

function buttonCrearGifCambiarImagen(){
    if(masGifosImg.src == 'http://127.0.0.1:5500/img/button-crear-gifo.svg'){
        masGifosImg.setAttribute('src', './img/CTA-crar-gifo-modo-noc.svg');
    } else {
        masGifosImg.setAttribute('src', 'http://127.0.0.1:5500/img/button-crear-gifo.svg')
    }
}

function flechaIzquierdaCambiarImagen(){
    if(flechaIzquierda.src == 'https://kevinyaguar.github.io/img/button-slider-left.svg'){
        flechaIzquierda.setAttribute('src', flechaIzquierdaSrcNocturno);
    } else {
        flechaIzquierda.setAttribute('src', flechaIzquierdaSrcNormal);
    }
}

function flechaDerechaCambiarImagen(){
    if(flechaDerecha.src == 'https://kevinyaguar.github.io/img/Button-Slider-right.svg'){
        flechaDerecha.setAttribute('src', flechaDerechaSrcNocturno);
    } else{
        flechaDerecha.setAttribute('src', flechaDerechaSrcNormal);
    }
}