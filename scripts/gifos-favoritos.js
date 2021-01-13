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


//Ocultar seccion de busqueda (section one). Crea al mismo tiempo la seccion favoritos. 
favoritos.addEventListener('click', () => {

    showHide(seccionFavoritos, 'seccion-favoritos', seccionOne, seccionMisGifos, seccionCrearGif);

    showTrending(seccionTwo, 'two');

    favoritos.classList.toggle('favoritos-activado');

    if (misGifos.classList.value == 'favoritos-activado') {
        misGifos.classList.toggle('favoritos-activado');
    }

    if (masGifosImg.getAttribute('src') === masGifosImgActive) {
        masGifosImg.setAttribute('src', masGifosImgSRC);
    }

    
    gifsGuardadosSinRepeticion = JSON.parse(sessionStorage['arrayGifs']);
    
    gifsGuardadosSinRepeticion.filter(onlyUnique);

    
    //CORREGIR CLASES Y LOGICA DE LA CAJA SIN CONTENIDO
    if (gifsGuardadosSinRepeticion.length == 0) {
        //eliminarHijos(cajaFavoritos);
        cajaFavoritos.setAttribute('class', claseDisplayNone);
        cajaSinContenido.setAttribute('class', 'caja-sin-contenido');
        console.log(gifsGuardadosSinRepeticion.length);
    } 
    favorites(gifsGuardadosSinRepeticion)
    
}, false)

function favorites(array){
    if(array.length >= 1) {
        cajaSinContenido.setAttribute('class', claseDisplayNone);
        cajaFavoritos.setAttribute('class', 'caja-de-favoritos');
        //este while vacia la caja cada vez que se vuelve a favoritos antes de llenarla de vuelta
        eliminarHijos(cajaFavoritos);

        let num = 12;
        
        imprimirFavoritosEnCaja(num);
        insertarBotonVerMasFavoritos();

        botonVerMasFavoritos.addEventListener('click', () => {
            eliminarHijos(cajaFavoritos);
            num = num + 12;
            imprimirFavoritosEnCaja(num);
            insertarBotonVerMasFavoritos();
        }, false);
    }
}

//boton ver mas
function insertarBotonVerMasFavoritos() {
    botonVerMasFavoritos.innerText = 'ver más';
    botonVerMasFavoritos.classList.add('botonVerMas');
    contenedorDeBotonVerMasFavoritos.classList.add('contenedor-del-boton-ver-mas');
    contenedorDeBotonVerMasFavoritos.appendChild(botonVerMasFavoritos);
    cajaFavoritos.appendChild(contenedorDeBotonVerMasFavoritos);
}

function imprimirFavoritosEnCaja(num) {
    // Recorrido del array e impresion de los gifs en la caja de favortios
    for (i = 0; i <= gifsGuardadosSinRepeticion.length -1 && i < num; i++) {
        let gifsFavGuardados = document.createElement('img');
        gifsFavGuardados.setAttribute('src', gifsGuardadosSinRepeticion[i]);
        gifsFavGuardados.classList.add('gifs-guardados-favoritos');

        cards(gifsFavGuardados, cajaFavoritos, 'father-box-searcher', 'cuadro', corazonActive)

    }
}