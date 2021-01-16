//En principio la seccion esta display none
seccionFavoritos.classList.add('clase-display-none');
seccionFavoritos.id = 'SeccionFavoritos';
//titulo favoritos
tituloFavoritos.innerHTML = 'Favoritos';
tituloFavoritos.classList.add('titulo-favoritos');

//corazon de la seccion favoritos
corazonFavoritos.setAttribute('src', './img/icon-favoritos.svg');

//Caja de favoritos
cajaFavoritos.classList.add('caja-de-favoritos');

//Sin Contenido
sinContendioImg.setAttribute('src', './img/icon-fav-sin-contenido.svg');
sinContendioImg.classList.add('imagen-sin-contenido');

sinContendioTexto.innerHTML = '<p>"¡Guarda tu primer GIFO en Favoritos</p><br><p> para que se muestre aquí!"</p>';
sinContendioTexto.classList.add('texto-sin-contenido');

cajaSinContenido.appendChild(sinContendioImg); //insertar img de sin contenido en la caja sin contenido
cajaSinContenido.appendChild(sinContendioTexto); //insertar texto de sin contenido en la caja sin contenido

// inserciones
seccionFavoritos.appendChild(corazonFavoritos); //insertar corazon en la seccion
seccionFavoritos.appendChild(tituloFavoritos); //insertar titulo en la seccion
seccionFavoritos.appendChild(cajaFavoritos); //insertar caja de favoritos

seccionFavoritos.appendChild(cajaSinContenido); //insertar caja sin contenido en la caja favoritos

seccionTwo.style.order = '2'; //para que la seccion two quede por debajo

main.appendChild(seccionFavoritos); // insercion de la seccion en el main

favoritos.addEventListener('click', () => {

    showHide(seccionFavoritos, 'seccion-favoritos', seccionOne, seccionMisGifos, seccionCrearGif);

    //seccionTwo.setAttribute('class', 'two')

    favoritos.classList.toggle('favoritos-activado');

    if (misGifos.classList.value == 'favoritos-activado') {
        misGifos.classList.toggle('favoritos-activado');
    }

    if (masGifosImg.getAttribute('src') === masGifosImgActive) {
        if(cuerpoWeb.classList.value === ''){
            masGifosImg.setAttribute('src', masGifosImgSRC);
        } else if(cuerpoWeb.classList.value === 'oscuro'){
            masGifosImg.setAttribute('src', masGifosImgModoNocturno);
        }
    }

    let gifsGuardadosSinRepeticion  = JSON.parse(sessionStorage['arrayGifs']);

    printStorageGifsOnBox(0, gifsGuardadosSinRepeticion, cajaFavoritos, cajaSinContenido, corazonActive);

}, false)


function printStorageGifsOnBox(num, arrayStorage, box, emptyBox, button) {

    if(arrayStorage.length === 0){
        box.setAttribute('class', claseDisplayNone);
        emptyBox.setAttribute('class', 'caja-sin-contenido');
    } else {
        emptyBox.setAttribute('class', claseDisplayNone);
        box.setAttribute('class', 'caja-de-favoritos');
    
        eliminarHijos(box);
        
        num = num + 12;
    
        // Recorrido del array e impresion de los gifs en la caja 
        for (i = 0; i <= arrayStorage.length -1 && i < num; i++) {
    
            let gifsFavGuardados = document.createElement('img');
            gifsFavGuardados.setAttribute('src', arrayStorage[i][0]);
            gifsFavGuardados.classList.add('gifs-guardados-favoritos');
    
            cards(gifsFavGuardados, box, 'father-box-searcher', 'cuadro', button, arrayStorage[i][1])
    
        }
        if(arrayStorage.length > num){
            let botonVerMasFavortos = insertarBotonVerMas();
            box.appendChild(botonVerMasFavortos);
        };
    }
}

function activarFavoritos(){
    let gifsImpresos = document.getElementsByTagName('img');

        for(i = 0; i < gifsImpresos.length; i++){
            let arrayPrevioFavoritos = JSON.parse(sessionStorage['arrayGifs']);

            for(k = 0; k < arrayPrevioFavoritos.length; k++){
                if(arrayPrevioFavoritos[k][0] === gifsImpresos[i].src){
                    let corazon = gifsImpresos[i].nextElementSibling.firstChild.firstChild.firstChild;
                    corazon.setAttribute('src', corazonActive)
                    corazon.style.padding = '7px';
                }
            }
        }
}