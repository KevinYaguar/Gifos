function flechaIzquierdaHoverReverse(){
    if(flechaDerecha.src == 'https://kevinyaguar.github.io/img/button-slider-right-md-noct.svg'){
        flechaIzquierda.setAttribute('src', flechaIzquierdaSrcNocturno);
    } else{
        flechaIzquierda.setAttribute('src', flechaIzquierdaSrcNormal);
    }
}
function flechaDerechaHoverReverse(){
    if(flechaIzquierda.src == 'https://kevinyaguar.github.io/img/button-slider-left-md-noct.svg'){
        flechaDerecha.setAttribute('src', flechaDerechaSrcNocturno);
    } else {
        flechaDerecha.setAttribute('src', flechaDerechaSrcNormal);
    }
}


//Hover en flecha izquierda
flechaIzquierda.addEventListener('mouseover', () => {
    flechaIzquierda.setAttribute('src', flechaIzquierdaSrcHover);
});
flechaIzquierda.addEventListener('mouseout', () => {
    flechaIzquierdaHoverReverse();
});

//Hover en flecha derecha
flechaDerecha.addEventListener('mouseover', () => {
    flechaDerecha.setAttribute('src', flechaDerechaSrcHover);
});
flechaDerecha.addEventListener('mouseout', () => {
    flechaDerechaHoverReverse();
});


//Fetch imagenes trending
function trending(i) {
    fetch('https://api.giphy.com/v1/gifs/search?' + ApiKey + '&q=trending&limit=25&offset=0&rating=g&lang=en')
        .then(res => res.json())
        .then(json => json.data)
        .then(gif => gif[i].images.original)
        .then(final => {
            let galeryIn = document.getElementById('galeryIn');
            var imgTrend = document.createElement('img');
            imgTrend.setAttribute('src', final.url);
            imgTrend.setAttribute('id', 'imgTrend');

            galeryIn.appendChild(imgTrend);

            //cards
            let bloqueParaCadaImagen = document.createElement('div'); //En este div sucederan los eventos mouseover
            let bloqueParaCadaImagenInferior = document.createElement('div'); // En este se imprimiran los gifs

            bloqueParaCadaImagen.id = 'bloque-para-cada-imagen';
            bloqueParaCadaImagenInferior.id = 'bloque-inferior';


            bloqueParaCadaImagen.setAttribute('class', 'imagenes-trending');
            bloqueParaCadaImagenInferior.setAttribute('class', 'imagenes-trending');
            imgTrend.setAttribute('class', 'imagenes-trending');

            galeryIn.appendChild(bloqueParaCadaImagen);
            bloqueParaCadaImagen.appendChild(bloqueParaCadaImagenInferior);
            bloqueParaCadaImagenInferior.appendChild(imgTrend);

            //Variables y eventos mouseover
            let btnFav = document.createElement('div'); //Boton Favoritos.
            btnFav.classList.toggle('btnFavOut'); //por defecto display:none.
            let heartFav = document.createElement('img'); //imagen Corazon.
            heartFav.setAttribute('src', './img/icon-fav.svg');

            heartFav.id = 'btn-gif-card-trending';

            let btnDownload = document.createElement('div'); //Boton Descargar.
            btnDownload.classList.toggle('btnFavOut'); //por defecto display:none.
            let downloadImg = document.createElement('img'); //imagen Descargar.
            downloadImg.setAttribute('src', './img/icon-download.svg');
            downloadImg.id = 'btn-gif-card-trending';

            let btnExpand = document.createElement('div'); // Boton Expandir.
            btnExpand.classList.toggle('btnFavOut'); //por defecto display:none.
            let expandImg = document.createElement('img'); //imagen Expandir
            expandImg.setAttribute('src', './img/icon-max-normal.svg');
            expandImg.id = 'btn-gif-card-trending';

            bloqueParaCadaImagen.appendChild(btnFav); //Insercion del boton en el bloque FAV
            btnFav.appendChild(heartFav); //Insercion de la imagen en el boton

            bloqueParaCadaImagen.appendChild(btnDownload); //Insercion del boton en el bloque DOWNLOAD
            btnDownload.appendChild(downloadImg); //Insercion de la imagen en el boton

            bloqueParaCadaImagen.appendChild(btnExpand); //Insercion del boton en el bloque EXPAND
            btnExpand.appendChild(expandImg); //Insercion de la imagen en el boton

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
                    arrayGifsParaStorage.push(imgTrend.getAttribute('src'));               
                    //console.log(arrayGifsParaStorage);
                } else{          
                    arrayGifsParaStorage.pop(imgTrend.getAttribute('src'));
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
                btnFav.classList.toggle('btn-gif-card-trending');

                //Eventos mouseover/out y click sobre el boton FAV
                heartFav.addEventListener('mouseover', corazonHoverFunction, false);
                heartFav.addEventListener('mouseout', corazonNormalFunction, false);
                heartFav.addEventListener('click', corazonActiveFunction, false);
                heartFav.addEventListener('click', guardarEnSssionStorage, false);

                //Eventos mouseover sobre el boton DOWNLOAD
                btnDownload.classList.toggle('btnFavOut');
                btnDownload.classList.toggle('btn-gif-card-trending');
                btnDownload.addEventListener('mouseover', () => {
                    downloadImg.setAttribute('src', './img/icon-download-hover.svg');
                }, false);

                //Eventos mouseover sobre el boton EXPAND
                btnExpand.classList.toggle('btnFavOut');
                btnExpand.classList.toggle('btn-gif-card-trending');
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
                btnFav.classList.toggle('btn-gif-card-trending');
                btnFav.classList.toggle('btnFavOut');
                btnDownload.classList.toggle('btn-gif-card-trending');
                btnDownload.classList.toggle('btnFavOut');
                btnExpand.classList.toggle('btn-gif-card-trending');
                btnExpand.classList.toggle('btnFavOut');
            });

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
            
        });
}

for (i = 0; i <= 11; i++) {
    trending(i);
}