function printGifsSearched(GifsSolicitados, offset) {

    getGifDataArray(GifsSolicitados, offset).then(res =>{
        let dataArray = res;
        
        if(dataArray.length === 0){

            cambiarTitulo('Trending:', 'trending-tt');

            let sinResultado = document.createElement('img');
            sinResultado.setAttribute('src', busquedaSinResultadoSRC);
            bloqueDeRespuestas.appendChild(sinResultado);
        } else {

            cambiarTitulo(GifsSolicitados, 'resultadoTitulo');

            for(i=0; i< dataArray.length; i++){
                cards(dataArray[i][0], bloqueDeRespuestas, 'father-box-searcher', 'cuadro', corazonNormal, dataArray[i][1]);
            }
            insertarBotonVerMas();
        }
    })
}

function insertarBotonVerMas() {
    
    setTimeout(()=>{
        botonVerMas.innerText = 'ver más';
        botonVerMas.classList.add('botonVerMas');

        contenedorDeBotonVerMas.classList.add('contenedor-del-boton-ver-mas');
        contenedorDeBotonVerMas.appendChild(botonVerMas);
        bloqueDeRespuestas.appendChild(contenedorDeBotonVerMas);
    }, 1000)

}

function cambiarTitulo(solicitado, classTitle) {
    //Eliminar sub del trending y cambiar el texto a lo buscado
    if(classTitle == 'resultadoTitulo'){
        resultadoTitulo.innerText = solicitado;
        resultadoTitulo.classList.add(classTitle);
        resultadoTitulo.style.fontSize = '35px';
        resultadoTitulo.style.lineHeight = '30px';
        resultadoTitulo.style.marginBottom = '59px'
        subtitulo.setAttribute('class', claseDisplayNone)
    } else {
        resultadoTitulo.innerText = solicitado;
        resultadoTitulo.classList.add(classTitle);
        resultadoTitulo.style.fontSize = '18px';
        resultadoTitulo.style.lineHeight = '25px';
        resultadoTitulo.style.marginBottom = '0';
        subtitulo.setAttribute('class', 'trending-text letra-color-normal')
    }
}

// Imprimir resultados seleccionados de sugerencia con click en el DOM
function sugestions(li) {
    li.addEventListener('click', () => {
        printGifsSearched(li.innerText, 0, 12);
        //cambiarTitulo(li.innerText);
        eliminarHijos(bloqueDeRespuestas);
        sugerencias.setAttribute('class', 'Lista-Sugerencias');
    }, false);
}
