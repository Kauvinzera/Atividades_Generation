let leia = require("readline-sync");

let salario;
let abono;
let novoSalario;

salario = leia.questionFloat("Digite seu salário: R$ ");
abono = leia.questionFloat("Digite o valor do abono: R$ ");

novoSalario = salario + abono;
salarioDiferenca = novoSalario - salario;

console.log("Seu novo salário é: R$ " + novoSalario);
console.log("A diferença do salário é: R$ " + salarioDiferenca.toFixed(2)); // adicao do exercício