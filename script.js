window.addEventListener("DOMContentLoaded", function() {
    // Manipulação do DOM aqui após o carregamento da página
  
    // Definição de dados de teste
    var listaDeAmigos = ["Amigo 1", "Amigo 2", "Amigo 3", "Amigo 4", "Amigo 5"];
  
    // Exemplo: alterar o texto do elemento com ID "titulo"
    var tituloElemento = document.getElementById("titulo");
    tituloElemento.textContent = "Amigos";
  
    // Exemplo: adicionar um evento de clique ao elemento com ID "corpo"
    var corpoElemento = document.getElementById("corpo");
    corpoElemento.addEventListener("click", function() {
      alert("opa");
    });
  
    // Exemplo: preencher a lista de amigos com dados de teste
    var listaAmigosElemento = document.getElementById("lista-amigos");
    listaDeAmigos.forEach(function(amigo) {
      var itemLista = document.createElement("li");
      itemLista.textContent = amigo;
      listaAmigosElemento.appendChild(itemLista);
    });
  });
  