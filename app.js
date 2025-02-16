let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector("input").value.trim();
    
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    } 
    
    amigos.push(nomeAmigo);
    console.log(amigos);
    limparCampo();
    atualizarLista();
}

function limparCampo() {
    document.querySelector('input').value = "";
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    if (!listaAmigos) {
        console.error("Elemento <ul> não encontrado!");
        return;
    }

    listaAmigos.innerHTML = '';

    amigos.forEach(function (amigo) {
        const novoItemLista = document.createElement('li');
        novoItemLista.textContent = amigo;
        listaAmigos.appendChild(novoItemLista);
    });
}

function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;

    amigos = [];
    atualizarLista();
}
