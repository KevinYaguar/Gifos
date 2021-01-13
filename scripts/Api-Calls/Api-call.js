async function getGifDataArray(topic, offset) {
    const url= `https://api.giphy.com/v1/gifs/search?${ApiKey}&q=${topic}&limit=12&offset=${offset}&rating=g&lang=en`;
    const res = await fetch(url);
    const json = await res.json();
    const data = await json.data;
    
     let arrayDataGifs = [];

     for(gif of data){
         let gifData = []

       const titleGif = document.createElement('h2');
       const imgGif = document.createElement('img');


        titleGif.innerText = gif.title;
         imgGif.setAttribute('src', gif.images.original.url);


         gifData.push(imgGif)
         gifData.push(titleGif.innerText) 


         arrayDataGifs.push(gifData);
    }  
     return arrayDataGifs;
}

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
