//Hover en flecha izquierda
let flechaIzquierda = document.getElementById('izquierda');
flechaIzquierda.addEventListener('mouseover', () => {
    flechaIzquierda.setAttribute('src', './assets/button-slider-left-hover.svg');
});
flechaIzquierda.addEventListener('mouseout', () => {
    flechaIzquierda.setAttribute('src', './assets/button-slider-left.svg');
});

//Hover en flecha izquierda
let flechaDerecha = document.getElementById('derecha');
flechaDerecha.addEventListener('mouseover', () => {
    flechaDerecha.setAttribute('src', './assets/button-slider-right-hover.svg');
});
flechaDerecha.addEventListener('mouseout', () => {
    flechaDerecha.setAttribute('src', './assets/button-slider-right.svg');
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

            //mantener activ

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

            //Eventos mouseover sobre el GIF
            bloqueParaCadaImagen.addEventListener('mouseover', () => {
                bloqueParaCadaImagen.classList.toggle('bloque-para-cada-imagen-inferior-hover');
                bloqueParaCadaImagen.style.background = '#572EE5';
                bloqueParaCadaImagenInferior.style.opacity = '0.6';

                //Eventos mouseover sobre el boton FAV
                btnFav.classList.toggle('btnFavOut');
                btnFav.classList.toggle('btn-gif-card-trending');
                heartFav.addEventListener('mouseover', () => {
                    if (heartFav.src != './img/icon-fav-active.svg') {
                        heartFav.setAttribute('src', './img/icon-fav-hover.svg');
                        heartFav.classList.remove('btn-fav-active');
                    }
                    if (heartFav.src == './img/icon-fav-active.svg') {
                        heartFav.setAttribute('src', './img/icon-fav-active.svg');
                    }
                });

                //Eventos mouseover sobre el boton DOWNLOAD
                btnDownload.classList.toggle('btnFavOut');
                btnDownload.classList.toggle('btn-gif-card-trending');
                btnDownload.addEventListener('mouseover', () => {
                    downloadImg.setAttribute('src', './img/icon-download-hover.svg');
                });

                //Eventos mouseover sobre el boton EXPAND
                btnExpand.classList.toggle('btnFavOut');
                btnExpand.classList.toggle('btn-gif-card-trending');
                btnExpand.addEventListener('mouseover', () => {
                    expandImg.setAttribute('src', './img/icon-max-hover.svg');
                });
            });

            //Eventos mouseout sobre el GIF
            bloqueParaCadaImagen.addEventListener('mouseout', () => {
                bloqueParaCadaImagen.classList.toggle('bloque-para-cada-imagen-inferior-hover');
                bloqueParaCadaImagen.style.background = '';
                bloqueParaCadaImagenInferior.style.opacity = '';

                //Eventos mouseout sobre el boton FAV
                btnFav.classList.toggle('btn-gif-card-trending');
                btnFav.classList.toggle('btnFavOut');

                heartFav.addEventListener('mouseout', () => {
                    if (heartFav.src != './img/icon-fav.svg') {
                        heartFav.setAttribute('src', './img/icon-fav.svg');
                        heartFav.classList.remove('btn-fav-active');
                    }
                });
                heartFav.addEventListener('mouseout', () => {
                    if (heartFav.src == './img/icon-fav-active.svg') {
                        heartFav.setAttribute('src', './img/icon-fav-active.svg');
                        heartFav.classList.remove('btn-fav-active');
                    }
                });


                //Eventos mouseout sobre el boton DOWNLOAD
                btnDownload.classList.toggle('btn-gif-card-trending');
                btnDownload.classList.toggle('btnFavOut');
                btnDownload.addEventListener('mouseout', () => {
                    downloadImg.setAttribute('src', './img/icon-download.svg');
                });

                //Eventos mouseout sobre el boton EXPAND
                btnExpand.classList.toggle('btn-gif-card-trending');
                btnExpand.classList.toggle('btnFavOut');
                btnExpand.addEventListener('mouseout', () => {
                    expandImg.setAttribute('src', './img/icon-max-normal.svg');
                });
            });
            //ACTIVE sobre FAV
            heartFav.addEventListener('click', () => {
                if (heartFav.src = './img/icon-fav.svg') {
                    heartFav.setAttribute('src', './img/icon-fav-active.svg');
                    heartFav.classList.add('btn-fav-active');
                }
            });

            //Efecto carrusel flecha derecha
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
            
            //ACTIVE sobre FAV
            heartFav.addEventListener('click', () => {
                if (heartFav.src = './img/icon-fav.svg') {
                    heartFav.setAttribute('src', './img/icon-fav-active.svg');
                    heartFav.classList.add('btn-fav-active');
                    sessionStorage.setItem('prueba', imgTrend);
                }
                sessionStorage.setItem('prueba', imgTrend);
                arrayGifsParaStorage.push(imgTrend.getAttribute('src'));
                arrayGifsParaStorage.join(',')
                sessionStorage.setItem('arrayGifs', arrayGifsParaStorage);
                console.log(arrayGifsParaStorage);
            }, false);
        });
}

for (i = 0; i <= 11; i++) {
    trending(i);
}