function cards(gif, padre, fatherClass, claseDeImg, corazon, title) {

    let divPadre = createbloquePadre(padre, gif);
    let buttonsBox = createButtonsBox(corazon);
    let titleBox = createTitleBox(title);

    divPadre.lastChild.appendChild(buttonsBox);
    divPadre.lastChild.appendChild(titleBox);

    setClass(gif, divPadre, fatherClass, divPadre.lastChild, buttonsBox, titleBox, claseDeImg);

}

const createbloquePadre = (padre, gif) => {
    let divPadre = document.createElement('div'); //En este div sucederan los eventos mouseover
    let hoverBox = document.createElement('div'); // En este se imprimiran los gifs

    padre.appendChild(divPadre);
    divPadre.appendChild(gif);
    divPadre.appendChild(hoverBox);

    return divPadre;
}

const createButtonsBox = (corazon) => {
    let buttonsBox = document.createElement('div');
    btnInsertion(buttonsBox, corazon)
    btnInsertion(buttonsBox, './img/icon-download.svg')
    btnInsertion(buttonsBox, './img/icon-max-normal.svg')

    return buttonsBox;
}

const btnInsertion = (buttonsBox, src) => {
    let btn = document.createElement('div');
    let img = document.createElement('img');

    buttonsBox.appendChild(btn);
    btn.appendChild(img);

    btn.classList.add('btn-gif-card');

    img.setAttribute('src', src);
    if(src === corazonActive){
        img.style.padding = '7px'
    }

    return buttonsBox;
}

const createTitleBox = (title) => {
    let titleDiv = document.createElement('div');
    let titleText = document.createElement('p');
    titleText.innerText = title;

    titleDiv.appendChild(titleText);

    titleText.classList.add('user-title');

    return titleDiv;
}

function setClass(gif, divPadre, fatherClass, hoverBox, buttonsBox, titleBox, classImg) {
    gif.setAttribute('class', classImg);

    divPadre.setAttribute('class', fatherClass)

    hoverBox.setAttribute('class', claseDisplayNone)

    buttonsBox.setAttribute('class', 'button-box');

    titleBox.setAttribute('class', 'title-box');
}



main.addEventListener('mouseover', e => {
    hoverFunction(e);
})

const hoverFunction = (e) => {
    //console.log(e.target)
    if (e.target.classList.contains('imagenes-trending') || e.target.classList.contains('cuadro')) {
        e.target.nextSibling.setAttribute('class', 'hover-box')
    }
    if (e.target == galeryIn || e.target == galery || e.target == seccionTwo || e.target.classList.contains('two-tittle') || e.target.classList.contains('respuesta-de-busqueda') || e.target.classList.contains('caja-de-favoritos') ) {
        for (i = 0; i < galeryIn.children.length; i++) {
            galeryIn.children[i].lastChild.setAttribute('class', claseDisplayNone)
        }

        for (i = 0; i < bloqueDeRespuestas.children.length; i++) {
            try{
                if (bloqueDeRespuestas.children[i].lastChild.classList.contains('botonVerMas')) {} else {
                    bloqueDeRespuestas.children[i].lastChild.setAttribute('class', claseDisplayNone)
                }
            } catch(e){}
        }
        for (i = 0; i < cajaFavoritos.children.length; i++) {
            try{
                if (cajaFavoritos.children[i].lastChild.classList.contains('botonVerMas')) {} else {
                    cajaFavoritos.children[i].lastChild.setAttribute('class', claseDisplayNone)
                }
            } catch(e){}
        }
    }
}