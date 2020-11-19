//funciones de normal, hover y click del src del heart fav.
    function corazonNormalFunction(heartFav) {
        if (heartFav.src == corazonActiveActive) {
            heartFav.setAttribute('src', corazonActive);
            heartFav.style.padding = '7px';
        } else {
            heartFav.setAttribute('src', corazonNormal);
            heartFav.style.padding = '';
        }
    }

    function corazonHoverFunction(heartFav) {
        if (heartFav.src == corazonActiveActive) {
            heartFav.setAttribute('src', corazonActive);
            heartFav.style.padding = '7px';
        } else {
            heartFav.setAttribute('src', corazonHover);
            heartFav.style.padding = '';
        }
    }

    function corazonActiveFunction(heartFav) {
        if (heartFav.src == corazonActiveActive) {
            heartFav.setAttribute('src', corazonHover);
            heartFav.style.padding = '';
        } else {
            heartFav.setAttribute('src', corazonActive);
            heartFav.style.padding = '7px';
        }
    }

    function guardarEnSssionStorage(heartFav, gif) {
        if (heartFav.src == corazonActiveActive) {
            arrayGifsParaStorage.push(gif.getAttribute('src'));
            //console.log(arrayGifsParaStorage);
        } else {
            arrayGifsParaStorage.pop(gif.getAttribute('src'));
            //console.log(arrayGifsParaStorage);
        }
        var arrayGifsParaStorage2 = JSON.stringify(arrayGifsParaStorage);
        sessionStorage.setItem('arrayGifs', arrayGifsParaStorage2);

    }
