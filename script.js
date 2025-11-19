const carte = document.querySelectorAll('.carta');
const modale = document.querySelector('modal');
const giocaDiNuovo = modale.querySelector('.giocaDiNuovo');

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
    primaCarta.removeEventListener('click', giraCarta);
    secondaCarta.removeEventListener('click', giraCarta);

    resetBoard();
    carteTerminate();
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

function carteTerminate() {
    const carteGirate = document.querySelectorAll('.flip').length;
    if(carteGirate === 12){
        const body = document.body;
        const party = new JSConfetti({body});
        party.addConfetti();
        modale.removeAttribute('hidden');
        body.classList.add("vittoria");
    }
}

(function mischia () {
    carte.forEach(carta => {
        const posizioneCasuale = Math.floor(Math.random() * 12);
        carta.style.order = posizioneCasuale;

    })
})();
    
carte.forEach(carta => carta.addEventListener('click', giraCarta));
giocaDiNuovo.addEventListener('click', () => location.reload());
