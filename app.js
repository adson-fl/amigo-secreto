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
        atualizarLista()
    }

}
function atualizarLista(){
    // chamo a lista
    let lista = document.getElementById('listaAmigos');

    // limpar lista
    lista.innerHTML = '';

    // percorre lista 
    for( let i = 0; i < amigos.length; i++){
        // criando elementos na lista 
        let amigo = document.createElement('li');
        // cada elemento da lista recebera o nome de um amigo
        amigo.textContent = amigos[i];
        // inserção dos elementos na minha "ul"
        lista.appendChild(amigo);
    }
    
}

// limpar campo 
function limparCampo(){
    let nome = document.querySelector('input');
    nome.value = '';
}

