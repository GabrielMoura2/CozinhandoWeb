botao = document.querySelector(".botao");
var total = document.querySelector("#resultado").textContent;
botao.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#formulario");
    var produto = novoItem(form);

    var erros = validaProduto(produto);

    if(erros.length > 0){
        exibeErro(erros);
        
        return;
    }
  
    adicionaProdutoNaTabela(produto);
    calculaTotal(produto);

    document.querySelector("#tabela-geral").classList.remove("invisivel");

    form.reset();

    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = "";
});