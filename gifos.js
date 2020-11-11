//Menu Hamburguesa a X en la version Mobile.
hamburguesa.addEventListener('click', () => {
    hamburguesa.classList.toggle('fa-times');
    hamburguesa.classList.toggle('fa-bars');
    menu.classList.toggle('menu');
    menu.classList.toggle('menuOn');
}, false);

//focus X en el buscador

inputBusqueda.addEventListener('focus', () => {
    buscador.classList.toggle('fa-times');
}, false);
inputBusqueda.addEventListener('focusout', () => {
    buscador.classList.toggle('fa-times');
}, false);

// Click on X para input.value vacío. y para plegar lista de sugerencias
buscador.addEventListener('click', () => {
    inputBusqueda.value = '';
    sugerencias.classList.toggle('Lista-Activa');
    sugerencias.classList.toggle('Lista-Sugerencias');
}, false);

//Buscador: focus, sugerencias y mostrar resultados gifs solicitados impresos en el DOM.
// Boton Ver mas: clase y uso.
//Cambio del titulo por el lo buscado

inputBusqueda.addEventListener('focus', () => {
    sugerencias.classList.toggle('Lista-Activa');
    sugerencias.classList.toggle('Lista-Sugerencias');
}, false);
inputBusqueda.addEventListener('keyup', (busqueda) => {
    busqueda = inputBusqueda.value;
    obetenerSugerencias(busqueda);
}, false);

function insertarBotonVerMas() {
    //boton ver mas
    botonVerMas.innerText = 'ver más';
    botonVerMas.id = 'botonVerMas';
    
    contenedorDeBotonVerMas.classList.add('contenedor-del-boton-ver-mas');
    contenedorDeBotonVerMas.appendChild(botonVerMas);
    bloqueDeRespuestas.appendChild(contenedorDeBotonVerMas);

}
async function obetenerSugerencias(busquedaIngresada) {
    let url = 'https://api.giphy.com/v1/gifs/search/tags?' + ApiKey + '&q=' + busquedaIngresada;
    let response = await fetch(url);
    let json = await response.json();
    let data = await json.data;
    sugerencia1.innerHTML = `<i class="fas fa-search" id="buscador"></i>${data[0].name}`;
    sugerencias.appendChild(sugerencia1);
    sugerencia2.innerHTML = `<i class="fas fa-search" id="buscador"></i>${data[1].name}`;
    sugerencias.appendChild(sugerencia2);
    sugerencia3.innerHTML = `<i class="fas fa-search" id="buscador"></i>${data[2].name}`;
    sugerencias.appendChild(sugerencia3);
    sugerencia4.innerHTML = `<i class="fas fa-search" id="buscador"></i>${data[3].name}`;
    sugerencias.appendChild(sugerencia4);
    sugerencia5.innerHTML = `<i class="fas fa-search" id="buscador"></i>${data[4].name}`;
    sugerencias.appendChild(sugerencia5);
}
//Funcion para descargar imagenes
async function algo(respuestaGif) {

    let a = document.createElement('a');
    let response = await fetch(respuestaGif.src);
    let file = await response.blob();
    a.download = 'MiNuevoGif.gif';
    a.href = window.URL.createObjectURL(file);
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
    a.click();

};
async function ObtenerGifsSolicitados(GifsSolicitados, offset) {
    let url = `https://api.giphy.com/v1/gifs/search?${ApiKey}&q=${GifsSolicitados}&limit=12&offset=${offset}&rating=g&lang=en`;
    let res = await fetch(url);
    let json = await res.json();

    for (let data of json.data) {
        let gif = data.images.original;
        let respuestaGif = document.createElement('img');
        respuestaGif.setAttribute('src', gif.url);
        respuestaGif.setAttribute('id', 'imagen de respuesta en ObtenerGifsSolicitados');

        let bloqueParaCadaImagen = document.createElement('div'); //En este div sucederan los eventos mouseover
        let bloqueParaCadaImagenInferior = document.createElement('div'); // En este se imprimiran los gifs

        bloqueParaCadaImagen.id = 'bloque-para-cada-imagen';
        bloqueParaCadaImagenInferior.id = 'bloque-inferior';

        bloqueDeRespuestas.appendChild(bloqueParaCadaImagen);
        bloqueParaCadaImagen.appendChild(bloqueParaCadaImagenInferior);
        bloqueParaCadaImagenInferior.appendChild(respuestaGif);

        //Variables y eventos mouseover
        let btnFav = document.createElement('div'); //Boton Favoritos.
        btnFav.classList.toggle('btnFavOut'); //por defecto display:none.
        let heartFav = document.createElement('img'); //imagen Corazon.
        heartFav.setAttribute('src', corazonNormal);

        heartFav.id = 'img-btn-gif-card';

        let btnDownload = document.createElement('div'); //Boton Descargar.
        btnDownload.classList.toggle('btnFavOut'); //por defecto display:none.
        let downloadImg = document.createElement('img'); //imagen Descargar.
        downloadImg.setAttribute('src', './img/icon-download.svg');
        downloadImg.id = 'img-btn-gif-card';
        //descargar imagenes
        downloadImg.addEventListener('click', ()=>{ return algo(respuestaGif)}, false);

        let btnExpand = document.createElement('div'); // Boton Expandir.
        btnExpand.classList.toggle('btnFavOut'); //por defecto display:none.
        let expandImg = document.createElement('img'); //imagen Expandir
        expandImg.setAttribute('src', './img/icon-max-normal.svg');
        expandImg.id = 'img-btn-gif-card';

        bloqueParaCadaImagen.appendChild(btnFav); //Insercion del boton en el bloque FAV
        btnFav.appendChild(heartFav); //Insercion de la imagen en el boton

        bloqueParaCadaImagen.appendChild(btnDownload); //Insercion del boton en el bloque DOWNLOAD
        btnDownload.appendChild(downloadImg); //Insercion de la imagen en el boton

        bloqueParaCadaImagen.appendChild(btnExpand); //Insercion del boton en el bloque EXPAND
        btnExpand.appendChild(expandImg); //Insercion de la imagen en el boton


        bloqueParaCadaImagen.classList.add('cuadro');
        bloqueParaCadaImagenInferior.classList.add('cuadro');

        //funciones de normal, hover y click del src del heart fav.
        function corazonNormalFunction() {
            if (heartFav.src == corazonActiveActive) {
                heartFav.setAttribute('src', corazonActive);
                heartFav.style.padding = '7px';
            } else {
                heartFav.setAttribute('src', corazonNormal);
                heartFav.style.padding = '';
            }
        }

        function corazonHoverFunction() {
            if (heartFav.src == corazonActiveActive) {
                heartFav.setAttribute('src', corazonActive);
                heartFav.style.padding = '7px';
            } else {
                heartFav.setAttribute('src', corazonHover);
                heartFav.style.padding = '';
            }
        }

        function corazonActiveFunction() {
            if (heartFav.src == corazonActiveActive) {
                heartFav.setAttribute('src', corazonHover);
                heartFav.style.padding = '';
            } else {
                heartFav.setAttribute('src', corazonActive);
                heartFav.style.padding = '7px';
            }
        }


        function guardarEnSssionStorage() {
            if (heartFav.src == corazonActiveActive) {
                arrayGifsParaStorage.push(respuestaGif.getAttribute('src'));
                //console.log(arrayGifsParaStorage);
            } else {
                arrayGifsParaStorage.pop(respuestaGif.getAttribute('src'));
                //console.log(arrayGifsParaStorage);
            }
            var arrayGifsParaStorage2 = JSON.stringify(arrayGifsParaStorage);
            sessionStorage.setItem('arrayGifs', arrayGifsParaStorage2);
        }
        //Eventos mouseover sobre el GIF
        bloqueParaCadaImagen.addEventListener('mouseover', () => {
            bloqueParaCadaImagen.classList.toggle('bloque-para-cada-imagen-hover-background');
            bloqueParaCadaImagenInferior.classList.toggle('opacity-cero-dot-six');

            btnFav.classList.toggle('btnFavOut');
            btnFav.classList.toggle('btn-gif-card');

            //Eventos mouseover/out y click sobre el boton FAV
            heartFav.addEventListener('mouseover', corazonHoverFunction, false);
            heartFav.addEventListener('mouseout', corazonNormalFunction, false);
            heartFav.addEventListener('click', corazonActiveFunction, false);
            heartFav.addEventListener('click', guardarEnSssionStorage, false);

            //Eventos mouseover sobre el boton DOWNLOAD
            btnDownload.classList.toggle('btnFavOut');
            btnDownload.classList.toggle('btn-gif-card');
            btnDownload.addEventListener('mouseover', () => {
                downloadImg.setAttribute('src', './img/icon-download-hover.svg');
            }, false);

            //Eventos mouseover sobre el boton EXPAND
            btnExpand.classList.toggle('btnFavOut');
            btnExpand.classList.toggle('btn-gif-card');
            btnExpand.addEventListener('mouseover', () => {
                expandImg.setAttribute('src', './img/icon-max-hover.svg');
            }, false);
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
            btnFav.classList.toggle('btn-gif-card');
            btnFav.classList.toggle('btnFavOut');
            btnDownload.classList.toggle('btn-gif-card');
            btnDownload.classList.toggle('btnFavOut');
            btnExpand.classList.toggle('btn-gif-card');
            btnExpand.classList.toggle('btnFavOut');
        }, false);

        
        //Expand

    function cerrarExpand() {
        eliminarHijos(seccionMax);
        seccionOne.classList.toggle('one');
        seccionTwo.classList.toggle('two');
        seccionOne.classList.toggle('clase-display-none');
        seccionTwo.classList.toggle('clase-display-none');
        seccionMax.classList.toggle('seccion-max');
        seccionMax.classList.toggle('clase-display-none');
    
    };
    cruzClose.addEventListener('click', cerrarExpand);

    function expandir() {
        showHide(seccionMax, 'seccion-max', seccionOne, seccionTwo);

        hijosMax(cruzClose, respuestaGif, contenedorBajoMax)
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
        
        bloqueParaCadaImagenInferior.appendChild(respuestaGif);
        
        bloqueParaCadaImagen.appendChild(btnFav); //Insercion del boton en el bloque FAV
        btnFav.appendChild(heartFav); //Insercion de la imagen en el boton

        bloqueParaCadaImagen.appendChild(btnDownload); //Insercion del boton en el bloque DOWNLOAD
        btnDownload.appendChild(downloadImg) //link de descarga

        bloqueParaCadaImagen.appendChild(btnExpand); //Insercion del boton en el bloque EXPAND
        btnExpand.appendChild(expandImg); //Insercion de la imagen en el boton
    }, false);
    }
    insertarBotonVerMas();
    // VER MAS GIFS 
    botonVerMas.addEventListener('click', () => {
        bloqueDeRespuestas.removeChild(contenedorDeBotonVerMas);
        pagOffset = pagOffset + 12;
        ObtenerGifsSolicitados(inputBusqueda.value, pagOffset);
        
    }, false);
}

function cambiarTitulo(solicitado) {
    //Eliminar sub del trending y cambiar el texto a lo buscado
    let resultadoTitulo = document.getElementById('trending-tt');
    resultadoTitulo.innerText = solicitado;
    resultadoTitulo.id = 'resultadoTitulo';
    resultadoTitulo.style.fontSize = '35px';
    resultadoTitulo.style.lineHeight = '30px';
    let desaparecerSubtitulo = document.getElementById('trending-text');
    desaparecerSubtitulo.innerText = '';
    desaparecerSubtitulo.style.height = '60px';
}
// Evento ENTER para imprimir los gifs en el DOM
inputBusqueda.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        ObtenerGifsSolicitados(inputBusqueda.value, 0);
        cambiarTitulo(inputBusqueda.value);
    }
}, false);

// Imprimir resultados seleccionados de sugerencia con click en el DOM
sugerencia1.addEventListener('click', () => {
    ObtenerGifsSolicitados(sugerencia1.innerText, 0, 12);
    cambiarTitulo(sugerencia1.innerText);
}, false);
sugerencia2.addEventListener('click', () => {
    ObtenerGifsSolicitados(sugerencia2.innerText, 0, 12);
    cambiarTitulo(sugerencia2.innerText);
}, false);
sugerencia3.addEventListener('click', () => {
    ObtenerGifsSolicitados(sugerencia3.innerText, 0, 12);
    cambiarTitulo(sugerencia3.innerText);
}, false);
sugerencia4.addEventListener('click', () => {
    ObtenerGifsSolicitados(sugerencia4.innerText, 0, 12);
    cambiarTitulo(sugerencia4.innerText);
}, false);
sugerencia5.addEventListener('click', () => {
    ObtenerGifsSolicitados(sugerencia5.innerText, 0, 12);
    cambiarTitulo(sugerencia5.innerText);
}, false);