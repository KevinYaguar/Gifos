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

        fav.style.gridArea   = '1 / 2';
        download.style.gridArea  = '1 / 4';
        expand.style.gridArea  = '1 / 6';
    }, false)
}


const carrousel = () => {

     getGifDataArray('trending', 0).then(res =>{
         let dataArray = res;
         for(i=0; i< dataArray.length; i++){
             cards(dataArray[i][0], galeryIn, 'father-box-carrousel', 'imagenes-trending', corazonNormal, dataArray[i][1]);
         }
     })
 }

carrousel();





