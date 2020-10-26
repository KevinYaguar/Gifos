let seccionMisGifos = document.createElement('section');
let tituloMisGifos = document.createElement('h4');
let caritaMisGifos = document.createElement('img');
let cajaMisGifos = document.createElement('div');
let cajaSinContenidoMisGifos = document.createElement('div');
let sinContenidoImgMisGifos = document.createElement('img');
let sinContenidoTextoMisGifos = document.createElement('p');
let contenedorDeBotonMisGifos = document.createElement('div');
let botonVerMisGifos = document.createElement('button');

//En principio la seccion esta display none
seccionMisGifos.classList.add('clase-display-none');
seccionMisGifos.id = 'seccion-Mis-Gifos';

//Carita
caritaMisGifos.setAttribute('src', './img/icon-mis-gifos.svg');

//titulo
tituloMisGifos.innerHTML = 'Mis GIFOS';
tituloMisGifos.classList.add('titulo-favoritos');

//Sin Contenido
cajaSinContenidoMisGifos.classList.add('Caja-Sin-Contenido');

sinContenidoImgMisGifos.setAttribute('src', './img/icon-mis-gifos-sin-contenido.svg');

sinContenidoTextoMisGifos.innerHTML = '¡Anímate a crear tu primer GIFO!';
sinContenidoTextoMisGifos.classList.add('texto-sin-contenido');
sinContenidoTextoMisGifos.style.paddingTop = '23.7px';

//Inserciones


cajaSinContenidoMisGifos.appendChild(sinContenidoImgMisGifos);
cajaSinContenidoMisGifos.appendChild(sinContenidoTextoMisGifos);

seccionMisGifos.appendChild(caritaMisGifos);
seccionMisGifos.appendChild(tituloMisGifos);
seccionMisGifos.appendChild(cajaSinContenidoMisGifos);

main.appendChild(seccionMisGifos);

misGifos.addEventListener('click', ()=>{
    seccionOne.classList.toggle('one');
    seccionOne.classList.toggle('clase-display-none');
    seccionMisGifos.classList.toggle('clase-display-none');
    seccionMisGifos.classList.toggle('seccion-favoritos');

}, false);