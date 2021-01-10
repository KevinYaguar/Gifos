

const mouseEventsColor = (gif, event) => {
    gif.addEventListener(event, ()=>{
        gif.classList.toggle('bloque-para-cada-imagen-hover-background');
        gif.firstChild.classList.toggle('opacity-cero-dot-six');
     })
}

const showButtons = (imagen, event, fav, download, expand) => {
    imagen.addEventListener(event, ()=>{
        fav.classList.toggle('buttonOff');
        download.classList.toggle('buttonOff');
        expand.classList.toggle('buttonOff');

        fav.classList.toggle('btn-gif-card');
        download.classList.toggle('btn-gif-card');
        expand.classList.toggle('btn-gif-card');
    }, false)
}

const getButtons = (imagenes, classParam) => {
    let arrayImagenes = getImagesArray(imagenes, classParam);

    for(i=0; i < arrayImagenes.length; i++){

            let buttonFav = arrayImagenes[i].parentElement.nextSibling;
            let buttonDownload = arrayImagenes[i].parentElement.nextSibling.nextSibling;
            let buttonExpand = arrayImagenes[i].parentElement.nextSibling.nextSibling.nextSibling;

            showButtons(arrayImagenes[i].parentElement.parentElement, 'mouseover', buttonFav, buttonDownload, buttonExpand);
            showButtons(arrayImagenes[i].parentElement.parentElement, 'mouseout', buttonFav, buttonDownload, buttonExpand);   
            //buttonDownload.firstChild.addEventListener('click', () => {return donwloadGif(arrayImagenes[i])}, false); //Descargar GIF      
   }
}

//funciones de botones de las cards

function hoverColor (imagenes, classParam) {
    let arrayImagenes = getImagesArray(imagenes, classParam);
    for(i=0; i < arrayImagenes.length; i++){

        let gif = arrayImagenes[i].parentElement.parentElement;

        mouseEventsColor(gif, 'mouseover');
        mouseEventsColor(gif, 'mouseout');
    }
}

<<<<<<< HEAD
const getImagesArray = (imagenes, classParam) => {
    let imagenesArray = [];
    for(i=0; i < imagenes.length; i++){
        if(imagenes[i].classList.value === classParam){
            imagenesArray.push(imagenes[i]);
        }
    }
    return imagenesArray;
=======
//Hover en flecha izquierda
flechaIzquierda.addEventListener('mouseover', () => {
    flechaIzquierda.setAttribute('src', flechaIzquierdaSrcHover);
});
flechaIzquierda.addEventListener('mouseout', () => {
    flechaIzquierdaHoverReverse();
});

//Hover en flecha derecha
flechaDerecha.addEventListener('mouseover', () => {
    flechaDerecha.setAttribute('src', flechaDerechaSrcHover);
});
flechaDerecha.addEventListener('mouseout', () => {
    flechaDerechaHoverReverse();
});

//Funcion para descargar imagenes
async function algo(imgTrend) {

    let a = document.createElement('a');
    let response = await fetch(imgTrend.src);
    let file = await response.blob();
    a.download = 'MiNuevoGif.gif';
    a.href = window.URL.createObjectURL(file);
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
    a.click();

};
galeryIn.setAttribute('class', 'scrolling-wrapper')
//Fetch imagenes trending
function trending(i) {
    fetch('https://api.giphy.com/v1/gifs/search?' + ApiKey + '&q=trending&limit=25&offset=0&rating=g&lang=en')
        .then(res => res.json())
        .then(json => json.data)
        .then(gif => gif[i].images.original)
        .then(final => {

            let galeryIn = document.getElementById('galeryIn');
            var imgTrend = document.createElement('img');
            imgTrend.setAttribute('src', final.url);
            imgTrend.setAttribute('id', 'imgTrend');
        
            cards(imgTrend, galeryIn, 'imagenes-trending', 'btn-gif-card-trending', corazonNormal);

            

            
            
        });
>>>>>>> cfeeb53d008ae2ccf69bcd02b0f3587a0976a184
}

const carrousel = () => {
    const arrayImgGifs = getGifsArray('trending', 0);

    arrayImgGifs.then(res=>{
        res.forEach(gif=>{        
            cards(gif, galeryIn, 'imagenes-trending', 'btn-gif-card', corazonNormal);
        })
        const imagenes = document.getElementsByTagName('img');
        hoverColor(imagenes, 'imagenes-trending');
        getButtons(imagenes, 'imagenes-trending');
    
    })
}

carrousel();


main.appendChild(seccionMax);


