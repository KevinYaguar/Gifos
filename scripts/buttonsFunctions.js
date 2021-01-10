//Eventos click
galeryIn.addEventListener('click', e =>{
    donwloadFunction(e);
    heartFunctions(e);
    expandFunction(e);
})

const donwloadFunction = (e) => {
    if(e.target.getAttribute('src') === './img/icon-download.svg'){
        let gif = e.target.parentElement.previousElementSibling.previousElementSibling.firstChild;
        return donwloadGif(gif)
    }
}
const heartFunctions = (e) =>{
    if(e.target.getAttribute('src') === corazonNormal|| e.target.getAttribute('src') === corazonActive  || e.target.getAttribute('src') === corazonHover){
        let gif = e.target.parentElement.previousElementSibling.firstChild;
        console.log(gif);
        corazonActiveFunction(e.target)
        guardarEnSssionStorage(e.target, gif)
    }  
}

const expandFunction = (e) => {
    if(e.target.getAttribute('src') === expandImgHover){
        let buttonFav = e.target.parentElement.previousElementSibling.previousElementSibling;
        let buttonDownload = e.target.parentElement.previousElementSibling;
        let buttonExpand = e.target.parentElement;
        let gif = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstChild;
        expandir(gif, buttonFav, buttonDownload, buttonExpand);
    }
}



//Eventos mouserover y mouseout

galeryIn.addEventListener('mouseover', e =>{
    heartHover(e);
    downloadHover(e);
    expandHover(e);
})
galeryIn.addEventListener('mouseout', e =>{
    heartHover(e)
    downloadHover(e);
    expandHover(e);
})

const heartHover = (e) =>{
    if(e.target.getAttribute('src') === corazonNormal){
        e.target.setAttribute('src', corazonHover)
    } else if(e.target.getAttribute('src') === corazonHover){
        e.target.setAttribute('src', corazonNormal)
    }
}

const downloadHover = (e) => {
    if(e.target.getAttribute('src') === downloadImg){
        e.target.setAttribute('src', downloadImgHover)
    } else if(e.target.getAttribute('src') === downloadImgHover){
        e.target.setAttribute('src', downloadImg)
    }
}

const expandHover = (e) => {
    if(e.target.getAttribute('src') === expandImg){
        e.target.setAttribute('src', expandImgHover)
    } else if(e.target.getAttribute('src') === expandImgHover){
        e.target.setAttribute('src', expandImg)
    }
}

//MOUSEOVER SOBRE BOTON DESCARGAR Y LINK
botonDescargarMiGifoImg.addEventListener('mouseover', () => {
    if (botonDescargarMiGifoImg.getAttribute('src') === 'img/icon-download.svg') {
        botonDescargarMiGifoImg.setAttribute('src', './img/icon-download-hover.svg')
    } else {
        botonDescargarMiGifoImg.setAttribute('src', './img/icon-download.svg')
    }
}, false);

botonCopiarLinkMiGifoImg.addEventListener('mouseover', () => {
    if (botonCopiarLinkMiGifoImg.getAttribute('src') ==='img/icon-link-normal.svg') {
        botonCopiarLinkMiGifoImg.setAttribute('src', './img/icon-link-hover.svg')
    } else {
        botonCopiarLinkMiGifoImg.setAttribute('src', './img/icon-link-normal.svg')
    }
}, false);

//MOUSEOUT SOBRE BOTON DESCAGAR Y LINK

botonDescargarMiGifoImg.addEventListener('mouseout', () => {
    if (botonDescargarMiGifoImg.getAttribute('src') === 'img/icon-download-hover.svg') {
        botonDescargarMiGifoImg.setAttribute('src', './img/icon-download.svg')
    } else {
        botonDescargarMiGifoImg.setAttribute('src', './img/icon-download-hover.svg')
    }
}, false);

botonCopiarLinkMiGifoImg.addEventListener('mouseout', () => {
    if (botonCopiarLinkMiGifoImg.getAttribute('src') === 'img/icon-link-hover.svg') {
        botonCopiarLinkMiGifoImg.setAttribute('src', './img/icon-link-normal.svg')
    } else {
        botonCopiarLinkMiGifoImg.setAttribute('src', './img/icon-link-hover.svg')
    }
}, false);
