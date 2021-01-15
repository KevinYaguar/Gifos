//En principio la seccion esta display none
seccionMisGifos.classList.add('clase-display-none');
seccionMisGifos.id = 'seccion-Mis-Gifos';

//Carita
caritaMisGifos.setAttribute('src', './img/icon-mis-gifos.svg');

//titulo
tituloMisGifos.innerHTML = 'Mis GIFOS';
tituloMisGifos.classList.add('titulo-favoritos');

//Sin Contenido
cajaSinContenidoMisGifos.classList.add('caja-sin-contenido');

sinContenidoImgMisGifos.setAttribute('src', './img/icon-mis-gifos-sin-contenido.svg');

sinContenidoTextoMisGifos.innerHTML = '¡Anímate a crear tu primer GIFO!';
sinContenidoTextoMisGifos.classList.add('texto-sin-contenido');
sinContenidoTextoMisGifos.style.paddingTop = '23.7px';

//Inserciones


cajaSinContenidoMisGifos.appendChild(sinContenidoImgMisGifos);
cajaSinContenidoMisGifos.appendChild(sinContenidoTextoMisGifos);

seccionMisGifos.appendChild(caritaMisGifos);
seccionMisGifos.appendChild(tituloMisGifos);
seccionMisGifos.appendChild(cajaMisGifos);

seccionMisGifos.appendChild(cajaSinContenidoMisGifos);

main.appendChild(seccionMisGifos);



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