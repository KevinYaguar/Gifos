function flechaIzquierdaHoverReverse() {
    switch (cuerpoWeb.classList.value) {
        case 'oscuro':
            flechaIzquierda.setAttribute('src', flechaIzquierdaSrcNocturno);
            break;
        case '':
            flechaIzquierda.setAttribute('src', flechaIzquierdaSrcNormal);
            break;
    }
}

function flechaDerechaHoverReverse() {
    switch (cuerpoWeb.classList.value) {
        case 'oscuro':
            flechaDerecha.setAttribute('src', flechaDerechaSrcNocturno);
            break;
        case '':
            flechaDerecha.setAttribute('src', flechaDerechaSrcNormal);
            break;
    }
}

//Hover en flecha izquierda
flechaIzquierda.addEventListener('mouseover', () => {
    flechaIzquierda.setAttribute('src', flechaIzquierdaSrcHover);
});
flechaIzquierda.addEventListener('mouseout', () => {
    flechaIzquierdaHoverReverse();
});

//Hover en flecha derecha
flechaDerecha.addEventListener('mouseover', () => {
    flechaDerecha.setAttribute('src', flechaDerechaSrcHover);
});
flechaDerecha.addEventListener('mouseout', () => {
    flechaDerechaHoverReverse();
});

function efecto_carrousel() {
    let inicio = 0;
    flechaDerecha.addEventListener('click', () => {
        if (inicio <= -3474) {
            inicio = 386;
        }
        inicio = inicio - 386;

        for(i=0; i < galeryIn.children.length; i++){
            galeryIn.children[i].style.transform = "translateX(" + (inicio) + "px)";
        }
    }), false;
    flechaIzquierda.addEventListener('click', () => {
        if (inicio == 0) {
            inicio = -3860;
        }
        inicio = inicio + 386;
        for(i=0; i < galeryIn.children.length; i++){
           galeryIn.children[i].style.transform = "translateX(" + (inicio) + "px)";
        }
        
    });
}
efecto_carrousel();