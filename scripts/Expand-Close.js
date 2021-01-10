cruzClose.addEventListener('click', e => {
    close(e);
    cerrarExpand();
    
});

function expandir(gif, btnFav, btnDownload, btnExpand) {
    showHide(seccionMax, 'seccion-max', seccionOne, seccionTwo);

    hijosMax(cruzClose, gif, contenedorBajoMax)
    eliminarHijos(contenedorBajoMax);

    contenedorBajoMax.appendChild(btnFav);
    contenedorBajoMax.appendChild(btnDownload);

    //botonesFavDownloadExpand(btnFav, btnDownload, btnExpand)

    //btnFav.classList.toggle('btn-gif-card-trending-max');
    //btnDownload.classList.toggle('btn-gif-card-trending-max');
}

function cerrarExpand() {

    eliminarHijos(seccionMax);

    if(misGifos.classList.value == "favoritos-activado"){
        showHide(seccionMisGifos, 'seccion-favoritos', seccionMax)
    } else if(favoritos.classList.value == "favoritos-activado"){
        showHide(seccionFavoritos, 'seccion-favoritos', seccionMax)
    } else{
        showHide(seccionOne, 'one', seccionMax)
        showTrending(seccionTwo, 'two');
    }
};

const close = (e) => {
    
    const imagenes = document.getElementsByTagName('div');
    let bloquesVacios = getImagesArray(imagenes, 'imagenes-trending')
    
    let gif = e.target.nextSibling;
    let buttonFav = gif.nextSibling.firstChild;
    let buttonDownload = gif.nextSibling.lastChild;

    for(i=0; i < bloquesVacios.length; i++){
        if(bloquesVacios[i].firstChild === null){
            bloquesVacios[i].appendChild(gif);
            bloquesVacios[i].appendChild(buttonFav);
            bloquesVacios[i].appendChild(buttonDownload);
            
        }
    }

    /*
    botonesFavDownloadParaMax(btnFav, btnDownload);

    botonesFavDownloadExpand(btnFav, btnDownload, btnExpand)

    bloqueParaCadaImagenInferior.appendChild(gif);

    bloqueParaCadaImagen.appendChild(btnFav); //Insercion del boton en el bloque FAV
    btnFav.appendChild(heartFav); //Insercion de la imagen en el boton

    bloqueParaCadaImagen.appendChild(btnDownload); //Insercion del boton en el bloque DOWNLOAD
    btnDownload.appendChild(downloadImg) //link de descarga

    bloqueParaCadaImagen.appendChild(btnExpand); //Insercion del boton en el bloque EXPAND
    btnExpand.appendChild(expandImg); //Insercion de la imagen en el boton
    */
}
