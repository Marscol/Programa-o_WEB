function buscaNome(){
    return  $('.product-card__title')[index].innerText;
}

function buscaDesconto(){
    return $('.promotion__tag-discount')[index].innerText;
}

 function buscaValor(valor) {	
    return  $('.product-card__link')[valor].innerText;
 }
 
 
 
 var i = 0;
 for (i; i < 16; i++){
     var nome = buscaNomeHotel(i);
     var valor = buscaValorHotel(i);
     var desconto = buscaDescontoHotel(i);
 
     console.log(" ");
     console.log("Nome: " + nome);
     console.log("Desconto: " + desconto);
     console.log("Valor: R$" + valor);
 }
//Realizar um web-scraping na pagina do Hub (https://www.hurb.com/br) e 
//montar uma lista com as promoções da pagina principal

/*
	
[
    {
        "nome": "Pacote Maceió + Maragogi + Porto de Galinhas",
        "desconto": "50%",
        "valor": "R$999"
    },
    {
        "nome": "Pacote Orlando + Miami - 2021",
        "desconto": "50%",
        "valor": "R$1299"
    }
]
*/