const bloques = (padre, gif) => {
    let bloqueParaCadaImagen = document.createElement('div'); //En este div sucederan los eventos mouseover
    let bloqueParaCadaImagenInferior = document.createElement('div'); // En este se imprimiran los gifs

    padre.appendChild(bloqueParaCadaImagen);
    bloqueParaCadaImagen.appendChild(bloqueParaCadaImagenInferior);
    bloqueParaCadaImagenInferior.appendChild(gif);

    return bloqueParaCadaImagen;
}

function setClass(a, b, c, classParam) {
    a.setAttribute('class', classParam);
    b.setAttribute('class', classParam);
    c.setAttribute('class', classParam);
}




const btnInsertion = (bloqueParaCadaImagen, src) =>{
    let btn = document.createElement('div');
    let img = document.createElement('img');

    bloqueParaCadaImagen.appendChild(btn);
    btn.appendChild(img);

    btn.classList.add('buttonOff');

    img.setAttribute('src', src);

    return bloqueParaCadaImagen;
}



function cards(gif, padre, claseDeHover, claseDeBotones, corazon) {
    const bloqueParaCadaImagen = bloques(padre, gif);
    btnInsertion(bloqueParaCadaImagen, corazon)
    btnInsertion(bloqueParaCadaImagen, './img/icon-download.svg')
    btnInsertion(bloqueParaCadaImagen, './img/icon-max-normal.svg')

    setClass(bloqueParaCadaImagen, bloqueParaCadaImagen.firstChild, gif, claseDeHover);//Insercion de clases de bloques


    // expandEvent(expandImg, gif, btnFav, btnDownload, btnExpand); //Evento expandir
  
    // closeEvent(cruzClose, btnFav, btnDownload, btnExpand, bloqueParaCadaImagen.firstChild, gif, bloqueParaCadaImagen, heartFav, downloadImg, expandImg)
}