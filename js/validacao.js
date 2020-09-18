function validaProduto(produto){

    var erros = [];
  
   /* if(!validaPeso(paciente.peso))  erros.push("O Peso é Invalido");
    if(!validaAltura(paciente.altura))  erros.push("A Altura é Invalida");*/
    if(produto.produto.length == 0) erros.push("O Nome do produto não pode ser em branco");
    if(produto.pesoEmb.length == 0) erros.push("O Peso da embalagem não pode ser em branco");
    if(produto.preco.length == 0) erros.push("O Preço do produto não pode ser em branco");
    if(produto.peso.length == 0) erros.push("O Peso gasto na receita não pode ser em branco");
    if(produto.precoGasto == Infinity) erros.push("Erro de converção de unidades");
  
    return erros;
  }

  

  function exibeErro(erros){

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
  
    erros.forEach(function(erro){
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
    })
  
    return ul;
  }