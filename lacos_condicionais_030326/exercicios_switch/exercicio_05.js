const leia = require("readline-sync");

let codigo;
let quantidade;
let valor;
let total;
let selecionado;

console.log("Menu de Produtos:");
console.log("1 - Cachorro-quente - R$ 10.00");
console.log("2 - X-Salada - R$ 15.00");
console.log("3 - X-Bacon - R$ 18.00");
console.log("4 - Bauru - R$ 12.00");
console.log("5 - Refrigerante - R$ 8.00");
console.log("6 - Suco de laranja - R$ 13.00");

codigo = leia.questionInt("Digite o código do produto (de 1 a 6): ");


switch (codigo) {
    case 1:
        valor = 10.00;
        console.log("Produto selecionado: Cachorro-quente");
        console.log("Preço: R$" + valor.toFixed(2));
        quantidade = leia.questionInt("Digite a quantidade que deseja: ");
        selecionado = "Cachorro-quente";
        break;
    case 2:
        valor = 15.00;
        console.log("Produto selecionado: X-Salada");
        console.log("Preço: R$" + valor.toFixed(2));
        quantidade = leia.questionInt("Digite a quantidade que deseja: ");
        selecionado = "X-Salada";
        break;
    case 3:
        valor = 18.00;
        console.log("Produto selecionado: X-Bacon");
        console.log("Preço: R$" + valor.toFixed(2));
        quantidade = leia.questionInt("Digite a quantidade que deseja: ");
        selecionado = "X-Bacon";
        break;
    case 4:
        valor = 12.00;
        console.log("Produto selecionado: Bauru");
        console.log("Preço: R$" + valor.toFixed(2));
        quantidade = leia.questionInt("Digite a quantidade que deseja: ");
        selecionado = "Bauru";
        break; 
    case 5:
        valor = 8.00;
        console.log("Produto selecionado: Refrigerante");
        console.log("Preço: R$" + valor.toFixed(2));
        quantidade = leia.questionInt("Digite a quantidade que deseja: ");
        selecionado = "Refrigerante";
        break;
    case 6:
        valor = 13.00;
        console.log("Produto selecionado: Suco de laranja");
        console.log("Preço: R$" + valor.toFixed(2));
        quantidade = leia.questionInt("Digite a quantidade que deseja: ");
        selecionado = "Suco de laranja";
        break;
    default:
        console.log("Código de produto inválido.");
        break;
}

total = valor * quantidade;
console.log(`Produto selecionado: ${selecionado}`);
console.log("Valor total: R$" + total.toFixed(2));
