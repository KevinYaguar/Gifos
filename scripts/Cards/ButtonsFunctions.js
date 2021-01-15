//Eventos click
main.addEventListener('click', e =>{
    donwloadFunction(e);
    heartTrashFunctions(e);
    expandFunction(e);
    verMasGifs(e);
})
//Eventos mouserover y mouseout

main.addEventListener('mouseover', e =>{
    buttonsImghover(e);

})
main.addEventListener('mouseout', e =>{
    buttonsImghover(e);
})

const verMasGifs = (e) => {
    let origin = e.target.parentElement;

    if(origin.classList.contains('respuesta-de-busqueda')){

        bloqueDeRespuestas.removeChild(bloqueDeRespuestas.lastChild);
        pagOffset = pagOffset + 12;
        printGifsSearched(inputBusqueda.value, pagOffset);

    } else if(origin.classList.contains('caja-de-favoritos')){

        eliminarHijos(cajaFavoritos);
        num = num + 12;
        imprimirFavoritosEnCaja(num);

    }
}

const donwloadFunction = (e) => {
    if(e.target.getAttribute('src') === downloadImgHover){
        if(masGifosImg.getAttribute('src') === './img/CTA-crear-gifo-active.svg'){
            let gif = e.target.parentElement.nextSibling.nextSibling.nextSibling;
            return donwloadGif(gif)
        }else {
            let gif = e.target.parentElement.parentElement.parentElement.previousElementSibling;
            return donwloadGif(gif)
        }
    }
}

const heartTrashFunctions = (e) =>{

    if(e.target.getAttribute('src') === corazonNormal|| e.target.getAttribute('src') === corazonActive  || e.target.getAttribute('src') === corazonHover){
        
        let gif = e.target.parentElement.parentElement.parentElement.previousElementSibling;
        let user = gif.parentElement.lastChild.lastChild.firstChild.innerText;
        
        corazonActiveFunction(e.target)
        guardarEnSssionStorage(e.target, gif, user, 'arrayGifs')
        
    } else if(e.target.getAttribute('src') === trashHover) {

        let gif = e.target.parentElement.parentElement.parentElement.previousElementSibling;
        let user = gif.parentElement.lastChild.lastChild.firstChild.innerText;
        guardarEnSssionStorage(e.target, gif, user, 'MisGifos')
    }
}

function guardarEnSssionStorage(button, gif, user, key) {

    if (button.getAttribute('src') === corazonActive) {

        let arrayPrevioEnStorage = JSON.parse(sessionStorage[key]);
        
        let arrayInfoGif = [];
        arrayInfoGif.push(gif.getAttribute('src'));
        arrayInfoGif.push(user);
        arrayPrevioEnStorage.push(arrayInfoGif);

        let nuevoArrayFavoritos = JSON.stringify(arrayPrevioEnStorage);
        sessionStorage.setItem(key, nuevoArrayFavoritos);

    } else if(button.getAttribute('src') === corazonHover || trashHover){
        
        let arrayPrevioEnStorage = JSON.parse(sessionStorage[key]);
        for(i=0; i < arrayPrevioEnStorage.length; i++){
            if(arrayPrevioEnStorage[i][0].indexOf(gif.getAttribute('src')) >= 0){
                arrayPrevioEnStorage.splice([i], 1)
            }
        }

        let nuevoArrayFavoritos = JSON.stringify(arrayPrevioEnStorage);
        sessionStorage.setItem(key, nuevoArrayFavoritos);

    }
}


function corazonActiveFunction(heartFav) {
    if (heartFav.getAttribute('src') === corazonActive) {
        heartFav.setAttribute('src', corazonHover);
        heartFav.style.padding = '';
        
    } else {
        heartFav.setAttribute('src', corazonActive);
        heartFav.style.padding = '7px';
    }
}


let arrayFavoritosEnStorage = sessionStorage.getItem('arrayGifs');

if(arrayFavoritosEnStorage === null){ 

    let array = []; //Array donde se acumularas los gifs guardados en favoritos
    let arrayFavoritosEnStorage = JSON.stringify(array);
    sessionStorage.setItem('arrayGifs', arrayFavoritosEnStorage);
}


let arrayMisGifosEnStorage = sessionStorage.getItem('MisGifos');

if(arrayMisGifosEnStorage === null){ 

    let array = []; //Array donde se acumularas los gifs guardados en favoritos
    let arrayMisGifosEnStorage = JSON.stringify(array);
    sessionStorage.setItem('MisGifos', arrayMisGifosEnStorage);
}


const expandFunction = (e) => {
    if(e.target.getAttribute('src') === expandImgHover){
        let buttonFav = e.target.parentElement.previousElementSibling.previousElementSibling;
        
        let buttonDownload = e.target.parentElement.previousElementSibling;

        let gif = e.target.parentElement.parentElement.parentElement.previousElementSibling;
        let gifParentClass = gif.parentElement.classList.value;

        let user = e.target.parentElement.parentElement.nextSibling;

        expandir(gif, buttonFav, buttonDownload, user, gifParentClass);
    }
}

const buttonsOpacity = (e) => {
    if(e.target.parentElement.style.opacity === '' || e.target.parentElement.style.opacity === '0.7'){
        e.target.parentElement.style.opacity = '1';
    } else{
        e.target.parentElement.style.opacity = '0.7';
    }
}

const buttonsImghover = (e) => {
    switch (e.target.getAttribute('src')){
        case corazonNormal:
            e.target.setAttribute('src', corazonHover) 
            buttonsOpacity(e)
            break;
        case corazonHover:
            e.target.setAttribute('src', corazonNormal); 
            buttonsOpacity(e)
            break;
        case corazonActive:
            buttonsOpacity(e)
            break;
        case downloadImg:
            e.target.setAttribute('src', downloadImgHover)        
            buttonsOpacity(e)
            break;
        case downloadImgHover:
            e.target.setAttribute('src', downloadImg)        
            buttonsOpacity(e)
            break;
        case expandImg:
            e.target.setAttribute('src', expandImgHover)        
            buttonsOpacity(e)
            break;
        case expandImgHover:
            e.target.setAttribute('src', expandImg)        
            buttonsOpacity(e)
            break;
        case trash:
                e.target.setAttribute('src', trashHover)        
                buttonsOpacity(e)
                break;
        case trashHover:
            e.target.setAttribute('src', trash)        
            buttonsOpacity(e)
            break;
    }
}

//////////////////////////////////////////////
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
