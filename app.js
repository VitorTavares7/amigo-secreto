let nomeDosAmigos = [];

function adicionarAmigos(){
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo == ""){
        alert("O campo está vazio!, Digite um nome");
    }
    else{
        nomeDosAmigos.push(nomeAmigo);
        limparCampo();
        exibirNomes();
    }

}

function limparCampo(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = "";
}

function exibirNomes() {
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = ""; 

    for (let i = 0; i < nomeDosAmigos.length; i++) {
        let item = document.createElement('li'); 
        item.textContent = nomeDosAmigos[i]; 
        lista.appendChild(item); 
    }
}

function sortearAmigo(){
    if (nomeDosAmigos.length == 0){
        alert("Não há amigos para sortear");
    }else {
        let nomeEscolhido = Math.floor(Math.random() * nomeDosAmigos.length);
        console.log(nomeDosAmigos[nomeEscolhido]);
        let lista = document.getElementById('listaAmigos'); 
        lista.innerHTML = ""; 
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = nomeDosAmigos[nomeEscolhido];
    }
}