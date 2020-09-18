function adicionaProdutoNaTabela (produto){
    var produtoTr = montarTr(produto);
    var tabela  = document.querySelector("#tabela-produtos");
    tabela.appendChild(produtoTr);
    }

function novoItem(form){

    var produto = {

        produto:form.produto.value,
        pesoEmb:form.pesoEmb.value,
        preco:form.preco.value,
        peso:form.peso.value,
        precoGasto:[],
        excluir: []

    }

    var embalagem = document.querySelector("#seletor-tipoCaixa");
    var receita = document.querySelector("#seletor-tipoUsado");

    produto = precoGasto(produto, embalagem.value, receita.value)
    
    return produto

}

function montarTd(dado){
    var td = document.createElement("td");
    td.textContent = dado;
    /*td.classList.add(class);*/
    
    return td;
}

function montarTr(produto){
    var produtoTr = document.createElement("tr");
    /*produtoTr.classList.add(paciente)*/

    produtoTr.appendChild(montarTd(produto.produto));
    produtoTr.appendChild(montarTd(produto.peso));
    produtoTr.appendChild(montarTd(produto.pesoEmb));
    produtoTr.appendChild(montarTd(produto.preco));
    produtoTr.appendChild(montarTd(produto.precoGasto));

    var botao = document.createElement("input");
    botao.setAttribute("type", "button");

   /* produto.excluir = botao;*/

    produtoTr.appendChild(montarTd(produto.excluir));

    return produtoTr

}

function calculaTotal(produto){

    var total = document.querySelector("#resultado").textContent;
    var gasto = produto.precoGasto;

    total = Number(total,10);
    gasto = Number(gasto,10);
    
    total += gasto;
    total = total.toFixed(2);

    document.querySelector("#resultado").textContent = total;
}