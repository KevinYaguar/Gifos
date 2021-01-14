//Eventos click
main.addEventListener('click', e =>{
    donwloadFunction(e);
    heartFunctions(e);
    expandFunction(e);
    verMasGifs(e);
})
//Eventos mouserover y mouseout

main.addEventListener('mouseover', e =>{
    heartHover(e);
    downloadHover(e);
    expandHover(e);
})
main.addEventListener('mouseout', e =>{
    heartHover(e)
    downloadHover(e);
    expandHover(e);
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
        let gif = e.target.parentElement.parentElement.parentElement.previousElementSibling;
        return donwloadGif(gif)
    }
}
const heartFunctions = (e) =>{
    if(e.target.getAttribute('src') === corazonNormal|| e.target.getAttribute('src') === corazonActive  || e.target.getAttribute('src') === corazonHover){
        //e.target.setAttribute('src', corazonActive);
        let gif = e.target.parentElement.parentElement.parentElement.previousElementSibling;
        let user = gif.parentElement.lastChild.lastChild.firstChild.innerText;
        corazonActiveFunction(e.target)
        guardarEnSssionStorage(e.target, gif, user)
        
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

function guardarEnSssionStorage(heartFav, gif, user) {

    if (heartFav.getAttribute('src') === corazonActive) {

        let arrayPrevioFavoritos = JSON.parse(sessionStorage['arrayGifs']);
        
        let arrayInfoGif = [];
        arrayInfoGif.push(gif.getAttribute('src'));
        arrayInfoGif.push(user);
        arrayPrevioFavoritos.push(arrayInfoGif);

        let nuevoArrayFavoritos = JSON.stringify(arrayPrevioFavoritos);
        sessionStorage.setItem('arrayGifs', nuevoArrayFavoritos);

    } else {
        
        let arrayPrevioFavoritos = JSON.parse(sessionStorage['arrayGifs']);
        for(i=0; i < arrayPrevioFavoritos.length; i++){
            if(arrayPrevioFavoritos[i][0].indexOf(gif.getAttribute('src')) >= 0){
                arrayPrevioFavoritos.splice([i], 1)
            }
        }

        let nuevoArrayFavoritos = JSON.stringify(arrayPrevioFavoritos);
        sessionStorage.setItem('arrayGifs', nuevoArrayFavoritos);

    }
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

const heartHover = (e) =>{
    if(e.target.getAttribute('src') === corazonNormal){
        e.target.setAttribute('src', corazonHover)        
        e.target.parentElement.style.opacity = '1';
    } else if(e.target.getAttribute('src') === corazonHover){
        e.target.setAttribute('src', corazonNormal)        
        e.target.parentElement.style.opacity = '0.7';
    } else if(e.target.getAttribute('src') === corazonActive){      
        
        if(e.target.parentElement.style.opacity === '' || e.target.parentElement.style.opacity === '0.7'){
            e.target.parentElement.style.opacity = '1';
        } else{
            e.target.parentElement.style.opacity = '0.7';
        }
    }  
}

const downloadHover = (e) => {
    if(e.target.getAttribute('src') === downloadImg){
        e.target.setAttribute('src', downloadImgHover)        
        e.target.parentElement.style.opacity = '1';
    } else if(e.target.getAttribute('src') === downloadImgHover){
        e.target.setAttribute('src', downloadImg)        
        e.target.parentElement.style.opacity = '0.7';
    }    
}

const expandHover = (e) => {
    if(e.target.getAttribute('src') === expandImg){
        e.target.setAttribute('src', expandImgHover)
        e.target.parentElement.style.opacity = '1';
    } else if(e.target.getAttribute('src') === expandImgHover){
        e.target.setAttribute('src', expandImg)
        e.target.parentElement.style.opacity = '0.7';
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
