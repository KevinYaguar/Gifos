//Menu Hamburguesa a X
let hamburguesa = document.getElementById('fa-bars');
hamburguesa.addEventListener('click',() => {
    hamburguesa.classList.toggle('fa-times');
    hamburguesa.classList.toggle('fa-bars');
})

//Fetch imagenes trending


function trending (){
    fetch('https://api.giphy.com/v1/gifs/search?api_key=1yVSM9oVX3z5nlo213gmodWDvoRxttsM&q=cats&limit=25&offset=0&rating=g&lang=en')
        .then(res=> res.json())
            .then(json => json.data)
                .then(gif => gif[0])
                    .then(final => {
                        let primerImagen = document.getElementById('primer-imagen');
                        primerImagen.setAttribute('src', final.url)
                    })
}
trending();

