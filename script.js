'use strict';

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav',
};
const criarDiv = (texto) => {
    /* Essa função tem por objetivo criar uma tag <div>    
      dentro da <div class ="container" ...> de forma 
      dinâmica.
    */
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);

}
//Esta função exibir mostrará as letras na telas.
const exibir = (sons) => {
    //Com o Objecto criaremos outro objeto!
    Object.keys(sons).forEach(criarDiv);
}
exibir(sons)
//-----------------------------------------//
const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
}
const adicionarEfeito = (letra) => document.getElementById(letra)
    .classList.add('active');

const removeEfeito = () => {
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transtionend', removeActive);
};

//As instrução abaixo são para capturar as div das letras.
const ativarDiv = (evento) => {
    let letra = '';
    if (evento.type == 'click') {
        letra = evento.target.id;
    } else {
        letra = evento.key.toUpperCase();
    }
    const letraPermitida = sons.hasOwnProperty(letra);
    if (letraPermitida) {
        adicionarEfeito(letra);
        tocarSom(letra);
        removeActive();
    }
}
document.getElementById('container').addEventListener('click', ativarDiv);
window.addEventListener('keydown',ativarDiv);