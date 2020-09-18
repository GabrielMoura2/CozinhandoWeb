function precoGasto(produto, embalagem, receita){

    var kEmbalagem = 1;
    var kReceita = 1;


    if(embalagem != receita){
        switch(embalagem){
            case "kg":
                switch(receita){
                    case "g": {kReceita = 1000; break;}
                    case "L": {kReceita = 0; break;}
                    case "mL":{kReceita = 0; break;}
                    case "unidades": {produto.peso *= produto.pesoEmb; break;}
                } break;

            case "g":
                switch(receita){
                    case "kg": {kEmbalagem = 1000; break;}
                    case "L":   {kReceita = 0; break;}
                    case "mL":  {kReceita = 0; break;}
                    case "unidades": {produto.peso *= produto.pesoEmb; break;}
                } break;

            case "L":
                switch(receita){
                    case "kg":  {kReceita = 0; break;}
                    case "g":   {kReceita = 0; break;}
                    case "mL": {kReceita = 1000; break;}
                    case "unidades": {produto.peso *= produto.pesoEmb; break;}
                } break;

            case "mL":
                switch(receita){
                    case "kg":  {kReceita = 0; break;}
                    case "g":   {kReceita = 0; break;}
                    case "L": {kEmbalagem = 1000; break;}
                    case "unidades": {produto.peso *= produto.pesoEmb; break;}
                } break;

            case "unidades":
                switch(receita){
                    case "kg": {kReceita = 0; break;}
                    case "g": {kReceita = 0; break;}
                    case "L": {kReceita = 0; break;}
                    case "mL": {kReceita = 0; break;}
                } break;
        }
    }

    var constante = kEmbalagem/kReceita;
    produto.precoGasto = (produto.preco*produto.peso/produto.pesoEmb)*constante;
    produto.precoGasto = produto.precoGasto.toFixed(2);

    return produto
}