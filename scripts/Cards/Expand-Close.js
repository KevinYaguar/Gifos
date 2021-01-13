seccionMax.classList.add(claseDisplayNone);
seccionMax.appendChild(cruzClose);
seccionMax.appendChild(contenedorBajoMax);
contenedorBajoMax.appendChild(buttonBoxMax);
buttonBoxMax.classList.add('button-box-max');

function expandir(gif, btnFav, btnDownload, user, fatherClass) {

    showHide(seccionMax, 'seccion-max', seccionOne, seccionTwo);

    gif.setAttribute('class', 'img-max')

    seccionMax.insertBefore(gif, contenedorBajoMax)
    
    contenedorBajoMax.insertBefore(user, buttonBoxMax);
    buttonBoxMax.appendChild(btnFav);
    buttonBoxMax.appendChild(btnDownload);

    cruzClose.addEventListener('click', e => {
        close(e, fatherClass);
    });
}

const gifAndButtonsBack = (e, arrayFatherBoxes) =>{
    //insercion de botones
    for(i=0; i < arrayFatherBoxes.length; i++){
        let hoverBox = arrayFatherBoxes[i].lastChild;
        if(hoverBox.children.length == 1){

            let titleBox = e.target.nextSibling.nextSibling.firstChild;
            let buttonsBox  =  arrayFatherBoxes[i].lastChild.firstChild;
            //let favBox  =  e.target.nextSibling.nextSibling.firstChild.firstChild;
            let expandBox = arrayFatherBoxes[i].lastChild.firstChild.firstChild;
            let downBox = e.target.nextSibling.nextSibling.lastChild.lastChild;

            hoverBox.appendChild(titleBox)
            buttonsBox.insertBefore(e.target.nextSibling.nextSibling.firstChild.firstChild, expandBox)
            buttonsBox.insertBefore(downBox, expandBox)
            
        }
    }
    //insercion de gif
    for(i=0; i < arrayFatherBoxes.length; i++){
        if(arrayFatherBoxes[i].firstChild.classList.value === 'hover-box'){
            let gif = e.target.nextSibling;
            arrayFatherBoxes[i].insertBefore(gif, arrayFatherBoxes[i].lastChild)
        }
    }
}

const close = (e, fatherClass) => {
    
    const arrayFatherBoxes = document.getElementsByClassName(fatherClass);

    if(fatherClass === 'father-box-carrousel'){
        e.target.nextSibling.setAttribute('class', 'imagenes-trending')
    } else{
        e.target.nextSibling.setAttribute('class', 'cuadro')
    }

    gifAndButtonsBack(e, arrayFatherBoxes);


    if(misGifos.classList.value == "favoritos-activado"){
        showHide(seccionMisGifos, 'seccion-favoritos', seccionMax)
    } else if(favoritos.classList.value == "favoritos-activado"){
        showHide(seccionFavoritos, 'seccion-favoritos', seccionMax)
    } else{
        showHide(seccionOne, 'one', seccionMax)
        showTrending(seccionTwo, 'two');
    }
}
