//FUNCION CARDS
function cards(gif, padre, claseDeHover, claseDeBotones, corazon) {
    //cards
    let bloqueParaCadaImagen = document.createElement('div'); //En este div sucederan los eventos mouseover
    let bloqueParaCadaImagenInferior = document.createElement('div'); // En este se imprimiran los gifs

    bloqueParaCadaImagen.id = 'bloque-para-cada-imagen';
    bloqueParaCadaImagenInferior.id = 'bloque-inferior';


    bloqueParaCadaImagen.setAttribute('class', claseDeHover);
    bloqueParaCadaImagenInferior.setAttribute('class', claseDeHover);
    gif.setAttribute('class', claseDeHover);

    padre.appendChild(bloqueParaCadaImagen);
    bloqueParaCadaImagen.appendChild(bloqueParaCadaImagenInferior);
    bloqueParaCadaImagenInferior.appendChild(gif);

    //Variables y eventos mouseover
    let btnFav = document.createElement('div'); //Boton Favoritos.
    btnFav.classList.toggle('btnFavOut'); //por defecto display:none.
    let heartFav = document.createElement('img'); //imagen Corazon.

    heartFav.setAttribute('src', corazon);

    let btnDownload = document.createElement('div'); //Boton Descargar.
    btnDownload.classList.toggle('btnFavOut'); //por defecto display:none.
    let downloadImg = document.createElement('img'); //imagen Descargar.
    downloadImg.setAttribute('src', './img/icon-download.svg');

    //descargar imagenes
    downloadImg.addEventListener('click', () => {
        return algo(gif)
    }, false);

    let btnExpand = document.createElement('div'); // Boton Expandir.
    btnExpand.classList.toggle('btnFavOut'); //por defecto display:none.
    let expandImg = document.createElement('img'); //imagen Expandir
    expandImg.setAttribute('src', './img/icon-max-normal.svg');


    bloqueParaCadaImagen.appendChild(btnFav); //Insercion del boton en el bloque FAV
    btnFav.appendChild(heartFav); //Insercion de la imagen en el boton

    bloqueParaCadaImagen.appendChild(btnDownload); //Insercion del boton en el bloque DOWNLOAD
    btnDownload.appendChild(downloadImg) //link de descarga


    bloqueParaCadaImagen.appendChild(btnExpand); //Insercion del boton en el bloque EXPAND
    btnExpand.appendChild(expandImg); //Insercion de la imagen en el boton


    //Eventos mouseover sobre el GIF
    bloqueParaCadaImagen.addEventListener('mouseover', () => {
        bloqueParaCadaImagen.classList.toggle('bloque-para-cada-imagen-hover-background');
        bloqueParaCadaImagenInferior.classList.toggle('opacity-cero-dot-six');

        if (btnFav.classList.value == 'btnFavOut') {
            btnFav.classList.toggle('btnFavOut'); //por defecto display:none.   
        }
        btnFav.classList.toggle(claseDeBotones);
        if(heartFav.src == corazonActiveActive){
            heartFav.style.padding = '6px';
        }
        

        //Eventos mouseover sobre el boton DOWNLOAD
        if (btnDownload.classList.value == 'btnFavOut') {
            btnDownload.classList.toggle('btnFavOut'); //por defecto display:none.   
        }
        btnDownload.classList.toggle(claseDeBotones);
        btnDownload.addEventListener('mouseover', () => {
            downloadImg.setAttribute('src', './img/icon-download-hover.svg');

        }, false);

        //Eventos mouseover sobre el boton EXPAND
        if (btnExpand.classList.value == 'btnFavOut') {
            btnExpand.classList.toggle('btnFavOut'); //por defecto display:none.   
        }
        btnExpand.classList.toggle(claseDeBotones);
        btnExpand.addEventListener('mouseover', () => {
            expandImg.setAttribute('src', './img/icon-max-hover.svg');
        }, false);

    }, false); //fin del evento mouseover

    //Eventos mouseover/out y click sobre el boton FAV
    heartFav.addEventListener('mouseover', () => {
        corazonHoverFunction(heartFav);
    }, false);
    heartFav.addEventListener('mouseout', () => {
        corazonNormalFunction(heartFav);
    }, false);
    heartFav.addEventListener('click', () => {
        corazonActiveFunction(heartFav);
    }, false);
    heartFav.addEventListener('click', () => {
        guardarEnSssionStorage(heartFav, gif);

        //sessionStorage.setItem('arrayGifs', arrayGifsParaStorage);
        let gifsGuardadosSinRepeticion = JSON.parse(sessionStorage['arrayGifs']);
        //gifsGuardadosSinRepeticion.push(sessionStorage.getItem('arrayGifs'));
        gifsGuardadosSinRepeticion.filter(onlyUnique);

        //boton ver mas
        function insertarBotonVerMasFavoritos() {
            botonVerMasFavoritos.innerText = 'ver más';
            botonVerMasFavoritos.classList.add('botonVerMas');
            contenedorDeBotonVerMasFavoritos.classList.add('contenedor-del-boton-ver-mas');
            contenedorDeBotonVerMasFavoritos.appendChild(botonVerMasFavoritos);
            cajaFavoritos.appendChild(contenedorDeBotonVerMasFavoritos);
        }
        if (gifsGuardadosSinRepeticion.length == 0) {
            //eliminarHijos(cajaFavoritos);
            cajaFavoritos.setAttribute('class', claseDisplayNone);
            cajaSinContenido.setAttribute('class', 'caja-sin-contenido');
            console.log(gifsGuardadosSinRepeticion.length);
        }
        if (gifsGuardadosSinRepeticion.length >= 1) {
            cajaSinContenido.setAttribute('class', 'clase-display-none');
            console.log(gifsGuardadosSinRepeticion.length);
            //este while vacia la caja cada vez que se vuelve a favoritos antes de llenarla de vuelta
            while (cajaFavoritos.firstChild) {
                cajaFavoritos.removeChild(cajaFavoritos.firstChild);
            }


            function imprimirFavoritosEnCaja(num) {
                // Recorrido del array e impresion de los gifs en la caja de favortios
                for (i = 0; i <= gifsGuardadosSinRepeticion.length - 1 && i < num; i++) {
                    let gifsFavGuardados = document.createElement('img');
                    gifsFavGuardados.setAttribute('src', gifsGuardadosSinRepeticion[i]);
                    gifsFavGuardados.classList.add('gifs-guardados-favoritos');

                    cards(gifsFavGuardados, cajaFavoritos, 'gifs-guardados-favoritos', 'btn-gif-card-favoritos', corazonActive)

                    //cajaFavoritos.appendChild(gifsFavGuardados);
                }
            }
            let num = 12;

            imprimirFavoritosEnCaja(num);
            insertarBotonVerMasFavoritos();

            botonVerMasFavoritos.addEventListener('click', () => {
                while (cajaFavoritos.firstChild) {
                    cajaFavoritos.removeChild(cajaFavoritos.firstChild);
                }
                num = num + 12;
                imprimirFavoritosEnCaja(num);
                insertarBotonVerMasFavoritos();
            }, false);
        }
    }, false);

    //Eventos mouseout sobre el boton DOWNLOAD
    btnDownload.addEventListener('mouseout', () => {
        downloadImg.setAttribute('src', './img/icon-download.svg');
    }, false);

    //Eventos mouseout sobre el boton EXPAND
    btnExpand.addEventListener('mouseout', () => {
        expandImg.setAttribute('src', './img/icon-max-normal.svg');
    }, false);

    //Eventos mouseout sobre el GIF
    bloqueParaCadaImagen.addEventListener('mouseout', () => {
        bloqueParaCadaImagen.classList.toggle('bloque-para-cada-imagen-hover-background');
        bloqueParaCadaImagenInferior.classList.toggle('opacity-cero-dot-six');
        btnFav.classList.toggle(claseDeBotones);

        if (btnFav.classList.value !== 'btnFavOut') {
            btnFav.classList.toggle('btnFavOut'); //por defecto display:none.   
        }

        btnDownload.classList.toggle(claseDeBotones);

        if (btnDownload.classList.value !== 'btnFavOut') {
            btnDownload.classList.toggle('btnFavOut'); //por defecto display:none.   
        }

        btnExpand.classList.toggle(claseDeBotones);

        if (btnExpand.classList.value !== 'btnFavOut') {
            btnExpand.classList.toggle('btnFavOut'); //por defecto display:none.   
        }
    });
    //////////////////////////////////////////
    function expandir() {
        showHide(seccionMax, 'seccion-max', seccionOne, seccionTwo);

        hijosMax(cruzClose, gif, contenedorBajoMax)
        eliminarHijos(contenedorBajoMax);

        contenedorBajoMax.appendChild(btnFav);
        contenedorBajoMax.appendChild(btnDownload);

        botonesFavDownloadExpand(btnFav, btnDownload, btnExpand)

        btnFav.classList.toggle('btn-gif-card-trending-max');
        btnDownload.classList.toggle('btn-gif-card-trending-max');
    }
    expandImg.addEventListener('click', expandir, false);

    cruzClose.addEventListener('click', () => {
        botonesFavDownloadParaMax(btnFav, btnDownload);

        botonesFavDownloadExpand(btnFav, btnDownload, btnExpand)

        bloqueParaCadaImagenInferior.appendChild(gif);

        bloqueParaCadaImagen.appendChild(btnFav); //Insercion del boton en el bloque FAV
        btnFav.appendChild(heartFav); //Insercion de la imagen en el boton

        bloqueParaCadaImagen.appendChild(btnDownload); //Insercion del boton en el bloque DOWNLOAD
        btnDownload.appendChild(downloadImg) //link de descarga

        bloqueParaCadaImagen.appendChild(btnExpand); //Insercion del boton en el bloque EXPAND
        btnExpand.appendChild(expandImg); //Insercion de la imagen en el boton
    }, false);

    //Efecto carrusel flecha derecha //Solo funciona con 12 Gifs de la medida actual
    let inicio = 0;
    flechaDerecha.addEventListener('click', () => {
        if (inicio > -4246 && inicio <= 0) {
            inicio = inicio - 386;
            bloqueParaCadaImagen.style.left = inicio + 'px';
        }
        if (inicio <= -4246) {
            inicio = 0;
            bloqueParaCadaImagen.style.left = inicio + 'px';
        }
    });
    //Efecto carrusel flecha derecha
    flechaIzquierda.addEventListener('click', () => {
        if (inicio == 0) {
            inicio = -3860;
            bloqueParaCadaImagen.style.left = inicio + 'px';
        }
        if (inicio >= -3860 && inicio < 0) {
            inicio = inicio + 386;
            bloqueParaCadaImagen.style.left = inicio + 'px';
        }
    });
}
//Funcion eliminar hijos
function eliminarHijos(padre) {
    while (padre.firstChild) {
        padre.removeChild(padre.firstChild);
    }
}
//Funcion para evitar repetidos
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
//MOUSEOVER SOBRE BOTON DESCARGAR Y LINK
botonDescargarMiGifoImg.addEventListener('mouseover', () => {
    if (botonDescargarMiGifoImg.src == server + 'img/icon-download.svg') {
        botonDescargarMiGifoImg.setAttribute('src', './img/icon-download-hover.svg')
    } else {
        botonDescargarMiGifoImg.setAttribute('src', './img/icon-download.svg')
    }
}, false);

botonCopiarLinkMiGifoImg.addEventListener('mouseover', () => {
    if (botonCopiarLinkMiGifoImg.src == server + 'img/icon-link-normal.svg') {
        botonCopiarLinkMiGifoImg.setAttribute('src', './img/icon-link-hover.svg')
    } else {
        botonCopiarLinkMiGifoImg.setAttribute('src', './img/icon-link-normal.svg')
    }
}, false);

//MOUSEOUT SOBRE BOTON DESCAGAR Y LINK

botonDescargarMiGifoImg.addEventListener('mouseout', () => {
    if (botonDescargarMiGifoImg.src == server + 'img/icon-download-hover.svg') {
        botonDescargarMiGifoImg.setAttribute('src', './img/icon-download.svg')
    } else {
        botonDescargarMiGifoImg.setAttribute('src', './img/icon-download-hover.svg')
    }
}, false);

botonCopiarLinkMiGifoImg.addEventListener('mouseout', () => {
    if (botonCopiarLinkMiGifoImg.src == server + 'img/icon-link-hover.svg') {
        botonCopiarLinkMiGifoImg.setAttribute('src', './img/icon-link-normal.svg')
    } else {
        botonCopiarLinkMiGifoImg.setAttribute('src', './img/icon-link-hover.svg')
    }
}, false);