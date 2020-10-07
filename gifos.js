//ApiKey
const ApiKey = 'api_key=1yVSM9oVX3z5nlo213gmodWDvoRxttsM';

//Menu Hamburguesa a X
let hamburguesa = document.getElementById('fa-bars');
let menu = document.getElementById('menu');
hamburguesa.addEventListener('click', () => {
    hamburguesa.classList.toggle('fa-times');
    hamburguesa.classList.toggle('fa-bars');
    menu.classList.toggle('menu');
    menu.classList.toggle('menuOn');
})

//Hover en flecha izquierda
let flechaIzquierda = document.getElementById('izquierda');
flechaIzquierda.addEventListener('mouseover', () => {
    flechaIzquierda.setAttribute('src', './assets/button-slider-left-hover.svg');
});
flechaIzquierda.addEventListener('mouseout', () => {
    flechaIzquierda.setAttribute('src', './assets/button-slider-left.svg');
});

// Modo Oscuro
let modoOscuro = document.getElementById('dark'); //"Modo escuro"
let cuerpoWeb = document.getElementById('body'); //Body Completo
let logoBack = document.getElementById('logoBack'); //Backgorund del logo
let logoTextBack = document.getElementById('logoTextBack'); //Texto del logo
let seccionTwo = document.getElementById('seccionTwo'); //Seccion dos del main
let tendringGifosTittle = document.getElementById('tendring-gifos-tittle'); // Titulo de la seccion dos (Trending)
let tendringGifosSubtt = document.getElementById('tendring-gifos-subtt'); //Subtitulo de la seccion dos (Trending)
let searcher = document.getElementById('searcher') //Buscador

modoOscuro.addEventListener('click', () => {
    cuerpoWeb.classList.toggle('oscuro');
    logoBack.classList.toggle('oscuro');
    logoTextBack.classList.toggle('oscuro');
    seccionTwo.classList.toggle('oscuro2');
    tendringGifosTittle.classList.toggle('oscuro2');
    tendringGifosSubtt.classList.toggle('oscuro2');
    searcher.classList.toggle('oscuro')
})

//focus X en el buscador

let buscador = document.getElementById('buscador');
let inputBusqueda = document.getElementById('searcherInput');
inputBusqueda.addEventListener('focus', () => {
    buscador.classList.toggle('fa-times');
    inputBusqueda.style.border = "0";

});
inputBusqueda.addEventListener('focusout', () => {
    buscador.classList.toggle('fa-times');
});
// Click on X para input.value vacío. y para plegar lista de sugerencias

buscador.addEventListener('click', () =>{
    inputBusqueda.value = '';
    sugerencias.classList.toggle('Lista-Activa');
    sugerencias.classList.toggle('Lista-Sugerencias');
})

//Fetch imagenes trending

function trending(i) {
    fetch('https://api.giphy.com/v1/gifs/search?' + ApiKey + '&q=trending&limit=25&offset=0&rating=g&lang=en')
        .then(res => res.json())
        .then(json => json.data)
        .then(gif => gif[i].images.original)
        .then(final => {
            let galeryIn = document.getElementById('galeryIn');
            let imgTrend = document.createElement('img');
            imgTrend.setAttribute('src', final.url);
            imgTrend.setAttribute('id', 'ultima imagen creada');
            imgTrend.setAttribute('class', 'imagenes-trending');
            galeryIn.appendChild(imgTrend);

        })
}

for (i = 0; i <= 2; i++) {
    trending(i);
}

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
    var resultado0 = data[0].name;
    var resultado1 = data[1].name;
    var resultado2 = data[2].name;
    var resultado3 = data[3].name;
    var resultado4 = data[4].name;
    sugerencia1.innerHTML = `<i class="fas fa-search" id="buscador">${resultado0}</i>`;
    sugerencias.appendChild(sugerencia1);
    sugerencia2.innerHTML = `<i class="fas fa-search" id="buscador">${resultado1}</i>`;
    sugerencias.appendChild(sugerencia2);
    sugerencia3.innerHTML = `<i class="fas fa-search" id="buscador">${resultado2}</i>`;
    sugerencias.appendChild(sugerencia3);
    sugerencia4.innerHTML = `<i class="fas fa-search" id="buscador">${resultado3}</i>`;
    sugerencias.appendChild(sugerencia4);
    sugerencia5.innerHTML = `<i class="fas fa-search" id="buscador">${resultado4}</i>`;
    sugerencias.appendChild(sugerencia5);
}
inputBusqueda.addEventListener('keyup', (busqueda) => {
    busqueda = inputBusqueda.value;
    obetenerSugerencias(busqueda);
})

//Mostrar resultados gifs solicitados impresos en el DOM

let botonVerMas = document.createElement('button');
var bloqueDeRespuestas = document.getElementById('respuesta-de-busqueda');


async function ObtenerGifsSolicitados(GifsSolicitados, desde, hasta) {
    let url = 'https://api.giphy.com/v1/gifs/search?' + ApiKey + '&q=' + GifsSolicitados + '&limit=120&offset=0&rating=g&lang=en';
    let res = await fetch(url);
    let json = await res.json();
    let data = await json.data;
    //insertar 12 gifs
    
    for (i = desde; i < hasta; i++) {
        let gif = await data[i].images.original;
        let respuestaGif = document.createElement('img');
        respuestaGif.setAttribute('src', gif.url);
        respuestaGif.setAttribute('id', 'imagen de respuesta en ObtenerGifsSolicitados');
        bloqueDeRespuestas.appendChild(respuestaGif);
    }
    insertarBotonVerMas();
        
}

function insertarBotonVerMas (){
    //boton ver mas
    botonVerMas.innerText = 'ver más';
    bloqueDeRespuestas.appendChild(botonVerMas);
    botonVerMas.id = 'botonVerMas';
}
function cambiarTitulo (solicitado){
    //Eliminar sub del trending y cambiar el texto a lo buscado
    let resultadoTitulo = document.getElementById('trending-tt');
    resultadoTitulo.innerText = solicitado;
    resultadoTitulo.id = 'resultadoTitulo';
    resultadoTitulo.style.fontSize = '35px';
    resultadoTitulo.style.lineHeight = '30px';
    let desaparecerSubtitulo = document.getElementById('trending-text');
    desaparecerSubtitulo.innerText= '';
    desaparecerSubtitulo.style.height = '60px';
}
inputBusqueda.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
            ObtenerGifsSolicitados(inputBusqueda.value, 0, 12);
            cambiarTitulo(inputBusqueda.value);
            }
})

// imprimir resultados seleccionados de sugerencia en el dom

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

// VER MAS GIFS ----incompleto!!----

botonVerMas.addEventListener('click', () => {
    ObtenerGifsSolicitados(inputBusqueda.value, 13, 25);
    
})


