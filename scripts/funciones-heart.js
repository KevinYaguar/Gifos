//funciones de normal, hover y click del src del heart fav.
function corazonNormalFunction(heartFav) {
    
    if (heartFav.getAttribute('src') === corazonActive) {
        heartFav.setAttribute('src', corazonActive);
        heartFav.style.padding = '7px';
    } else {
        heartFav.setAttribute('src', corazonNormal);
        heartFav.style.padding = '';
    }
}

function corazonHoverFunction(heartFav) {
    if (heartFav.getAttribute('src') === corazonActive) {
        heartFav.setAttribute('src', corazonActive);
        //heartFav.style.padding = '7px';
    } 
    if(heartFav.getAttribute('src')!== corazonActive){
        heartFav.setAttribute('src', corazonHover);
        heartFav.style.padding = '';
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

function guardarEnSssionStorage(heartFav, gif) {
    if (heartFav.getAttribute('src') === corazonActive) {
        arrayGifsParaStorage.push(gif.getAttribute('src'));

    } else {
        arrayGifsParaStorage.pop(gif.getAttribute('src'));

    }
    var arrayGifsParaStorage2 = JSON.stringify(arrayGifsParaStorage);
    sessionStorage.setItem('arrayGifs', arrayGifsParaStorage2);

}

