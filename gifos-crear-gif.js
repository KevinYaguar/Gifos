let seccionCrearGif = document.createElement('section');
seccionCrearGif.classList.add('clase-display-none');


contenedorCentralCrearGif.classList.add('contenedor-central-crear-gif');



let luzCamara = document.createElement('img');
luzCamara.setAttribute('src', './img/element-luz-camara.svg');
luzCamara.classList.add('luz');

let rollo = document.createElement('img');
rollo.setAttribute('src', './img/pelicula.svg');
rollo.classList.add('rollo');


let contenedorCentralCrearGifInner = document.createElement('div');
contenedorCentralCrearGifInner.classList.add('contenedor-central-crear-gif-Inner');

let crearGifBloqueUp = document.createElement('div');
crearGifBloqueUp.classList.add('crear-gif-bloque-up');
let crearGifBloqueUpFrase = document.createElement('span');

let crearGifBloqueDown = document.createElement('div');
crearGifBloqueDown.classList.add('crear-gif-bloque-down');
let crearGifBloqueDownFrase = document.createElement('span');

crearGifBloqueUpFrase.innerHTML= '<p>Aquí podrás</p> <p>crear tus propios GIFOS</p>';
crearGifBloqueDownFrase.innerHTML= '<p>¡Crea tu GIFO en sólo 3 pasos!</p> <p>(sólo necesitas una cámara para grabar un video)</p>';

contenedorCentralCrearGifInner.appendChild(crearGifBloqueUp);
crearGifBloqueUp.appendChild(crearGifBloqueUpFrase);

contenedorCentralCrearGifInner.appendChild(crearGifBloqueDown);
crearGifBloqueDown.appendChild(crearGifBloqueDownFrase);





contenedorDeNumero1.classList.add('contenedores-de-numeros');
contenedorDeNumero2.classList.add('contenedores-de-numeros');
contenedorDeNumero3.classList.add('contenedores-de-numeros');

contenedorDeNumeros.classList.add('contenedor-de-numeros-general');
contenedorDeNumeros.appendChild(contenedorDeNumero1);
contenedorDeNumeros.appendChild(contenedorDeNumero2);
contenedorDeNumeros.appendChild(contenedorDeNumero3);
lineaSeparatoria.classList.add('linea-separatoria');

contenedorCentralCrearGif.appendChild(cuadradoEzquina1);
cuadradoEzquina1.style.gridArea = '';
contenedorCentralCrearGif.appendChild(cuadradoEzquina2);
cuadradoEzquina2.style.gridArea = '1 / 3';
contenedorCentralCrearGif.appendChild(cuadradoEzquina3);
cuadradoEzquina3.style.gridArea = '3 / 1';
contenedorCentralCrearGif.appendChild(cuadradoEzquina4);
cuadradoEzquina4.style.gridArea = ' 3 / 3';

contenedorCentralCrearGif.appendChild(contenedorCentralCrearGifInner);









//Inserciones
main.appendChild(seccionCrearGif);
seccionCrearGif.appendChild(camara);
seccionCrearGif.appendChild(luzCamara);
seccionCrearGif.appendChild(contenedorCentralCrearGif);

seccionCrearGif.appendChild(rollo);

seccionCrearGif.appendChild(contenedorDeNumeros);
seccionCrearGif.appendChild(lineaSeparatoria);

seccionCrearGif.appendChild(botonComenzar);


masGifosImg.addEventListener('mouseover', ()=>{
    if(masGifosImg.src !== './img/CTA-crear-gifo-hover.svg'){
        masGifosImg.setAttribute('src', './img/CTA-crear-gifo-hover.svg');
    }
}, false);

masGifosImg.addEventListener('mouseout', ()=>{
    
    if(masGifosImg.src == 'http://127.0.0.1:5500/img/CTA-crear-gifo-hover.svg'){
        masGifosImg.setAttribute('src', './img/button-crear-gifo.svg');
    }
    if(masGifosImg.src == 'http://127.0.0.1:5500/img/CTA-crear-gifo-active.svg'){
        masGifosImg.setAttribute('src', './img/CTA-crear-gifo-active.svg')
    } 
},false);

masGifosImg.addEventListener('click', ()=>{
    if(masGifosImg.src !== './img/CTA-crear-gifo-active'){
        masGifosImg.setAttribute('src', './img/CTA-crear-gifo-active.svg');
    }
    
    seccionOne.classList.toggle('one');
    seccionOne.classList.toggle('clase-display-none');
    seccionTwo.classList.toggle('two');
    seccionTwo.classList.toggle('clase-display-none');
    seccionCrearGif.classList.toggle('clase-display-none');
    seccionCrearGif.classList.toggle('seccion-crear-gif');

}, false);