//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array vazio 
let amigos = [];

function adicionarAmigo(){

    let nome = document.querySelector('input').value;

    if (nome == ''){
        alert('ERRO: por favor, insira um nome');
    }
    else{
        amigos.push(nome);
        console.log(amigos);
        limparCampo()
    }

}
// limpar campo 
function limparCampo(){
    let nome = document.querySelector('input');
    nome.value = '';
}