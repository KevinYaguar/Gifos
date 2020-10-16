//Ocultar seccion de busqueda (section one). Crea al mismo tiempo la seccion favoritos. 

let seccionOne = document.querySelector('.one');
let favoritos = document.getElementById('favoritos');
favoritos.addEventListener('click', () => {
    seccionOne.style.display = 'none';

    //creacion seccion favoritos
    let seccionFavoritos = document.createElement('section');
    seccionFavoritos.id = 'seccion-favoritos';
    seccionFavoritos.style.order = '1';
    seccionFavoritos.style.display = 'flex';
    seccionFavoritos.style.flexDirection = 'column';

    //titulo favoritos
    let tituloFavoritos = document.createElement('h4');
    tituloFavoritos.innerHTML = 'Favoritos';
    tituloFavoritos.style.color = '#572EE5';
    tituloFavoritos.style.fontSize = '25px';
    tituloFavoritos.style.fontFamily = "'Montserrat', sans-serif";
    tituloFavoritos.style.fontWeight = '700';
    tituloFavoritos.style.lineHeight = '30px';
    tituloFavoritos.style.textAlign = 'center';

    //corazon de la seccion favoritos
    let corazonFavoritos = document.createElement('img');
    corazonFavoritos.setAttribute('src', './img/icon-favoritos.svg');

    //Caja de favoritos
    let cajaFavoritos = document.createElement('div');

    //Sin Contenido
    let cajaSinContenido = document.createElement('div');
    cajaSinContenido.style.display = 'flex';
    cajaSinContenido.style.flexDirection = 'column';
    cajaSinContenido.style.alignItems = 'center';
    cajaSinContenido.style.paddingBottom = '109.3px';
    cajaSinContenido.style.paddingTop = '137.px';
    

    let sinContendioImg = document.createElement('img');
    sinContendioImg.setAttribute('src', './img/icon-fav-sin-contenido.svg');
    sinContendioImg.style.width = '150px';
    sinContendioImg.style.height = '151px';

    let sinContendioTexto = document.createElement('p');
    sinContendioTexto.innerHTML = '<p>"¡Guarda tu primer GIFO en Favoritos</p><br><p> para que se muestre aquí!"</p>';
    sinContendioTexto.style.textAlign = 'center';
    sinContendioTexto.style.color = '#50E3C2';
    sinContendioTexto.style.fontFamily = "'Montserrat', sans-serif";
    sinContendioTexto.style.fontSize = '22px';
    sinContendioTexto.style.fontWeight = '700';
    sinContendioTexto.style.lineHeight = '33px';


    let objetoPrueba = sessionStorage.getItem('prueba');

    sinContendioTexto.innerHTML = objetoPrueba; //insercion de prueba. 


    // inserciones
    cajaSinContenido.appendChild(sinContendioImg); //insertar img de sin contenido en la caja sin contenido
    cajaSinContenido.appendChild(sinContendioTexto); //insertar texto de sin contenido en la caja sin contenido
   
    console.log(objetoPrueba); //insercion objeto prueba
    console.log(typeof(objetoPrueba));

   
    seccionFavoritos.appendChild(corazonFavoritos); //insertar corazon en la seccion
    seccionFavoritos.appendChild(tituloFavoritos); //insertar titulo en la seccion
    seccionFavoritos.appendChild(cajaFavoritos); //insertar caja de favoritos

    cajaFavoritos.appendChild(cajaSinContenido); //insertar caja sin contenido en la caja favoritos

    seccionTwo.style.order = '2'; //para que la seccion two quede por debajo
    let main = document.querySelector('main');
    main.appendChild(seccionFavoritos); // insercion de la seccion en el main
})