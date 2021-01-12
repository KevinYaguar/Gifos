async function obetenerSugerencias(busquedaIngresada) {
    let url = 'https://api.giphy.com/v1/gifs/search/tags?' + ApiKey + '&q=' + busquedaIngresada;
    let response = await fetch(url);
    let json = await response.json();
    let data = await json.data;

    eliminarHijos(sugerencias);

    data.forEach(item => {
        let sugestion = document.createElement('li');
        sugestion.classList.add('sug');
        sugestion.innerHTML = `<i class="fas fa-search" id="buscador"></i> ${item.name}`
        sugerencias.appendChild(sugestion)
        sugestions(sugestion);
        
    })
}