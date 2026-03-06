const leia = require("readline-sync");

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;
let salarioLiquido;

salarioBruto = leia.questionFloat("Digite seu salário bruto: R$ ");
adicionalNoturno = leia.questionFloat("Digite o valor do adicional noturno: R$ ");
horasExtras = leia.questionFloat("Digite o valor das horas extras: R$ ");
descontos = leia.questionFloat("Digite o valor dos descontos: R$ ");

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("Seu salário líquido é: R$ " + salarioLiquido);