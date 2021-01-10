

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

const getImagesArray = (imagenes, classParam) => {
    let imagenesArray = [];
    for(i=0; i < imagenes.length; i++){
        if(imagenes[i].classList.value === classParam){
            imagenesArray.push(imagenes[i]);
        }
    }
    return imagenesArray;
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


