// let titulo = document.querySelector('h1');

// titulo.innerHTML = 'número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaNumerosSorteados = [];
let limiteTentativas = 10;
let numeroSecreto = NumeroAleatorio();
let tentativas = 1
console.log(numeroSecreto);

function htmlEditor(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    htmlEditor('h1', 'Numero Secreto');
    htmlEditor('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();


htmlEditor('h1', 'Numero Secreto');
htmlEditor('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        htmlEditor('h1', 'Acertou!')
        let mensgaemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        htmlEditor('p', mensgaemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        htmlEditor('h1', 'Errou!')
        if(chute > numeroSecreto){
            htmlEditor('p', 'O numero secreto e menor');
        } else {
            htmlEditor('p', 'O numero secreto e maior');
        }
        tentativas++;
        limparCampo();
    }
}

function NumeroAleatorio() {
    
    let numeroEscolhido = parseInt(Math.random() * limiteTentativas + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == limiteTentativas) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return NumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = NumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}