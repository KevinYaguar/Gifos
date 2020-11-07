//En principio la seccion esta display none
seccionMisGifos.classList.add('clase-display-none');
seccionMisGifos.id = 'seccion-Mis-Gifos';

//Carita
caritaMisGifos.setAttribute('src', './img/icon-mis-gifos.svg');

//titulo
tituloMisGifos.innerHTML = 'Mis GIFOS';
tituloMisGifos.classList.add('titulo-favoritos');

//Sin Contenido
cajaSinContenidoMisGifos.classList.add('Caja-Sin-Contenido');

sinContenidoImgMisGifos.setAttribute('src', './img/icon-mis-gifos-sin-contenido.svg');

sinContenidoTextoMisGifos.innerHTML = '¡Anímate a crear tu primer GIFO!';
sinContenidoTextoMisGifos.classList.add('texto-sin-contenido');
sinContenidoTextoMisGifos.style.paddingTop = '23.7px';

//Inserciones


cajaSinContenidoMisGifos.appendChild(sinContenidoImgMisGifos);
cajaSinContenidoMisGifos.appendChild(sinContenidoTextoMisGifos);

seccionMisGifos.appendChild(caritaMisGifos);
seccionMisGifos.appendChild(tituloMisGifos);
seccionMisGifos.appendChild(cajaSinContenidoMisGifos);

main.appendChild(seccionMisGifos);

misGifos.addEventListener('click', () => {
    seccionOne.classList.toggle('one');
    seccionOne.classList.toggle('clase-display-none');
    seccionMisGifos.classList.toggle('clase-display-none');
    seccionMisGifos.classList.toggle('seccion-favoritos');

    let gifCreado = sessionStorage.getItem('keykey');
    if (gifCreado) {
        cajaSinContenidoMisGifos.classList.toggle('Caja-Sin-Contenido');
        cajaSinContenidoMisGifos.classList.toggle('clase-display-none');

        var kv = sessionStorage.getItem(gifCreado);
        var kvParse = JSON.parse(kv); //le saco el stringgify
        var keyUrl = kvParse.data.images.original.url; //obtengo la URL para poder mostrar el Gif


        seccionMisGifos.appendChild(cajaMisFavoritos); //aparezca en la seccion sin necesidad de recargar la pagina
        cajaMisFavoritos.classList.add('caja-mis-gifos');
        const nuevoGif = document.createElement('img');
        cajaMisFavoritos.appendChild(nuevoGif);
        nuevoGif.src = keyUrl;
    }

}, false);