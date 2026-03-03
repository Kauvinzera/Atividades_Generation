import leia from "readline-sync";

let valor;

valor = leia.questionInt("Digite um número e verifique se é par ou ímpar: ");


if (valor % 2 === 0 && valor > 0) {
    console.log(`${valor} é um número Par positivo`);
} else if (valor % 2 === 0 && valor < 0) {
    console.log(`${valor} é um número Par negativo`);
} else if (valor % 2 === 1 && valor > 0) {
    console.log(`${valor} é um número Ímpar positivo`);
} else if (valor % 2 === -1 && valor < 0) {
    console.log(`${valor} é um número Ímpar negativo`);
} else {
    console.log(`${valor} é o número Zero`);
}