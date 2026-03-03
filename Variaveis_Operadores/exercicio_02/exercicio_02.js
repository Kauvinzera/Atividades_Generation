import leia from "readline-sync";

let nota1;
let nota2;
let nota3;
let nota4;
let mediaFinal;
let aprovacao;

nota1 = leia.questionFloat("Digite sua primeira nota: ");
nota2 = leia.questionFloat("Digite sua segunda nota: ");
nota3 = leia.questionFloat("Digite sua terceira nota: ");
nota4 = leia.questionFloat("Digite sua quarta nota: ");

mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;
aprovacao = mediaFinal >= 7 ? "Aprovado" : "Reprovado"; // adicao do exercício

console.log("Sua média final é: " + mediaFinal.toFixed(1));
console.log("Situação: " + aprovacao);