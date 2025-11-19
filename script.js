const carte = document.querySelectorAll('.carta');

let cartaGirata = false;
let bloccaBoard = false;
let primaCarta, secondaCarta;

function giraCarta() {
    if(bloccaBoard) return;
    if(this === primaCarta) return;
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

    resetBoard();
}

function rigiraCarte () {
    bloccaBoard = true;

    setTimeout(() => {
        primaCarta.classList.remove('flip');
        secondaCarta.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [cartaGirata, bloccaBoard] = [false, false];
    [primaCarta, secondaCarta] = [null, null];
}
    
carte.forEach(carta => carta.addEventListener('click', giraCarta));

