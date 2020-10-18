

let seccionOne = document.querySelector('.one');
let favoritos = document.getElementById('favoritos');


//creacion seccion favoritos
let seccionFavoritos = document.createElement('section');
seccionFavoritos.classList.add('clase-display-none');

//titulo favoritos
let tituloFavoritos = document.createElement('h4');
tituloFavoritos.innerHTML = 'Favoritos';
tituloFavoritos.classList.add('titulo-favoritos');



//corazon de la seccion favoritos
let corazonFavoritos = document.createElement('img');
corazonFavoritos.setAttribute('src', './img/icon-favoritos.svg');

//Caja de favoritos
let cajaFavoritos = document.createElement('div');
cajaFavoritos.classList.add('caja-de-favoritos');

for (i = 0; i <= arrayGifsParaStorage.length; i++) {
    let gifsFavGuardados = document.createElement('img');
    gifsFavGuardados.setAttribute('src', arrayGifsParaStorage[i]);
    cajaFavoritos.appendChild(gifsFavGuardados);
}




//Sin Contenido
let cajaSinContenido = document.createElement('div');


let sinContendioImg = document.createElement('img');
sinContendioImg.setAttribute('src', './img/icon-fav-sin-contenido.svg');
sinContendioImg.classList.add('imagen-sin-contenido');


let sinContendioTexto = document.createElement('p');
sinContendioTexto.innerHTML = '<p>"¡Guarda tu primer GIFO en Favoritos</p><br><p> para que se muestre aquí!"</p>';
sinContendioTexto.classList.add('texto-sin-contenido');


if (arrayGifsParaStorage.length !== null) {
    cajaSinContenido.classList.add('clase-display-none');
} else {
    cajaSinContenido.classList.add('Caja-Sin-Contenido')
}

// inserciones
cajaSinContenido.appendChild(sinContendioImg); //insertar img de sin contenido en la caja sin contenido
cajaSinContenido.appendChild(sinContendioTexto); //insertar texto de sin contenido en la caja sin contenido


seccionFavoritos.appendChild(corazonFavoritos); //insertar corazon en la seccion
seccionFavoritos.appendChild(tituloFavoritos); //insertar titulo en la seccion
seccionFavoritos.appendChild(cajaFavoritos); //insertar caja de favoritos

cajaFavoritos.appendChild(cajaSinContenido); //insertar caja sin contenido en la caja favoritos

seccionTwo.style.order = '2'; //para que la seccion two quede por debajo
let main = document.querySelector('main');
main.appendChild(seccionFavoritos); // insercion de la seccion en el main


//Ocultar seccion de busqueda (section one). Crea al mismo tiempo la seccion favoritos. 
favoritos.addEventListener('click', () => {
    seccionOne.classList.toggle('one');
    seccionOne.classList.toggle('clase-display-none');
    seccionFavoritos.classList.toggle('seccion-favoritos');
})