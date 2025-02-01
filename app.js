//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array vazio 
let amigos = [];
let amigosDisponiveis = [...amigos];  

function adicionarAmigo(){

    let nome = document.querySelector('input').value;

    if (nome == ''){
        alert('ERRO: por favor, insira um nome');
    }
    else if(amigos.includes(nome)){
        alert('ERRO: este nome já foi adicionado');
    }
    else{
        amigos.push(nome);
        console.log(amigos);

        limparCampo();
        atualizarLista();
        // garante que a lista reapareça ao ser adicionado mais amigos.
        document.getElementById('listaAmigos').style.display = 'block';
    }

}
function atualizarLista(){
    // chamo a lista
    let lista = document.getElementById('listaAmigos');
    // limpar lista, assim garantindo que não haja duplicidade ao atualiz-la
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

function sortearAmigo(){  //
    if(amigosDisponiveis.length === 0){
        amigosDisponiveis = [...amigos];
        return;
    }

    exibirAmigoSorteado();
    esconderListaDeAmigos();
   
}

function exibirAmigoSorteado(){
    // reseta a lista quando for zerada 
    if(amigosDisponiveis.length === 0) return;
    // pega um indice de forma aleatoria
    let indiceSorteado = Math.floor(Math.random() * amigosDisponiveis.length);
    // pega o elemento da lista pelo indice e o remove da lista 
    let amigo = amigosDisponiveis.splice(indiceSorteado, 1)[0];

    let lista = document.getElementById('resultado');
    lista.innerHTML = '';

    let li = document.createElement('li');
    li.innerText = `O amigo secreto sorteado é: ${amigo}`;
    lista.append(li);

    console.log(amigo);
}

function esconderListaDeAmigos(){
     // Esconde a lista original 
     document.getElementById('listaAmigos').style.display = 'none';
}

// limpar campo 
function limparCampo(){
    let nome = document.querySelector('input');
    nome.value = '';
}

