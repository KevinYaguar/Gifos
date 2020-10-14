//ApiKey
const ApiKey = 'api_key=1yVSM9oVX3z5nlo213gmodWDvoRxttsM';

//Menu Hamburguesa a X en la version Mobile.
let hamburguesa = document.getElementById('fa-bars'); // Elemento i (menu hamburguesa) de Fontawesome.
let menu = document.getElementById('menu'); // ul del header. (modo o., favoritos, mis gifs) 

hamburguesa.addEventListener('click', () => {
    hamburguesa.classList.toggle('fa-times');
    hamburguesa.classList.toggle('fa-bars');
    menu.classList.toggle('menu');
    menu.classList.toggle('menuOn');
})

// Modo Oscuro
let modoOscuro = document.getElementById('dark'); //"Modo escuro"
let cuerpoWeb = document.getElementById('body'); //Body Completo
let logoBack = document.getElementById('logoBack'); //Backgorund del logo
let logoTextBack = document.getElementById('logoTextBack'); //Texto del logo
let seccionTwo = document.getElementById('seccionTwo'); //Seccion dos del main
let tendringGifosTittle = document.getElementById('tendring-gifos-tittle'); // Titulo de la seccion dos (Trending)
let tendringGifosSubtt = document.getElementById('tendring-gifos-subtt'); //Subtitulo de la seccion dos (Trending)
let searcher = document.getElementById('searcher') //Buscador(div contenedor)

modoOscuro.addEventListener('click', () => {
    cuerpoWeb.classList.toggle('oscuro');
    logoBack.classList.toggle('oscuro');
    logoTextBack.classList.toggle('oscuro');
    seccionTwo.classList.toggle('oscuro2');
    tendringGifosTittle.classList.toggle('oscuro2');
    tendringGifosSubtt.classList.toggle('oscuro2');
    inputBusqueda.classList.toggle('oscuro');
})
// input del buscador
let inputBusqueda = document.getElementById('searcherInput');

//focus X en el buscador

let buscador = document.getElementById('buscador'); // elemento i de fontawesome. En primera instancia es fa-bars. 

inputBusqueda.addEventListener('focus', () => {
    buscador.classList.toggle('fa-times');
});
inputBusqueda.addEventListener('focusout', () => {
    buscador.classList.toggle('fa-times');
});

// Click on X para input.value vacío. y para plegar lista de sugerencias

buscador.addEventListener('click', () => {
    inputBusqueda.value = '';
    sugerencias.classList.toggle('Lista-Activa');
    sugerencias.classList.toggle('Lista-Sugerencias');
})



//Buscador codigo reducido
let sugerencias = document.getElementById('Sugerencias'); // ul sin elementos li
let sugerencia1 = document.createElement('li');
let sugerencia2 = document.createElement('li');
let sugerencia3 = document.createElement('li');
let sugerencia4 = document.createElement('li');
let sugerencia5 = document.createElement('li');

inputBusqueda.addEventListener('focus', () => {
    sugerencias.classList.toggle('Lista-Activa');
    sugerencias.classList.toggle('Lista-Sugerencias');
});


async function obetenerSugerencias(busquedaIngresada) {
    let url = 'https://api.giphy.com/v1/gifs/search/tags?' + ApiKey + '&q=' + busquedaIngresada;
    let response = await fetch(url);
    let json = await response.json();
    let data = await json.data;
    sugerencia1.innerHTML = `<i class="fas fa-search" id="buscador">${data[0].name}</i>`;
    sugerencias.appendChild(sugerencia1);
    sugerencia2.innerHTML = `<i class="fas fa-search" id="buscador">${data[1].name}</i>`;
    sugerencias.appendChild(sugerencia2);
    sugerencia3.innerHTML = `<i class="fas fa-search" id="buscador">${data[2].name}</i>`;
    sugerencias.appendChild(sugerencia3);
    sugerencia4.innerHTML = `<i class="fas fa-search" id="buscador">${data[3].name}</i>`;
    sugerencias.appendChild(sugerencia4);
    sugerencia5.innerHTML = `<i class="fas fa-search" id="buscador">${data[4].name}</i>`;
    sugerencias.appendChild(sugerencia5);
}
inputBusqueda.addEventListener('keyup', (busqueda) => {
    busqueda = inputBusqueda.value;
    obetenerSugerencias(busqueda);
})

//Mostrar resultados gifs solicitados impresos en el DOM

let botonVerMas = document.createElement('button'); // BOTON VER MAS
var bloqueDeRespuestas = document.getElementById('respuesta-de-busqueda'); //Contenedor de todos los gifs a imprimir


async function ObtenerGifsSolicitados(GifsSolicitados, offset) {
    let url = `https://api.giphy.com/v1/gifs/search?${ApiKey}&q=${GifsSolicitados}&limit=12&offset=${offset}&rating=g&lang=en`;
    let res = await fetch(url);
    let json = await res.json();

    for (let data of json.data) {
        let gif = data.images.original;
        let respuestaGif = document.createElement('img');
        respuestaGif.setAttribute('src', gif.url);
        respuestaGif.setAttribute('id', 'imagen de respuesta en ObtenerGifsSolicitados');

        let bloqueParaCadaImagen = document.createElement('div'); //En este div sucederan los eventos mouseover
        let bloqueParaCadaImagenInferior = document.createElement('div'); // En este se imprimiran los gifs

        bloqueParaCadaImagen.id = 'bloque-para-cada-imagen';
        bloqueParaCadaImagenInferior.id = 'bloque-inferior';

        bloqueDeRespuestas.appendChild(bloqueParaCadaImagen);
        bloqueParaCadaImagen.appendChild(bloqueParaCadaImagenInferior);
        bloqueParaCadaImagenInferior.appendChild(respuestaGif);

        //Variables y eventos mouseover
        let btnFav = document.createElement('div'); //Boton Favoritos.
        btnFav.classList.toggle('btnFavOut'); //por defecto display:none.
        let heartFav = document.createElement('img'); //imagen Corazon.
        heartFav.setAttribute('src', './img/icon-fav.svg');
        
        //mantener activ
        
        heartFav.id = 'img-btn-gif-card';

        let btnDownload = document.createElement('div'); //Boton Descargar.
        btnDownload.classList.toggle('btnFavOut'); //por defecto display:none.
        let downloadImg = document.createElement('img'); //imagen Descargar.
        downloadImg.setAttribute('src', './img/icon-download.svg');
        downloadImg.id = 'img-btn-gif-card';

        let btnExpand = document.createElement('div'); // Boton Expandir.
        btnExpand.classList.toggle('btnFavOut'); //por defecto display:none.
        let expandImg = document.createElement('img'); //imagen Expandir
        expandImg.setAttribute('src', './img/icon-max-normal.svg');
        expandImg.id = 'img-btn-gif-card';

        bloqueParaCadaImagen.appendChild(btnFav); //Insercion del boton en el bloque FAV
        btnFav.appendChild(heartFav); //Insercion de la imagen en el boton

        bloqueParaCadaImagen.appendChild(btnDownload); //Insercion del boton en el bloque DOWNLOAD
        btnDownload.appendChild(downloadImg); //Insercion de la imagen en el boton

        bloqueParaCadaImagen.appendChild(btnExpand); //Insercion del boton en el bloque EXPAND
        btnExpand.appendChild(expandImg); //Insercion de la imagen en el boton


        bloqueParaCadaImagen.classList.add('cuadro');
        bloqueParaCadaImagenInferior.classList.add('cuadro');

        //Eventos mouseover sobre el GIF
        bloqueParaCadaImagen.addEventListener('mouseover', () => {
            bloqueParaCadaImagen.classList.toggle('bloque-para-cada-imagen-inferior-hover');
            bloqueParaCadaImagen.style.background = '#572EE5';
            bloqueParaCadaImagenInferior.style.opacity = '0.6';

            //Eventos mouseover sobre el boton FAV
            btnFav.classList.toggle('btnFavOut');
            btnFav.classList.toggle('btn-gif-card');
            heartFav.addEventListener('mouseover', () => {
                if(heartFav.src != './img/icon-fav-active.svg'){
                    heartFav.setAttribute('src', './img/icon-fav-hover.svg');
                    heartFav.classList.remove('btn-fav-active');
                }
                if(heartFav.src == './img/icon-fav-active.svg'){
                    heartFav.setAttribute('src', './img/icon-fav-active.svg');
                } 
            });

            //Eventos mouseover sobre el boton DOWNLOAD
            btnDownload.classList.toggle('btnFavOut');
            btnDownload.classList.toggle('btn-gif-card');
            btnDownload.addEventListener('mouseover', () => {
                downloadImg.setAttribute('src', './img/icon-download-hover.svg');
            });

            //Eventos mouseover sobre el boton EXPAND
            btnExpand.classList.toggle('btnFavOut');
            btnExpand.classList.toggle('btn-gif-card');
            btnExpand.addEventListener('mouseover', () => {
                expandImg.setAttribute('src', './img/icon-max-hover.svg');
            });
        });
        
        //Eventos mouseout sobre el GIF
        bloqueParaCadaImagen.addEventListener('mouseout', () => {
            bloqueParaCadaImagen.classList.toggle('bloque-para-cada-imagen-inferior-hover');
            bloqueParaCadaImagen.style.background = '';
            bloqueParaCadaImagenInferior.style.opacity = '';

            //Eventos mouseout sobre el boton FAV
            btnFav.classList.toggle('btn-gif-card');
            btnFav.classList.toggle('btnFavOut');
            
            heartFav.addEventListener('mouseout', () => {
                if(heartFav.src != './img/icon-fav.svg'){
                    heartFav.setAttribute('src', './img/icon-fav.svg');
                    heartFav.classList.remove('btn-fav-active');
                }
            });
            heartFav.addEventListener('mouseout', ()=>{
                if(heartFav.src == './img/icon-fav-active.svg'){
                    heartFav.setAttribute('src', './img/icon-fav-active.svg');
                    heartFav.classList.remove('btn-fav-active');
                } 
            });
            

            //Eventos mouseout sobre el boton DOWNLOAD
            btnDownload.classList.toggle('btn-gif-card');
            btnDownload.classList.toggle('btnFavOut');
            btnDownload.addEventListener('mouseout', () => {
                downloadImg.setAttribute('src', './img/icon-download.svg');
            });

            //Eventos mouseout sobre el boton EXPAND
            btnExpand.classList.toggle('btn-gif-card');
            btnExpand.classList.toggle('btnFavOut');
            btnExpand.addEventListener('mouseout', () => {
                expandImg.setAttribute('src', './img/icon-max-normal.svg');
            });
        });
        //ACTIVE sobre FAV
        heartFav.addEventListener('click', () => {
            if (heartFav.src = './img/icon-fav.svg') {
                heartFav.setAttribute('src', './img/icon-fav-active.svg');
                heartFav.classList.add('btn-fav-active');
            } 
        });
    }
    insertarBotonVerMas();
}

// Funcion del boton VerMas

function insertarBotonVerMas() {
    //boton ver mas
    botonVerMas.innerText = 'ver más';
    bloqueDeRespuestas.appendChild(botonVerMas);
    botonVerMas.id = 'botonVerMas';
}

function cambiarTitulo(solicitado) {
    //Eliminar sub del trending y cambiar el texto a lo buscado
    let resultadoTitulo = document.getElementById('trending-tt');
    resultadoTitulo.innerText = solicitado;
    resultadoTitulo.id = 'resultadoTitulo';
    resultadoTitulo.style.fontSize = '35px';
    resultadoTitulo.style.lineHeight = '30px';
    let desaparecerSubtitulo = document.getElementById('trending-text');
    desaparecerSubtitulo.innerText = '';
    desaparecerSubtitulo.style.height = '60px';
}



// Evento ENTER para imprimir los gifs en el DOM
inputBusqueda.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        ObtenerGifsSolicitados(inputBusqueda.value, 0);
        cambiarTitulo(inputBusqueda.value);
    }
})

// Imprimir resultados seleccionados de sugerencia con click en el DOM

sugerencia1.addEventListener('click', () => {
    ObtenerGifsSolicitados(sugerencia1.innerText, 0, 12);
    cambiarTitulo(sugerencia1.innerText);
})
sugerencia2.addEventListener('click', () => {
    ObtenerGifsSolicitados(sugerencia2.innerText, 0, 12);
    cambiarTitulo(sugerencia2.innerText);
})
sugerencia3.addEventListener('click', () => {
    ObtenerGifsSolicitados(sugerencia3.innerText, 0, 12);
    cambiarTitulo(sugerencia3.innerText);
})
sugerencia4.addEventListener('click', () => {
    ObtenerGifsSolicitados(sugerencia4.innerText, 0, 12);
    cambiarTitulo(sugerencia4.innerText);
})
sugerencia5.addEventListener('click', () => {
    ObtenerGifsSolicitados(sugerencia5.innerText, 0, 12);
    cambiarTitulo(sugerencia5.innerText);
})

// VER MAS GIFS 
let pagOffset = 0; //Variable que determina el offset del llamado a la API. En el evento VerMas aumentará su valor de   12 en 12.

botonVerMas.addEventListener('click', () => {
    pagOffset = pagOffset + 12;
    ObtenerGifsSolicitados(inputBusqueda.value, pagOffset);
})



