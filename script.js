const carte = document.querySelectorAll('.carta');

let cartaGirata = false;
let primaCarta, secondaCarta;

function giraCarta() {
    this.classList.add('flip');

    if(!cartaGirata){
        cartaGirata = true;
        primaCarta = this;
        return;
    }

    secondaCarta = this;
    cartaGirata = false;

    controllaCorrispondenza();
}

function controllaCorrispondenza () {
    // if(primaCarta.dataset.forma === secondaCarta.dataset.forma) {
    //     disabilitaCarte();
    //     return;
    // }

    // rigiraCarte();
    let corrisponde =  primaCarta.dataset.forma === secondaCarta.dataset.forma ? disabilitaCarte(): rigiraCarte();

}

function disabilitaCarte () {
    primaCarta.removeEventListner('click', giraCarta);
    secondaCarta.removeEventListner('click', giraCarta);
}

function rigiraCarte () {
    setTimeout(() => {
        primaCarta.classList.remove('flip');
        secondaCarta.classList.remove('flip');
    }, 1500);
}
    

carte.forEach(carta => carta.addEventListener('click', giraCarta));

