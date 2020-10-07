//ApiKey
const ApiKey = 'api_key=1yVSM9oVX3z5nlo213gmodWDvoRxttsM' ;

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


//Fetch imagenes trending

function trending(i) {
    fetch('https://api.giphy.com/v1/gifs/search?' + ApiKey + '&q=trending&limit=25&offset=0&rating=g&lang=en')
        .then(res => res.json())
        .then(json => json.data)
        .then(gif =>  gif[i].images.original)
        .then(final => {
            let galeryIn = document.getElementById('galeryIn');
            let imgTrend = document.createElement('img');
            imgTrend.setAttribute('src', final.url);
            imgTrend.setAttribute('id', 'ultima imagen creada');
            imgTrend.setAttribute('class', 'imagenes-trending');
            galeryIn.appendChild(imgTrend);
            
        })
}

for(i=0; i <= 2; i++){
    trending(i);
}

//Buscador codigo reducido
let sugerencias = document.getElementById('Sugerencias');  // ul sin elementos li
let sugerencia1 = document.createElement('li');
let sugerencia2 = document.createElement('li');
let sugerencia3 = document.createElement('li');
let sugerencia4 = document.createElement('li');
let sugerencia5 = document.createElement('li');

inputBusqueda.addEventListener('focus', () => {
    sugerencias.classList.toggle('Lista-Activa');
    sugerencias.classList.toggle('Lista-Sugerencias');
});
inputBusqueda.addEventListener('focusout', () => {
    sugerencias.classList.toggle('Lista-Activa');
    sugerencias.classList.toggle('Lista-Sugerencias');
});

async function obetenerSugerencias (busquedaIngresada){
    let url = 'https://api.giphy.com/v1/gifs/search/tags?' + ApiKey + '&q=' + busquedaIngresada;
    let response = await fetch(url);
    let json = await response.json();
    let data = await json.data;
    sugerencia1.innerHTML = '<i class="fas fa-search" id="buscador">' + data[0].name + '</i>';
    sugerencias.appendChild(sugerencia1);
    sugerencia2.innerHTML = '<i class="fas fa-search" id="buscador">' + data[1].name + '</i>';
    sugerencias.appendChild(sugerencia2);
    sugerencia3.innerHTML = '<i class="fas fa-search" id="buscador">' + data[2].name + '</i>';
    sugerencias.appendChild(sugerencia3);
    sugerencia4.innerHTML = '<i class="fas fa-search" id="buscador">' + data[3].name + '</i>';
    sugerencias.appendChild(sugerencia4);
    sugerencia5.innerHTML = '<i class="fas fa-search" id="buscador">' + data[4].name + '</i>';
    sugerencias.appendChild(sugerencia5);
}
inputBusqueda.addEventListener('keyup', (busqueda)=>{
        busqueda = inputBusqueda.value;
        obetenerSugerencias(busqueda);
} )

async function ObtenerGifsSolicitados(){
    let url = 'https://api.giphy.com/v1/gifs/search?' + ApiKey + '&q=trending&limit=25&offset=0&rating=g&lang=en';
    let res = await fetch(url);
    let json = await res.json();
    let data = await json.data;
    let gif = await data[1].images.original;
    let bloqueDeRespuestas = document.getElementById('respuesta-de-busqueda');
    let respuestaGif = document.createElement('img');
    respuestaGif.setAttribute('src', gif.url);
    respuestaGif.setAttribute('id', 'imagen de respuesta en ObtenerGifsSolicitados');
    bloqueDeRespuestas.appendChild(respuestaGif);
    
}

inputBusqueda.addEventListener('keyup', (event)=> {
    if (event.keyCode === 13){
        ObtenerGifsSolicitados();
        }
        
})

