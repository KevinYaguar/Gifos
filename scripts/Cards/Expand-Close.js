cruzClose.addEventListener('click', e => {
    close(e);
    cerrarExpand();
    
});

seccionMax.classList.add(claseDisplayNone);
seccionMax.appendChild(cruzClose);
seccionMax.appendChild(contenedorBajoMax);
contenedorBajoMax.appendChild(buttonBoxMax);
buttonBoxMax.classList.add('button-box-max');
function expandir(gif, btnFav, btnDownload, user) {

    showHide(seccionMax, 'seccion-max', seccionOne, seccionTwo);

    //hijosMax(cruzClose, gif, contenedorBajoMax)

    gif.setAttribute('class', 'img-max')

    seccionMax.insertBefore(gif, contenedorBajoMax)

    
    contenedorBajoMax.insertBefore(user, buttonBoxMax);
    buttonBoxMax.appendChild(btnFav);
    buttonBoxMax.appendChild(btnDownload);
    
    //eliminarHijos(contenedorBajoMax);

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


}
