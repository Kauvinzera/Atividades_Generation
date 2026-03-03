import leia from "readline-sync";


let operacao;
let saldo = 1000.00;
let valor;

console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Depósito");
operacao = leia.questionInt("Digite a operacao: ");

switch (operacao) {
    case 1:
        console.log("Operação - Saldo")
        console.log(`Saldo atual: R$${saldo.toFixed(2)}`);
        break;
    case 2:
        console.log("Operação - Saque")
        valor = leia.questionFloat("Digite o valor do saque: ");
        if (valor > saldo) {
            console.log("Saldo insuficiente para realizar o saque.");
        } else {
            saldo -= valor;
            console.log(`Saque realizado com sucesso. Novo saldo: R$${saldo.toFixed(2)}`);
        }
        break;
    case 3:
       console.log("Operação - Depósito")
       valor = leia.questionFloat("Digite o valor do depósito: ");
       saldo += valor;
       console.log(`Depósito realizado com sucesso. Novo saldo: R$${saldo.toFixed(2)}`);
        break;
    default:
        console.log("Operação inválida!");
        break;
        }