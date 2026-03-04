import leia from "readline-sync";

let codigo;
let nome;
let salario;
let novoSalario;
let reajuste;
let cargo;

nome = leia.question("Digite o nome do colaborador: ");

console.log("Código dos Cargos:");
console.log("1 - Gerente");
console.log("2 - Venderdor");
console.log("3 - Supervisor");
console.log("4 - Motorista");
console.log("5 - Estoquista");
console.log("6 - Técnico de TI");

codigo = leia.questionInt("Digite o código do cargo (de 1 a 6): ");
salario = leia.questionFloat("Digite o salário atual do colaborador: ");


switch (codigo) {
    case 1:
        reajuste = 10;
        cargo = "Gerente";
        break;
    case 2:
        reajuste = 7;
        cargo = "Vendedor";
        break;
    case 3:
        reajuste = 9;
        cargo = "Supervisor";
        break;
    case 4:
        reajuste = 6;
        cargo = "Motorista";
        break;
    case 5:
        reajuste = 5;
        cargo = "Estoquista";
        break;
    case 6:
        reajuste = 8;
        cargo = "Técnico de TI";
        break;
    default:
        console.log("Código de cargo inválido!");
        break;
}

novoSalario = salario + (reajuste * salario) / 100;
console.log(`Nome do colaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário antigo: R$${salario.toFixed(2)}`);
console.log(`Reajuste: ${reajuste}%`);
console.log(`Novo salário: R$${novoSalario.toFixed(2)}`);
