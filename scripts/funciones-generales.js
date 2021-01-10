//Funcion para descargar imagenes
async function donwloadGif(respuestaGif) {

    let a = document.createElement('a');
    let response = await fetch(respuestaGif.src);
    let file = await response.blob();
    a.download = 'MiNuevoGif.gif';
    a.href = window.URL.createObjectURL(file);
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
    a.click();

}
//Funcion eliminar hijos
function eliminarHijos(padre) {
    while (padre.firstChild) {
        padre.removeChild(padre.firstChild);
    }
}
//Funcion para evitar repetidos
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}



function closeEvent(a, b, c, d, e, f, g, h, i, j){
    a.addEventListener('click', ()=>{
        close(b, c, d, e, f, g, h, i, j)
    }, false)
}
function expandEvent (a, b, c, d, e){
    a.addEventListener('click', ()=>{
        expandir(b, c, d, e)
    })
}









