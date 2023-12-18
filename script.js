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
const exibir = (sons)=>{
    //Com o Objecto criaremos outro objeto!
    Object.keys(sons).forEach(criarDiv);
}
exibir(sons)
//-----------------------------------------//
//As instrução abaixo são para capturar as div das letras.
const ativarDiv = document.getElementById('container');
ativarDiv.addEventListener('click',(evento)=>{
    const letra = evento.target.id;
    //console.log(letra)
    tocarSom(letra);
})
