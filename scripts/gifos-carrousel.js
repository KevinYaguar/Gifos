function flechaIzquierdaHoverReverse() {
    switch (cuerpoWeb.classList.value) {
        case 'oscuro':
            flechaIzquierda.setAttribute('src', flechaIzquierdaSrcNocturnoServer);
            break;
        case '':
            flechaIzquierda.setAttribute('src', flechaIzquierdaSrcNormal);
            break;
    }
}

function flechaDerechaHoverReverse() {
    switch (cuerpoWeb.classList.value) {
        case 'oscuro':
            flechaDerecha.setAttribute('src', flechaDerechaSrcNocturnoServer);
            break;
        case '':
            flechaDerecha.setAttribute('src', flechaDerechaSrcNormal);
            break;
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

//Funcion para descargar imagenes
async function algo(imgTrend) {

    let a = document.createElement('a');
    let response = await fetch(imgTrend.src);
    let file = await response.blob();
    a.download = 'MiNuevoGif.gif';
    a.href = window.URL.createObjectURL(file);
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
    a.click();

};
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
        
            cards(imgTrend, galeryIn, 'imagenes-trending', 'btn-gif-card-trending');

            

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

main.appendChild(seccionMax);


function cerrarExpand() {

    eliminarHijos(seccionMax);

    if(misGifos.classList.value == "favoritos-activado"){
        showHide(seccionMisGifos, 'seccion-favoritos', seccionMax)
    } else{
        showHide(seccionOne, 'one', seccionMax)
        showTrending(seccionTwo, 'two');
    }
};
cruzClose.addEventListener('click', cerrarExpand);