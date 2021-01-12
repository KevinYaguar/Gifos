//Funciones para la seccion MAX
function hijosMax(cruz, gif, contenedorBajo) {
    seccionMax.appendChild(cruz);
    seccionMax.appendChild(gif);
    seccionMax.appendChild(contenedorBajo);
}

function botonesFavDownloadExpand(fav, donwload, expand) {
    if (fav.classList.value !== 'btnFavOut') {
        fav.classList.toggle('btnFavOut'); //por defecto display:none.   
    }
    if (donwload.classList.value !== 'btnFavOut') {
        donwload.classList.toggle('btnFavOut'); //por defecto display:none.   
    }
    if (expand.classList.value !== 'btnFavOut') {
        expand.classList.toggle('btnFavOut'); //por defecto display:none.   
    }
}

function botonesFavDownloadParaMax(fav, down) {
    if (fav.classList.value == 'btn-gif-card-trending-max') {
        fav.classList.toggle('btn-gif-card-trending-max');
    }
    if (down.classList.value == 'btn-gif-card-trending-max') {
        down.classList.toggle('btn-gif-card-trending-max');
    }
}
