masGifosImg.addEventListener('mouseover', ()=>{
    if(masGifosImg.src == 'http://127.0.0.1:5500/img/button-crear-gifo.svg'){
        masGifosImg.setAttribute('src', './img/CTA-crear-gifo-hover.svg');
    }
}, false);

masGifosImg.addEventListener('mouseout', ()=>{
    if(masGifosImg.src == 'http://127.0.0.1:5500/img/CTA-crear-gifo-hover.svg'){
        masGifosImg.setAttribute('src', './img/button-crear-gifo.svg');
    }
},false);