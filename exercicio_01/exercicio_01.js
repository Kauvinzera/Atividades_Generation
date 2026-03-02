let leia = require("readline-sync");

let salario;
let abono;
let novoSalario;

salario = leia.questionFloat("Digite seu salário: R$ ");
abono = leia.questionFloat("Digite o valor do abono: R$ ");

novoSalario = salario + abono;

console.log("Seu novo salário é: R$ " + novoSalario);